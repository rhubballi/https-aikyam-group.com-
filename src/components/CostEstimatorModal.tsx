import React, { useState } from 'react';
import { X, Calculator, IndianRupee, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [projectCategory, setProjectCategory] = useState<'bridge' | 'railway' | 'industrial' | 'commercial' | 'residential'>('commercial');
  const [sizeValue, setSizeValue] = useState<number>(20000); // Sq.ft or meters
  const [finishingLevel, setFinishingLevel] = useState<'standard' | 'premium' | 'high_spec'>('premium');

  if (!isOpen) return null;

  // Rate matrix per sq.ft or linear span (indicative Indian industry norms)
  const rates: Record<string, { standard: number; premium: number; high_spec: number; unit: string; label: string }> = {
    commercial: {
      standard: 2400,
      premium: 3200,
      high_spec: 4500,
      unit: 'sq.ft',
      label: 'Commercial Multi-Storey'
    },
    residential: {
      standard: 2100,
      premium: 2900,
      high_spec: 4200,
      unit: 'sq.ft',
      label: 'Residential Enclave / Villas'
    },
    industrial: {
      standard: 1800,
      premium: 2600,
      high_spec: 3600,
      unit: 'sq.ft',
      label: 'Industrial Shed & Heavy Workshop'
    },
    bridge: {
      standard: 180000,
      premium: 260000,
      high_spec: 380000,
      unit: 'linear meters',
      label: 'PSC Box Girder / Major River Bridge'
    },
    railway: {
      standard: 140000,
      premium: 210000,
      high_spec: 310000,
      unit: 'linear meters',
      label: 'Rail-Over-Rail / Alignment Track Bed'
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700/80 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Construction Budget Estimator
              </h3>
              <p className="text-xs text-slate-400">
                Preliminary civil budgeting benchmark tool
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Category Selector */}
          <div>
            <label className="block text-xs uppercase font-bold text-slate-300 mb-2">
              Select Construction Discipline:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'commercial', label: 'Commercial Complex' },
                { id: 'residential', label: 'Residential Villas' },
                { id: 'industrial', label: 'Industrial Workshop' },
                { id: 'bridge', label: 'Major River Bridge' },
                { id: 'railway', label: 'Railway Alignment' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setProjectCategory(cat.id as any);
                    if (cat.id === 'bridge' || cat.id === 'railway') {
                      setSizeValue(150); // meters
                    } else {
                      setSizeValue(20000); // sq ft
                    }
                  }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                    projectCategory === cat.id
                      ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size / Magnitude Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="uppercase font-bold text-slate-300">
                Project Scale ({currentRate.unit}):
              </span>
              <span className="font-mono text-amber-400 font-bold text-sm">
                {sizeValue.toLocaleString()} {currentRate.unit}
              </span>
            </div>
            <input
              type="range"
              min={projectCategory === 'bridge' || projectCategory === 'railway' ? 30 : 2000}
              max={projectCategory === 'bridge' || projectCategory === 'railway' ? 1000 : 250000}
              step={projectCategory === 'bridge' || projectCategory === 'railway' ? 10 : 1000}
              value={sizeValue}
              onChange={(e) => setSizeValue(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1">
              <span>{projectCategory === 'bridge' ? '30m' : '2,000 sq.ft'}</span>
              <span>{projectCategory === 'bridge' ? '1,000m+' : '250,000 sq.ft+'}</span>
            </div>
          </div>

          {/* Specification Grade */}
          <div>
            <label className="block text-xs uppercase font-bold text-slate-300 mb-2">
              Specification & Engineering Grade:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard', label: 'Standard IS Specs' },
                { id: 'premium', label: 'High Durability / IRC' },
                { id: 'high_spec', label: 'Heavy Duty / Extreme Load' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFinishingLevel(f.id as any)}
                  className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                    finishingLevel === f.id
                      ? 'bg-slate-800 border-2 border-amber-500 text-amber-400 font-bold'
                      : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Estimated Result Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span className="text-[11px] uppercase font-bold text-slate-400 block">
                Estimated Benchmark Civil Cost
              </span>
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400">
                {formatCrores(totalCost)}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Approx. ₹{ratePerUnit.toLocaleString()} per {currentRate.unit}
              </span>
            </div>

            <Link
              to={`/quote?type=${encodeURIComponent(currentRate.label)}&budget=${encodeURIComponent(formatCrores(totalCost))}`}
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <span>Request Detailed BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Benchmark estimation only. Detailed costing is customized against soil borings, structural drawings, and tender schedules.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
