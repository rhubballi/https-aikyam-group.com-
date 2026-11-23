import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MachineryFleet } from '../components/MachineryFleet';
import { companyProfile } from '../data/companyData';

export const MachineryPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16 pt-8 bg-slate-50">
      <SEO 
        title="Plant & Machinery Fleet — Heavy Construction Equipment"
        description="Explore the in-house heavy machinery fleet of JP Constructions: Batching plants, transit mixers, sensor pavers, launching gantries, cranes, and piling rigs."
        canonicalPath="/machinery"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-teal-50 text-teal-900 border border-teal-200">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Direct Equipment Ownership</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Heavy Plant & Specialized Construction Equipment Fleet
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              JP Constructions maintains an extensive fleet of modern, calibrated heavy machinery. Direct ownership eliminates third-party supply bottlenecks, ensuring guaranteed equipment availability and high project execution velocity across national highways, river bridges, and railway alignments.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-md shadow-cyan-600/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Equipment Desk: {companyProfile.contact.displayPhone}</span>
              </a>

              <Link
                to="/quote"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-xs"
              >
                <span>Request Equipment Mobilization</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MachineryFleet showTitle={false} />
      </section>
    </div>
  );
};
