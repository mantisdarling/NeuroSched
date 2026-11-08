import React, { useState } from 'react';
import { Grid, Eye } from 'lucide-react';

export default function WeightHeatmap() {
  const [hoveredWeight, setHoveredWeight] = useState(null);

  /* 5 inputs by 8 hidden neurons weight matrix W1 */
  const features = ['wait_ticks', 'remaining_burst', 'priority', 'io_bound', 'io_yield_count'];
  const neurons = ['H0', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7'];

  const W1 = [
    [ 0.42, -0.18,  0.85,  0.33, -0.09,  0.61, -0.27,  0.74],
    [-0.65,  0.91, -0.12,  0.44,  0.58, -0.36,  0.82, -0.15],
    [ 0.31,  0.22,  0.67, -0.54,  0.19,  0.88, -0.41,  0.05],
    [-0.08,  0.77,  0.49,  0.16, -0.62,  0.29,  0.53, -0.84],
    [ 0.93, -0.34,  0.07,  0.71,  0.25, -0.19,  0.64,  0.48]
  ];

  const getColor = (val) => {
    if (val > 0) {
      const alpha = Math.min(Math.abs(val), 1);
      return `rgba(29, 78, 216, ${0.28 + alpha * 0.72})`;
    } else {
      const alpha = Math.min(Math.abs(val), 1);
      return `rgba(22, 163, 74, ${0.28 + alpha * 0.72})`;
    }
  };

  return (
    <div className="appleCardDark bg-[#1d1d1f] p-5 sm:p-7 space-y-6 border border-[rgba(255,255,255,0.1)]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div className="space-y-1">
          <div className="text-[12px] font-semibold text-[#3b82f6] uppercase tracking-wider flex items-center gap-1.5">
            <Grid className="w-3.5 h-3.5" />
            <span>Layer 1 Parameter Weights</span>
          </div>
          <h3 className="text-[21px] font-semibold text-white tracking-tight">
            5 by 8 Synaptic Weight Matrix (W1)
          </h3>
        </div>
        <div className="text-[13px] text-[#86868b]">
          Hover any cell to inspect synapse connection strength
        </div>
      </div>

      {/* Grid Table */}
      <div className="overflow-x-auto">
        <table className="w-full font-mono text-[12px] text-center border-collapse">
          <thead>
            <tr>
              <th className="p-2.5 border border-[rgba(255,255,255,0.08)] bg-[#161617] text-[#86868b] text-left rounded-tl-[10px]">
                Input Feature
              </th>
              {neurons.map((n, idx) => (
                <th 
                  key={n} 
                  className={`p-2.5 border border-[rgba(255,255,255,0.08)] bg-[#161617] text-[#3b82f6] font-semibold ${
                    idx === neurons.length - 1 ? 'rounded-tr-[10px]' : ''
                  }`}
                >
                  {n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {W1.map((row, i) => (
              <tr key={i}>
                <td className="p-2.5 border border-[rgba(255,255,255,0.08)] bg-[#161617] text-left text-white font-medium">
                  {features[i]}
                </td>
                {row.map((val, j) => (
                  <td
                    key={j}
                    onMouseEnter={() => setHoveredWeight({ feat: features[i], neuron: neurons[j], val })}
                    onMouseLeave={() => setHoveredWeight(null)}
                    className="p-3 border border-[rgba(255,255,255,0.08)] font-semibold cursor-pointer transition-transform duration-150 hover:scale-105"
                    style={{ backgroundColor: getColor(val), color: '#ffffff' }}
                  >
                    {val > 0 ? `+${val.toFixed(2)}` : val.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hover Info Tooltip Panel */}
      <div className="bg-[#161617] rounded-[14px] border border-[rgba(255,255,255,0.08)] p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[13px]">
        {hoveredWeight ? (
          <div className="flex items-center gap-3">
            <Eye className="w-4 h-4 text-[#3b82f6]" />
            <div>
              <span className="text-[#86868b]">Synapse: </span>
              <strong className="text-[#3b82f6] font-mono">{hoveredWeight.feat}</strong> to <strong className="text-white font-mono">{hoveredWeight.neuron}</strong>
              <span className="text-[#86868b] ml-4">Weight: </span>
              <strong className="text-white font-mono">{hoveredWeight.val > 0 ? `+${hoveredWeight.val}` : hoveredWeight.val}</strong>
            </div>
          </div>
        ) : (
          <div className="text-[#86868b] flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#86868b]" />
            <span>Hover across cells to inspect sensitivity coefficients.</span>
          </div>
        )}

        <div className="flex items-center gap-4 text-[12px] text-[#86868b]">
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#1d4ed8] inline-block" /> Positive Weight</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-[#16a34a] inline-block" /> Negative Weight</span>
        </div>
      </div>
    </div>
  );
}
