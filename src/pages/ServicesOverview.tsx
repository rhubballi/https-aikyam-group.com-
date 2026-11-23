import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HardHat, 
  ArrowRight, 
  CheckCircle2 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { servicesData } from '../data/servicesData';

export const ServicesOverview: React.FC = () => {
  return (
    <div className="space-y-20 pb-16 pt-8 bg-slate-50">
      <SEO 
        title="Our Civil Engineering & Construction Services"
        description="Explore the civil engineering capabilities of JP Constructions India: Major River Bridges, Railway Corridors, Industrial Workshops, Commercial Complexes, and Turnkey Civil Projects."
        canonicalPath="/services"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-900 border border-amber-500/30">
              <HardHat className="w-4 h-4 text-amber-600" />
              <span>Full-Spectrum Civil Capabilities</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Engineering Excellence Across Critical Sectors
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We provide turnkey civil engineering, structural construction, and infrastructure execution. From deep foundation caissons in tidal rivers to fast-track commercial concrete framing.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Comprehensive Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {servicesData.map((svc, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div 
                key={svc.id}
                className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 hover:border-amber-400 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Preview */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md group">
                      <img
                        src={svc.heroImage}
                        alt={svc.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-950 bg-amber-400 px-2.5 py-1 rounded-md shadow-xs">
                          Discipline 0{index + 1}
                        </span>
                        <h4 className="text-white font-display font-bold text-lg mt-1.5 drop-shadow-sm">
                          {svc.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Text Details & Deliverables */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-2">
                      <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
                        Scope & Engineering Methodology
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {svc.fullDescription}
                      </p>
                    </div>

                    {/* Scope Bullets */}
                    <div className="pt-2">
                      <span className="text-xs uppercase font-bold text-slate-500 block mb-2">
                        Key Work Packages:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {svc.scopeOfWork.slice(0, 4).map((sc, scIdx) => (
                          <div key={scIdx} className="flex items-start gap-2 text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span className="line-clamp-2 font-medium">{sc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={`/services/${svc.slug}`}
                        className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-xs"
                      >
                        <span>View Detailed Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/quote?service=${encodeURIComponent(svc.title)}`}
                        className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Enquire for this Service
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-slate-200 rounded-3xl p-10 space-y-4 shadow-sm">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Need a Turnkey Proposal or Subcontracting Partner?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Our estimating engineers provide rapid response for public tenders, JV proposals, and private developer inquiries.
          </p>
          <div className="pt-2">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
