import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  return (
    <div className={`group relative rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400/80 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      featured ? 'lg:col-span-2 md:flex-row' : ''
    }`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-slate-100 ${
        featured ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'
      }`}>
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>

        {/* Verification Status Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.isVerified ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-500 text-slate-950 shadow-sm">
              <CheckCircle2 className="w-3 h-3 text-slate-950" />
              Verified Client Work
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/95 backdrop-blur-md text-slate-700 shadow-sm border border-slate-200">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Configurable Showcase
            </span>
          )}

          <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-slate-200">
            {project.categoryLabel}
          </span>
        </div>

        {/* Status Pill */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm ${
            project.status === 'completed'
              ? 'bg-emerald-600 text-white'
              : 'bg-amber-500 text-slate-950 animate-pulse'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Execution'}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className={`p-6 flex flex-col justify-between flex-1 ${featured ? 'md:w-1/2 md:p-8' : ''}`}>
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
            <span className="flex items-center gap-1 font-medium text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              {project.location}, {project.state}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-500">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Client / Principal Contractor */}
          <div className="mt-1 text-xs text-amber-800 font-semibold flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Client: {project.client}</span>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Specifications Preview */}
          {project.specs && project.specs.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs">
              {project.specs.slice(0, 2).map((sp, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">{sp.label}</span>
                  <span className="text-slate-900 font-bold truncate block mt-0.5">{sp.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 group-hover:text-amber-800 transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[11px] text-slate-400 font-mono">
            REF-{project.id.slice(0, 6).toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};
