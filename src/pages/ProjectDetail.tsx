import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Building, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  Layers,
  Award,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { QuoteForm } from '../components/QuoteForm';
import { initialProjects } from '../data/projectsData';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [activeLightboxImg, setActiveLightboxImg] = useState<string | null>(null);

  const project = initialProjects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Related projects
  const relatedProjects = initialProjects
    .filter(p => p.id !== project.id && (p.category === project.category || p.isFeatured))
    .slice(0, 3);

  return (
    <div className="space-y-16 pb-16 pt-6">
      <SEO 
        title={`${project.title} — Engineering Case Study`}
        description={project.shortDescription}
        canonicalPath={`/projects/${project.slug}`}
        image={project.heroImage}
      />

      {/* Lightbox Modal */}
      {activeLightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveLightboxImg(null)}
        >
          <button
            onClick={() => setActiveLightboxImg(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeLightboxImg}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-amber-400 font-semibold truncate max-w-xs">{project.title}</span>
        </nav>
      </div>

      {/* Hero Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
          <div className="aspect-[21/9] min-h-[360px] sm:min-h-[480px] relative">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover brightness-[0.4] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

            {/* Badges Overlay */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
              {project.isVerified ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-slate-950" />
                  Verified Client Infrastructure
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 backdrop-blur-md text-amber-300 border border-amber-500/30">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Configurable Engineering Model
                </span>
              )}

              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/90 backdrop-blur-md text-slate-200 border border-slate-700">
                {project.categoryLabel}
              </span>
            </div>

            {/* Title & Metadata Overlay */}
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 space-y-3 z-10">
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1 text-amber-400 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}, {project.state}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Calendar className="w-3.5 h-3.5" />
                  Commissioned / Year: {project.year}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-300">
                  <Building className="w-3.5 h-3.5" />
                  Client: {project.client}
                </span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
                {project.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Story, Scope & Engineering Highlights */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
              <h2 className="font-display text-2xl font-bold text-white">
                Project Overview & Engineering Background
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.fullDescription}
              </p>

              {project.testimonialSnippet && (
                <div className="mt-4 p-5 rounded-2xl bg-slate-950 border-l-4 border-amber-500 text-xs sm:text-sm text-slate-300 italic">
                  "{project.testimonialSnippet}"
                </div>
              )}
            </div>

            {/* Scope of Work */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>Scope of Civil & Structural Works</span>
              </h3>
              <div className="space-y-2.5">
                {project.scopeOfWork.map((scope, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-950 p-3.5 rounded-xl border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Highlights */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Engineering & Execution Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {project.engineeringHighlights.map((hl, idx) => (
                  <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 text-slate-200">
                    <span className="text-amber-400 font-bold block mb-1">Key Parameter 0{idx + 1}</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery Grid */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-display text-xl font-bold text-white">
                    Project Gallery & Site Photographs
                  </h3>
                  <span className="text-xs text-slate-400">Click to view high-res</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveLightboxImg(img)}
                      className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800 hover:border-amber-500/60 transition-all cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${project.title} photo ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Technical Specs Card & Enquiry Action */}
          <div className="lg:col-span-4 space-y-6">
            {/* Technical Specs Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl sticky top-28">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Technical Parameters
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-0.5">
                  Structural Specifications
                </h3>
              </div>

              <div className="space-y-3">
                {project.specs.map((sp, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs border-b border-slate-800/60 pb-2.5">
                    <span className="text-slate-400 font-medium">{sp.label}</span>
                    <span className="text-white font-bold text-right ml-2">{sp.value}</span>
                  </div>
                ))}

                <div className="flex justify-between items-start text-xs border-b border-slate-800/60 pb-2.5">
                  <span className="text-slate-400 font-medium">Status</span>
                  <span className={`font-bold capitalize ${project.status === 'completed' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {project.status}
                  </span>
                </div>

                {project.principalContractor && (
                  <div className="flex justify-between items-start text-xs border-b border-slate-800/60 pb-2.5">
                    <span className="text-slate-400 font-medium">Principal Contractor</span>
                    <span className="text-slate-200 font-semibold text-right">{project.principalContractor}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href="#enquiry-form"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span>Enquire For Similar Project</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Portfolio Recommendations"
            title="Related Engineering Projects"
            subtitle="Explore comparable bridge, railway, and heavy civil contracts."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}

      {/* Quote Form Section */}
      <section id="enquiry-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm 
          defaultProjectType={project.categoryLabel}
        />
      </section>

    </div>
  );
};
