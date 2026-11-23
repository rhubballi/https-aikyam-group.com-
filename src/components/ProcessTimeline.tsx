import React, { useState } from 'react';
import { constructionWorkflow } from '../data/companyData';
import { CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const currentProcess = constructionWorkflow.find(p => p.step === activeStep) || constructionWorkflow[0];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
      {/* Horizontal Step Selector for Desktop */}
      <div className="hidden lg:grid grid-cols-7 gap-2 border-b border-slate-100 pb-8 mb-8">
        {constructionWorkflow.map((item) => {
          const isActive = item.step === activeStep;
          const isPassed = item.step < activeStep;

          return (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-amber-50 border border-amber-300 text-amber-900 font-bold shadow-sm' 
                  : 'hover:bg-slate-50 text-slate-600'
              }`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm mb-2 transition-colors ${
                isActive 
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20' 
                  : isPassed 
                    ? 'bg-slate-100 text-amber-700 border border-amber-300' 
                    : 'bg-slate-100 text-slate-400'
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
            className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 ${
              item.step === activeStep
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-slate-100 text-slate-600'
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
            <span className="px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
              Phase 0{currentProcess.step} of 07
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              Typical Timeline: {currentProcess.timeline}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            {currentProcess.title}
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {currentProcess.description}
          </p>

          <div className="pt-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
              Phase Quality Deliverables:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentProcess.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
          <div className="border-b border-slate-200 pb-3">
            <div className="text-[11px] uppercase font-bold text-slate-500">Engineering Governance</div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">Rigorous Milestone Tracking</div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between text-slate-600 font-semibold">
              <span>Overall Process Readiness:</span>
              <span className="text-amber-800 font-bold">{Math.round((activeStep / 7) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
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
              className="flex-1 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 disabled:opacity-40 text-xs font-bold text-slate-700 transition-colors shadow-xs"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(7, prev + 1))}
              disabled={activeStep === 7}
              className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-40 text-xs font-bold text-slate-950 transition-colors shadow-xs"
            >
              Next Step
            </button>
          </div>

          <Link
            to="/quote"
            className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs text-amber-800 font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
          >
            <span>Inquire About Your Project Timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
