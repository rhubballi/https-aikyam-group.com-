import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Phone, 
  MessageSquare, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/QuoteForm';
import { companyProfile } from '../data/companyData';

export const RequestQuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const defaultType = searchParams.get('type') || searchParams.get('service') || '';

  return (
    <div className="space-y-16 pb-16 pt-6 bg-slate-50">
      <SEO 
        title="Request a Technical Construction Quotation & BOQ"
        description="Submit your civil engineering or bridge construction parameters for detailed estimation, BOQ formulation, and feasibility analysis from JP Constructions India."
        canonicalPath="/quote"
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-teal-900 font-bold">Request a Quotation</span>
        </nav>
      </div>

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-teal-50 text-teal-900 border border-teal-200">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Direct Estimation Desk</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Project Estimation & Tender Evaluation
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
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
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-teal-700 font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4 text-teal-600" />
                <span>24-Hour Estimation SLA</span>
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">
                What Happens Next?
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Acknowledgment:</strong> You receive an instant tracking reference number (e.g., JPC-2026-XXXX).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Technical Review:</strong> Chief Estimator reviews soil profiles, span limits, and IRC/IRS code requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-900">Direct Consultation:</strong> We schedule a preliminary teleconference or site walk-through.</span>
                </li>
              </ul>
            </div>

            {/* Direct Priority Line */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="text-xs uppercase font-bold text-slate-500 block">
                Urgent Tender Deadlines?
              </span>
              <h4 className="font-display font-bold text-base text-slate-900">
                Speak With Leadership Directly
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                If your project has an imminent tender opening or urgent railway megablock deadline, connect directly with our Project Director:
              </p>
              
              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                  className="w-full py-3 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200 text-teal-900 font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-700" />
                  <span>{companyProfile.contact.displayPhone}</span>
                </a>

                <a
                  href={companyProfile.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Priority Line</span>
                </a>
              </div>
            </div>

            {/* Confidentiality Guarantee */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-600 flex items-start gap-2.5 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>All drawings, tender estimates, and company financial parameters submitted are protected under strict non-disclosure terms.</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
