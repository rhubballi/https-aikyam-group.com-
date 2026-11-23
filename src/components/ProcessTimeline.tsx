import React, { useState } from 'react';
import { constructionWorkflow } from '../data/companyData';
import { CheckCircle2, ChevronRight, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentProcess = constructionWorkflow.find(p => p.step === activeStep) || constructionWorkflow[0];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
      {/* Horizontal Step Selector for Desktop */}
      <div className="hidden lg:grid grid-cols-7 gap-2 border-b border-slate-800 pb-8 mb-8">
        {constructionWorkflow.map((item) => {
          const isActive = item.step === activeStep;
          const isPassed = item.step < activeStep;

          return (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`flex flex-col items-center text-center p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-amber-500/15 border border-amber-500/40 text-amber-400 font-bold scale-105 shadow-lg' 
                  : 'hover:bg-slate-800/60 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm mb-2 transition-colors ${
                isActive 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30' 
                  : isPassed 
                    ? 'bg-slate-800 text-amber-400 border border-amber-500/30' 
                    : 'bg-slate-800 text-slate-500'
              }`}>
                {isPassed ? <CheckCircle2 className="w-4 h-4" /> : item.step}
              </div>
              <span className="text-[11px] leading-tight line-clamp-2">
                {item.title.split('&')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mobile Step Pills */}
      <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-none">
        {constructionWorkflow.map((item) => (
          <button
            key={item.step}
            onClick={() => setActiveStep(item.step)}
            className={`shrink-0 px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 ${
              item.step === activeStep
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            <span>Step {item.step}</span>
          </button>
        ))}
      </div>

      {/* Active Step Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
              Phase 0{currentProcess.step} of 07
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Typical Timeline: {currentProcess.timeline}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            {currentProcess.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {currentProcess.description}
          </p>

          {/* Key Deliverables */}
          <div className="pt-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-2">
              Phase Quality Deliverables:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentProcess.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Progression Card */}
        <div className="lg:col-span-5 bg-slate-950 border border-slate-800/80 rounded-2xl p-6 space-y-5">
          <div className="border-b border-slate-800 pb-3">
            <div className="text-[11px] uppercase font-bold text-slate-400">Engineering Governance</div>
            <div className="text-sm font-bold text-white mt-0.5">Rigorous Milestone Tracking</div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-slate-400">
              <span>Overall Process Readiness:</span>
              <span className="text-amber-400 font-bold">{Math.round((activeStep / 7) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${(activeStep / 7) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
              disabled={activeStep === 1}
              className="flex-1 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-300 transition-colors"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(7, prev + 1))}
              disabled={activeStep === 7}
              className="flex-1 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-xs font-bold text-slate-950 transition-colors"
            >
              Next Step
            </button>
          </div>

          <Link
            to="/quote"
            className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-amber-400 font-semibold flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Inquire About Your Project Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
