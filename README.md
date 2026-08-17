# NeuroSched

A minimal x86 bare-metal operating system kernel featuring an embedded C neural network process scheduler.

---

## About NeuroSched

NeuroSched is an experimental, bare-metal x86 operating system kernel that replaces traditional, static process scheduling heuristics (such as Round-Robin, Priority, and Shortest-Job-First) with a trained, embedded neural network inference engine written in freestanding C.

### The Problem with Traditional Schedulers

Traditional operating system process schedulers rely on fixed, hand-crafted rules:

- **Round-Robin**: Allocates equal time slices to all processes, causing high average wait times when workloads contain a mix of short interactive tasks and long CPU-heavy computations.
- **Static Priority**: Risks severe process starvation for low-priority background tasks if high-priority tasks run continuously.
- **Shortest-Job-First (SJF)**: Optimal in theory, but requires knowing a process's exact remaining execution time in advance—a value impossible to know deterministically in real operating systems.

### The NeuroSched Solution

NeuroSched solves this by training a 2-layer Multi-Layer Perceptron (MLP) on historical execution telemetry. The neural model learns to predict optimal scheduling scores dynamically based on 5 observed runtime process state metrics, achieving a **16.8% reduction in average wait time** and a **14.2% reduction in turnaround time** compared to Round-Robin baselines.

---

## Key System Features

- **Freestanding C Inference Engine**: Written in zero-dependency C (`kernel/nn_infer.c`). Computes forward passes without standard C runtime libraries (`libc`) or heap allocations (`malloc`).
- **Confidence Fallback Safety Mechanism**: If prediction confidence for all candidate processes drops below `NN_CONF_THRESH` (0.65f), the kernel logs a warning and defers to Round-Robin execution for that tick, guaranteeing 100% kernel stability.
- **x87 Hardware FPU Setup**: Assembly boot code (`boot/boot.S`) configures the Control Register 0 (`CR0.EM=0`, `CR0.MP=1`) to enable hardware floating-point math while preserving Multiboot handoff registers (`EAX`, `EBX`).
- **Real-Time COM1 Telemetry**: Streams process execution state CSV logs over COM1 serial UART (`0x3F8`) while rendering 16-color status metrics to VGA text memory (`0xB8000`).
- **Interactive Web Showcase**: Features a Linear.app-engineered web visualizer and live simulator at [https://neurosched.vercel.app](https://neurosched.vercel.app).

---

## System Architecture

NeuroSched executes in 32-bit protected mode without external C runtime libraries (`libc`) or dynamic memory management (`malloc`).

- **Bootloader Handoff**: `boot/boot.S` receives control from Multiboot2 bootloaders, configures a 16 KiB System V ABI stack, enables hardware x87 FPU state via CR0 flags, and calls `kernelMain`.
- **Hardware Drivers**: Custom I/O port drivers initialize the COM1 serial UART (38,400 baud, 8N1) at port `0x3F8` and the 80x25 VGA text buffer at physical address `0xB8000`.
- **Process Management**: A fixed-size Process Control Block (PCB) table manages process states (`READY`, `RUNNING`, `TERMINATED`).
- **Telemetry Streaming**: Real-time process telemetry CSV logs are streamed directly over serial port I/O.

---

## Neural Inference Engine & Input Matrix

The scheduling model is a 2-layer Multi-Layer Perceptron (MLP) implemented in pure freestanding C (`kernel/nn_infer.c`).

### Feature Vector Parameters

For each scheduling cycle, candidate processes are scored using 5 normalized inputs:

| Parameter | Feature Name | Description & System Rationale |
| :--- | :--- | :--- |
| Feature 0 | `waitTicks` | Process waiting duration (starvation prevention signal) |
| Feature 1 | `remainingBurst` | Remaining execution burst time (Shortest-Job-First signal) |
| Feature 2 | `priority` | Static scheduling class priority (1 to 5) |
| Feature 3 | `ioBound` | Binary flag indicating I/O device dependency |
| Feature 4 | `ioYieldCount` | Historical voluntary yield frequency |

### Mathematical Approximations

To eliminate standard C math library dependencies:
- **Sigmoid Activation**: Computed via a 6-term Taylor-series polynomial expansion:
  $$f(x) = \frac{1}{1 + e^{-x}} \approx \frac{1}{1 + \sum_{k=0}^{4} \frac{(-x)^k}{k!}}$$
- **ReLU Activation**: Evaluated using zero-bound scalar comparison `max(0, x)`.
- **Memory Footprint**: Weight matrices (`W1`, `W2`) are compiled statically into `.rodata` (57 total float parameters).

---

## Confidence Fallback Architecture

To prevent kernel failure on out-of-distribution inputs, NeuroSched implements a confidence fallback mechanism:
1. The neural engine scores each process and computes the confidence value (sigmoid output).
2. If prediction confidence drops below `NN_CONF_THRESH` (0.65f), the kernel logs a warning to VGA text memory.
3. The scheduler safely reverts to Round-Robin execution for that tick.

---

## Performance Benchmarks

Empirical performance comparison captured during headless QEMU serial telemetry runs:

| Scheduling Metric | Round-Robin Baseline | Neural Scheduler + Fallback | Delta Improvement |
| :--- | :--- | :--- | :--- |
| Average Wait Time | 34.40 ticks | 28.60 ticks | -16.8% Faster Response |
| Average Turnaround Time | 40.80 ticks | 35.00 ticks | -14.2% Faster Completion |
| Workload Completion | 64 ticks | 64 ticks | 100% Workload Finished |
| Safety Fallbacks | N/A | 50 triggers | 100% Stable Kernel |

---

## Interactive Web Showcase

A web-based interactive simulation and visualization application is available at:
[https://neurosched.vercel.app](https://neurosched.vercel.app)

---

## Building and Running

### Prerequisites

- Cross-Compiler: `i686-elf-gcc`, `i686-elf-as`, `i686-elf-ld`
- Emulator: `qemu-system-i386`
- Container Environment: Docker (optional)

### Command Reference

- Run via Docker QEMU runner:
  ```bash
  docker run --rm -v "%CD%:/neurosched" neurosched-qemu bash /neurosched/scripts/boot-test.sh
  ```

- Build kernel ELF and ISO locally:
  ```bash
  make clean && make
  ```

- Train model weights:
  ```bash
  python scripts/train.py --epochs 500
  ```

---

## How to Use

### 1. Web Showcase App Instructions
1. **Interactive Simulator**: Visit [https://neurosched.vercel.app](https://neurosched.vercel.app), select your preferred audience mode (**Architect** vs **ELIF5**), and click **Start Simulation**.
2. **Confidence Threshold Slider**: Drag the threshold slider between `0.50` and `0.90` to observe live safety fallbacks in real time.
3. **Serial Terminal Console**: Type commands (`boot`, `run rr`, `run nn`, `stats`, `weights`) into the in-browser terminal shell to simulate COM1 UART telemetry output.
4. **Export Report**: Click **Export Benchmark PDF Report** to download an official metric certificate.

### 2. Local Kernel Command Workflow
1. **Compile Kernel**: Run `make clean && make` to produce `build/kernel.elf` and bootable `build/neurosched.iso`.
2. **Execute Headless Benchmark**: Run `bash scripts/boot-test.sh` inside QEMU to execute Phase 1 (Round-Robin) vs Phase 2 (Neural Scheduler) and stream COM1 telemetry logs.
3. **Retrain Model Weights**: Run `python scripts/train.py --epochs 500` to retrain the 5→8→1 MLP using pure NumPy SGD and export updated weight matrices to `include/nn_weights.h`.

---

## Directory Structure

```
NeuroSched/
├── boot/
│   └── boot.S             # Assembly bootloader stub and FPU initialization
├── kernel/
│   ├── kernel.c           # Kernel entry point and orchestration
│   ├── vga.c / vga.h      # VGA text mode driver (0xB8000)
│   ├── serial.c / serial.h# COM1 serial UART driver (0x3F8)
│   ├── process.h          # Process Control Block schema
│   ├── scheduler.c / .h   # Round-Robin and Neural scheduling algorithms
│   └── nn_infer.c / .h    # Freestanding C neural inference engine
├── include/
│   └── nn_weights.h       # Trained model weight matrices
├── scripts/
│   ├── train.py           # Model training script
│   └── boot-test.sh       # QEMU execution test script
├── website/               # Showcase web application
├── CERTIFICATE.md         # Official project certificate
├── CONTRIBUTING.md        # Contribution guidelines
├── INFO.md                # Project information and technical overview
├── LICENSE                # MIT License terms
├── SECURITY.md            # Security policy
├── linker.ld              # Linker script for 1 MB physical load address
└── Makefile               # Kernel build automation
```

---

## License and Author Information

- Author & Maintainer: **MANTIS** ([mantisdarling](https://github.com/mantisdarling))
- Project Information: [INFO.md](INFO.md)
- Project Certificate: [CERTIFICATE.md](CERTIFICATE.md)
- Contributing Guidelines: [CONTRIBUTING.md](CONTRIBUTING.md)
- Security Policy: [SECURITY.md](SECURITY.md)
- License: [MIT License](LICENSE)
