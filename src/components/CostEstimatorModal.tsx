import React, { useState } from 'react';
import { X, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [projectCategory, setProjectCategory] = useState<'roads' | 'pipelines' | 'rcc' | 'building'>('roads');
  const [sizeValue, setSizeValue] = useState<number>(5000);
  const [finishingLevel, setFinishingLevel] = useState<'standard' | 'premium' | 'high_spec'>('premium');

  if (!isOpen) return null;

  const rates: Record<string, { standard: number; premium: number; high_spec: number; unit: string; label: string }> = {
    roads: {
      standard: 12000,
      premium: 18000,
      high_spec: 26000,
      unit: 'running meters',
      label: 'Road Construction & Highway Pavements'
    },
    pipelines: {
      standard: 6500,
      premium: 9500,
      high_spec: 14000,
      unit: 'meters of transmission',
      label: 'Pipelines & Intake Jackwells'
    },
    rcc: {
      standard: 8500,
      premium: 12000,
      high_spec: 17500,
      unit: 'm³ of concrete',
      label: 'Heavy RCC Works & Foundations'
    },
    building: {
      standard: 1800,
      premium: 2600,
      high_spec: 3800,
      unit: 'sq.ft built-up area',
      label: 'Building Construction & Industrial Sheds'
    }
  };

  const currentRate = rates[projectCategory];
  const ratePerUnit = currentRate[finishingLevel];
  const totalCost = sizeValue * ratePerUnit;

  const formatCrores = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Crores`;
    }
    return `₹${(val / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-100 text-[#1d4ca2]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                Construction Budget Estimator
              </h3>
              <p className="text-xs text-slate-500">
                Preliminary civil budgeting benchmark tool
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
              Select Construction Discipline:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'roads', label: 'Road Construction' },
                { id: 'pipelines', label: 'Pipelines Construction' },
                { id: 'rcc', label: 'RCC Works' },
                { id: 'building', label: 'Building Construction' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setProjectCategory(cat.id as any);
                    if (cat.id === 'roads' || cat.id === 'pipelines') {
                      setSizeValue(2000);
                    } else if (cat.id === 'rcc') {
                      setSizeValue(1500);
                    } else {
                      setSizeValue(25000);
                    }
                  }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                    projectCategory === cat.id
                      ? 'bg-[#1d4ca2] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="uppercase font-bold text-slate-700">
                Project Scale ({currentRate.unit}):
              </span>
              <span className="font-mono text-[#1d4ca2] font-bold text-sm bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                {sizeValue.toLocaleString()} {currentRate.unit}
              </span>
            </div>
            <input
              type="range"
              min={projectCategory === 'building' ? 2000 : 200}
              max={projectCategory === 'building' ? 150000 : 25000}
              step={projectCategory === 'building' ? 1000 : 100}
              value={sizeValue}
              onChange={(e) => setSizeValue(Number(e.target.value))}
              className="w-full accent-[#1d4ca2] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>{projectCategory === 'building' ? '2,000 sq.ft' : '200 units'}</span>
              <span>{projectCategory === 'building' ? '150,000 sq.ft+' : '25,000 units+'}</span>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
              Specification & Engineering Grade:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard', label: 'Standard IS Specs' },
                { id: 'premium', label: 'High Durability / MoRTH' },
                { id: 'high_spec', label: 'Heavy Duty / Extreme Spec' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFinishingLevel(f.id as any)}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                    finishingLevel === f.id
                      ? 'bg-blue-50 border-2 border-[#1d4ca2] text-[#1d4ca2] shadow-xs'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Estimated Result Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-[11px] uppercase font-bold text-slate-500 block">
                Estimated Benchmark Civil Cost
              </span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#1d4ca2]">
                {formatCrores(totalCost)}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
                Approx. ₹{ratePerUnit.toLocaleString()} per {currentRate.unit}
              </span>
            </div>

            <Link
              to={`/quote?type=${encodeURIComponent(currentRate.label)}&budget=${encodeURIComponent(formatCrores(totalCost))}`}
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-[#1d4ca2] hover:bg-[#153a7e] text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <span>Request Detailed BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Benchmark estimation only. Detailed costing is customized against soil borings and tender specifications.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
