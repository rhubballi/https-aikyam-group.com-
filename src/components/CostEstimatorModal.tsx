import React, { useState } from 'react';
import { X, Calculator, IndianRupee, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose }) => {
  const [projectCategory, setProjectCategory] = useState<'bridge' | 'railway' | 'industrial' | 'commercial' | 'residential'>('commercial');
  const [sizeValue, setSizeValue] = useState<number>(20000);
  const [finishingLevel, setFinishingLevel] = useState<'standard' | 'premium' | 'high_spec'>('premium');

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-800">
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
                      setSizeValue(150);
                    } else {
                      setSizeValue(20000);
                    }
                  }}
                  className={`px-3 py-2.5 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                    projectCategory === cat.id
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
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
              <span className="font-mono text-amber-800 font-bold text-sm bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200">
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
              className="w-full accent-amber-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>{projectCategory === 'bridge' ? '30m' : '2,000 sq.ft'}</span>
              <span>{projectCategory === 'bridge' ? '1,000m+' : '250,000 sq.ft+'}</span>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
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
                  className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all cursor-pointer ${
                    finishingLevel === f.id
                      ? 'bg-amber-50 border-2 border-amber-500 text-amber-900 shadow-xs'
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
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-800">
                {formatCrores(totalCost)}
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5 font-medium">
                Approx. ₹{ratePerUnit.toLocaleString()} per {currentRate.unit}
              </span>
            </div>

            <Link
              to={`/quote?type=${encodeURIComponent(currentRate.label)}&budget=${encodeURIComponent(formatCrores(totalCost))}`}
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
              <span>Request Detailed BOQ</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="text-[11px] text-slate-500 flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Benchmark estimation only. Detailed costing is customized against soil borings, structural drawings, and tender schedules.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
