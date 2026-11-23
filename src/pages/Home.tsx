import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  Factory, 
  TrainTrack, 
  Home as HomeIcon, 
  Wrench,
  ChevronRight,
  Calculator,
  Award
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { QuoteForm } from '../components/QuoteForm';
import { CostEstimatorModal } from '../components/CostEstimatorModal';
import { SafeImage } from '../components/SafeImage';
import { companyProfile, verifiedStats, clientTestimonials } from '../data/companyData';
import { initialProjects } from '../data/projectsData';
import { servicesData } from '../data/servicesData';

export const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  const filteredProjects = selectedCategory === 'all'
    ? initialProjects.filter(p => p.isFeatured)
    : initialProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-24 pb-16 bg-slate-50">
      <SEO 
        title="Engineering Strong Foundations. Creating Lasting Value."
        description="JP Constructions India is a premier civil engineering and infrastructure main contractor specializing in major river bridges, railway corridors, and heavy industrial facilities since 2001."
        canonicalPath="/"
      />

      <CostEstimatorModal 
        isOpen={estimatorOpen} 
        onClose={() => setEstimatorOpen(false)} 
      />

      {/* =========================================================================
          1. HERO SECTION - Crisp, Settled, Premium Light Aesthetic
         ========================================================================= */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-16 pb-20 overflow-hidden bg-gradient-to-b from-slate-100/80 via-white to-slate-50 border-b border-slate-200/80">
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <SafeImage
            src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=2000&q=85"
            alt="JP Constructions Major River Bridge Engineering"
            className="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Action Triggers */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-xs font-bold tracking-wider uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                <span>Established 2001 • Over Two Decades of Civil Excellence</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Building Strong Foundations. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800">
                  Creating Lasting Value.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl font-normal">
                Main civil contractor for major river bridges, prestressed concrete box girders, railway corridors, heavy industrial workshops, and high-performance commercial structures across India.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/projects"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 group active:scale-95"
                >
                  <span>Explore Verified Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/quote"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Request a Quotation</span>
                </Link>

                <button
                  onClick={() => setEstimatorOpen(true)}
                  className="w-full sm:w-auto px-5 py-4 rounded-xl bg-amber-50 hover:bg-amber-100/80 text-amber-900 border border-amber-300/80 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Calculator className="w-4 h-4 text-amber-700" />
                  <span>Cost Estimator</span>
                </button>
              </div>

              {/* Verified Key Highlights Strip */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 text-left">
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-slate-900 block">
                    23+
                  </span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Years Active</span>
                </div>
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-amber-700 block">
                    50+
                  </span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Major Bridge Spans</span>
                </div>
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-slate-900 block">
                    100%
                  </span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Safety Compliance</span>
                </div>
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-amber-700 block">
                    740m
                  </span>
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Single River Span</span>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Project Highlight Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl text-left space-y-4 relative">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 shadow-xs">
                    Flagship Infrastructure
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">Nellore, AP</span>
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80"
                    alt="Penna River Bridge Nellore"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Penna River Bridge (Nellore)
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    33 spans totaling 740.61 meters delivered in a record 18-month window across challenging riverbed strata.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Client</span>
                    <span className="font-bold text-slate-800">South Central Railway / RVNL</span>
                  </div>
                  <Link
                    to="/projects/penna-river-bridge-nellore"
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. VERIFIED CREDENTIALS & EPC PARTNERS BANNER
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-500">
              Trusted by Premier Infrastructure Authorities & Global EPC Conglomerates
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
            {companyProfile.verifiedClients.slice(0, 6).map((client, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center hover:border-amber-400 transition-colors flex flex-col items-center justify-center min-h-[90px]"
              >
                <span className="font-display font-bold text-sm text-slate-900 block">
                  {client.shortName}
                </span>
                <span className="text-[10px] text-slate-500 font-medium truncate max-w-full block mt-0.5">
                  {client.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPANY OVERVIEW & 20+ YEARS LEGACY
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="About JP Constructions"
              title="Two Decades of High-Precision Heavy Civil Engineering"
              subtitle="Since 2001, we have operated as a premier civil infrastructure contractor executing critical bridges, railway flyovers, and industrial facilities with unwavering technical discipline."
            />

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Headquartered in Santhi Nagar, Kakinada (Andhra Pradesh), JP Constructions has established a benchmark reputation across South India. We partner directly with public sector undertakings like Rail Vikas Nigam Limited (RVNL) and leading infrastructure giants including Tata Projects, L&T, and KEC International.
              </p>
              <p>
                Our specialized project execution team has earned accolades for completing complex multi-span river bridges—such as the 10 Major River Bridges on the Villupuram–Mayiladuthurai corridor—within aggressive 18-month deadlines without compromising safety or structural integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-semibold">IRS & IRC Bridge Code Compliance</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-semibold">In-House Launching & Shuttering Fleet</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-semibold">Zero LTI Railway Safety Track Record</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="font-semibold">End-to-End Turnkey Delivery</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900 group"
              >
                <span>Read Our Full Corporate Story & History</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-md">
                <SafeImage
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                  alt="Civil Engineering Execution"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white border border-slate-200 p-5 rounded-3xl text-center shadow-xs">
                <span className="font-display text-3xl font-black text-amber-700 block">54</span>
                <span className="text-xs text-slate-500 uppercase font-bold">Major Spans Launched</span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-amber-50 border border-amber-200 text-slate-900 p-5 rounded-3xl shadow-xs">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">Headquarters</span>
                <span className="font-display font-black text-xl block mt-1">Kakinada, AP</span>
                <span className="text-xs text-slate-600 block mt-1">Santhi Nagar Hub</span>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-md">
                <SafeImage
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                  alt="Industrial Construction"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SERVICES BREAKDOWN
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Core Capabilities"
          title="Engineered Construction Disciplines"
          subtitle="From long-span river crossings to modern industrial workshops and premium turnkey building projects."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="bg-white border border-slate-200 rounded-3xl p-7 hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  {svc.category === 'infrastructure' && <HardHat className="w-6 h-6" />}
                  {svc.category === 'railways' && <TrainTrack className="w-6 h-6" />}
                  {svc.category === 'industrial' && <Factory className="w-6 h-6" />}
                  {svc.category === 'commercial' && <Building2 className="w-6 h-6" />}
                  {svc.category === 'residential' && <HomeIcon className="w-6 h-6" />}
                  {svc.category === 'renovation' && <Wrench className="w-6 h-6" />}
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {svc.shortDescription}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-4 mb-6">
                  {svc.scopeOfWork.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to={`/services/${svc.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-amber-800 flex items-center justify-between transition-colors shadow-xs"
                >
                  <span>Explore Scope & Methodology</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. FEATURED PROJECTS SHOWCASE
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-amber-500/10 text-amber-800 border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
              Engineering Portfolio
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
              Featured Major Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Real river bridges, railway flyovers, and industrial facilities executed with certified structural compliance.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900 transition-colors"
          >
            <span>View All Projects & Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none">
          {[
            { id: 'all', label: 'All Featured' },
            { id: 'infrastructure', label: 'Major Bridges' },
            { id: 'railways', label: 'Rail Corridors & ROR' },
            { id: 'industrial', label: 'Industrial & Workshops' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'residential', label: 'Residential' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === tab.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. SEVEN-STAGE PROVEN ENGINEERING PROCESS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Systematic Methodology"
          title="Our Seven-Phase Construction Process"
          subtitle="Every project undergoes rigorous engineering scrutiny, geotechnical modeling, statutory railway clearances, and quality auditing."
          centered
        />

        <ProcessTimeline />
      </section>

      {/* =========================================================================
          7. VERIFIED CLIENT TESTIMONIALS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Endorsements"
          title="What Our Engineering Partners Say"
          subtitle="Feedback from the principal infrastructure agencies and contracting conglomerates we collaborate with."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTestimonials.map((t) => (
            <div 
              key={t.id}
              className="bg-white border border-slate-200 rounded-3xl p-7 flex flex-col justify-between hover:border-amber-400 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900">{t.clientName}</div>
                <div className="text-[11px] text-amber-800 font-bold">{t.organization}</div>
                <div className="text-[10px] text-slate-500 mt-1">Project: {t.projectTitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          8. REQUEST A QUOTE BANNER & FORM
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </section>

    </div>
  );
};
