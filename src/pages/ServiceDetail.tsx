import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  ChevronRight 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { QuoteForm } from '../components/QuoteForm';
import { ProjectCard } from '../components/ProjectCard';
import { servicesData } from '../data/servicesData';
import { initialProjects } from '../data/projectsData';

interface ServiceDetailProps {
  forcedSlug?: string;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ forcedSlug }) => {
  const { slug: routeSlug } = useParams<{ slug: string }>();
  const activeSlug = forcedSlug || routeSlug || '';

  const service = servicesData.find(s => s.slug === activeSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = initialProjects.filter(p => 
    service.featuredProjectsSlugs.includes(p.slug) || p.category === service.category
  );

  return (
    <div className="space-y-20 pb-16 pt-6 bg-slate-50">
      <SEO 
        title={`${service.title} — Construction Services`}
        description={service.shortDescription}
        canonicalPath={`/services/${service.slug}`}
        image={service.heroImage}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to="/services" className="hover:text-slate-900 transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-amber-800 font-bold">{service.title}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-8 sm:p-14 shadow-md">
          <div className="absolute inset-0 z-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover brightness-[0.9] contrast-105 opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-500/30">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Verified Engineering Discipline</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {service.fullDescription}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="#enquiry-section"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Request Quotation For This Service</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Work & Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Scope of Work */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
                Detailed Scope
              </span>
              <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
                Engineering Work Packages & Scope
              </h2>
            </div>

            <div className="space-y-3">
              {service.scopeOfWork.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-amber-200">
                    {idx + 1}
                  </div>
                  <span className="text-sm text-slate-800 leading-relaxed font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages / Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 shadow-sm">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
                  Why Choose JP Constructions
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Technical Advantages
                </h3>
              </div>

              <ul className="space-y-4">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialized Equipment */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-slate-600">
                <Truck className="w-4 h-4 text-amber-600" />
                <span>Specialized Plant & Machinery</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {service.equipmentUsed.map((eq, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Execution Process Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Execution Flow"
          title="Methodical Phasing & Quality Protocols"
          subtitle="How our site engineers execute this scope from initial surveys to milestone commissioning."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {service.process.map((step) => (
            <div 
              key={step.step}
              className="bg-white border border-slate-200 rounded-2xl p-6 relative flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <span className="font-mono text-2xl font-black text-amber-600/40 block mb-2">
                  0{step.step}
                </span>
                <h4 className="font-display font-bold text-base text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Related Projects Showcase */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Demonstrated Track Record"
            title="Representative Projects in this Sector"
            subtitle="Verified client works and engineering showcases highlighting our capabilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.slice(0, 3).map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* Dedicated Enquiry Section with Pre-filled Discipline */}
      <section id="enquiry-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm defaultProjectType={service.title} />
      </section>

    </div>
  );
};

export const ResidentialConstructionPage: React.FC = () => <ServiceDetail forcedSlug="residential" />;
export const CommercialConstructionPage: React.FC = () => <ServiceDetail forcedSlug="commercial" />;
export const IndustrialConstructionPage: React.FC = () => <ServiceDetail forcedSlug="industrial" />;
export const InfrastructureProjectsPage: React.FC = () => <ServiceDetail forcedSlug="infrastructure" />;
export const RenovationServicePage: React.FC = () => <ServiceDetail forcedSlug="renovation" />;
export const RailwayServicePage: React.FC = () => <ServiceDetail forcedSlug="railways" />;
