import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Phone,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/QuoteForm';
import { companyProfile } from '../data/companyData';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || searchParams.get('service') || '';

  return (
    <div className="space-y-16 pb-16 pt-6">
      <SEO 
        title="Request a Technical Construction Quotation & BOQ"
        description="Submit your civil engineering or bridge construction parameters for detailed estimation, BOQ formulation, and feasibility analysis from JP Constructions India."
        canonicalPath="/quote"
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-amber-400 font-semibold">Request a Quotation</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Direct Estimation Desk</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Project Estimation & Tender Evaluation
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Submit your engineering scope, geotechnical parameters, or tender package below. Our senior estimators provide transparent BOQ analysis, structural feasibility, and milestone schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Advisory Columns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Form Component */}
          <div className="lg:col-span-8">
            <QuoteForm defaultProjectType={defaultType} />
          </div>

          {/* Right Column: Advisory & Guarantees */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* SLA Commitment */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm uppercase">
                <Clock className="w-4 h-4" />
                <span>24-Hour Estimation SLA</span>
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                What Happens Next?
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Acknowledgment:</strong> You receive an instant tracking reference number (e.g., JPC-2026-XXXX).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Technical Review:</strong> Chief Estimator reviews soil profiles, span limits, and IRC/IRS code requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Consultation:</strong> We schedule a preliminary teleconference or site walk-through.</span>
                </li>
              </ul>
            </div>

            {/* Direct Priority Line */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase font-bold text-slate-400 block">
                Urgent Tender Deadlines?
              </span>
              <h4 className="font-display font-bold text-base text-white">
                Speak With Leadership Directly
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your project has an imminent tender opening or urgent railway megablock deadline, connect directly with Prakash Rao:
              </p>
              
              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                  className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-amber-400 font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{companyProfile.contact.displayPhone}</span>
                </a>

                <a
                  href={companyProfile.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Priority Line</span>
                </a>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>All drawings, tender estimates, and company financial parameters submitted are protected under strict non-disclosure terms.</span>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
