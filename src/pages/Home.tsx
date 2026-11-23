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
  Award,
  Truck,
  Droplets,
  Layers,
  Phone,
  MessageSquare
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { QuoteForm } from '../components/QuoteForm';
import { CostEstimatorModal } from '../components/CostEstimatorModal';
import { SafeImage } from '../components/SafeImage';
import { HeroSlider } from '../components/HeroSlider';
import { MachineryFleet } from '../components/MachineryFleet';
import { WhyChooseUs } from '../components/WhyChooseUs';
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
          1. HERO SLIDER SECTION (Inspired by jpconstructionspune.com discipline carousel & quick inquiry)
         ========================================================================= */}
      <HeroSlider onOpenEstimator={() => setEstimatorOpen(true)} />

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
          2B. QUICK CONSULTATION ACTION STRIP (Direct Call / WhatsApp / Estimator)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-slate-950 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-950/80 block">
              Planning an Infrastructure Tender or Construction Project?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-950">
              Speak Directly With Our Project Director
            </h3>
            <p className="text-xs sm:text-sm text-slate-900/90 font-medium max-w-2xl">
              From site feasibility and BOQ estimations to end-to-end turnkey civil execution, receive verified engineering guidance within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-slate-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-900 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {companyProfile.contact.displayPhone}</span>
            </a>
            <a
              href={companyProfile.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={() => setEstimatorOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-amber-700" />
              <span>Instant Cost Estimator</span>
            </button>
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
                {/* Visual Image Preview with Icon Badge */}
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-5 relative group/img">
                  <SafeImage
                    src={svc.heroImage}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-amber-800 flex items-center justify-center shadow-sm">
                    {svc.category === 'infrastructure' && <HardHat className="w-5 h-5" />}
                    {svc.category === 'roads' && <Truck className="w-5 h-5" />}
                    {svc.category === 'pipelines' && <Droplets className="w-5 h-5" />}
                    {svc.category === 'rcc-works' && <Layers className="w-5 h-5" />}
                    {svc.category === 'railways' && <TrainTrack className="w-5 h-5" />}
                    {svc.category === 'industrial' && <Factory className="w-5 h-5" />}
                    {svc.category === 'commercial' && <Building2 className="w-5 h-5" />}
                    {svc.category === 'residential' && <HomeIcon className="w-5 h-5" />}
                    {svc.category === 'renovation' && <Wrench className="w-5 h-5" />}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-bold text-white uppercase tracking-wider">
                    <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow-xs font-black">
                      {svc.category.toUpperCase()}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded">
                      Certified Scope
                    </span>
                  </div>
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
            { id: 'infrastructure', label: 'Bridges & Dams' },
            { id: 'roads', label: 'Roads & Highways' },
            { id: 'pipelines', label: 'Pipelines & Water' },
            { id: 'rcc-works', label: 'Heavy RCC' },
            { id: 'railways', label: 'Rail Corridors & ROR' },
            { id: 'industrial', label: 'Industrial Plants' },
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
          5B. WHY CHOOSE US / KEY ENGINEERING STRENGTHS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyChooseUs />
      </section>

      {/* =========================================================================
          5C. HEAVY PLANT & MACHINERY FLEET
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MachineryFleet />
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
