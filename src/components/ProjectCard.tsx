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
    <div className={`group relative rounded-2xl bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 ${
      featured ? 'lg:col-span-2 md:flex-row' : ''
    }`}>
      {/* Image Container */}
      <div className={`relative overflow-hidden bg-slate-950 ${
        featured ? 'md:w-1/2 aspect-[16/10] md:aspect-auto' : 'aspect-[16/10]'
      }`}>
        <img
          src={project.heroImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        {/* Verification Status Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.isVerified ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-500 text-slate-950 shadow-md">
              <CheckCircle2 className="w-3 h-3 text-slate-950" />
              Verified Client Work
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/90 backdrop-blur-md text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400" />
              Configurable Showcase
            </span>
          )}

          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/90 backdrop-blur-md text-slate-200 border border-slate-700">
            {project.categoryLabel}
          </span>
        </div>

        {/* Status Pill */}
        <div className="absolute top-3 right-3">
          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            project.status === 'completed'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30 animate-pulse'
          }`}>
            {project.status === 'completed' ? 'Completed' : 'In Execution'}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className={`p-6 flex flex-col justify-between flex-1 ${featured ? 'md:w-1/2 md:p-8' : ''}`}>
        <div>
          {/* Metadata Row */}
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {project.location}, {project.state}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
            {project.title}
          </h3>

          {/* Client / Principal Contractor */}
          <div className="mt-1 text-xs text-amber-400/90 font-medium flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Client: {project.client}</span>
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Specifications Preview */}
          {project.specs && project.specs.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
              {project.specs.slice(0, 2).map((sp, idx) => (
                <div key={idx} className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/50">
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">{sp.label}</span>
                  <span className="text-slate-200 font-bold truncate block">{sp.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 group-hover:text-amber-300 transition-colors"
          >
            <span>View Engineering Case Study</span>
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
