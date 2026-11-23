import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  Sparkles, 
  SlidersHorizontal,
  ArrowRight,
  ShieldCheck,
  Building,
  RotateCcw
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { initialProjects } from '../data/projectsData';
import { ProjectCategory, ProjectStatus } from '../types';

export const ProjectsPortfolio: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Major Bridges' },
    { id: 'railways', label: 'Railway & ROR' },
    { id: 'industrial', label: 'Industrial & Workshops' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'renovation', label: 'Renovation' },
  ];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Search matching
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.state.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query);

      // Category matching
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;

      // Status matching
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

      // Verified check
      const matchesVerified = !verifiedOnly || project.isVerified;

      return matchesSearch && matchesCategory && matchesStatus && matchesVerified;
    });
  }, [searchQuery, selectedCategory, statusFilter, verifiedOnly]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setStatusFilter('all');
    setVerifiedOnly(false);
  };

  return (
    <div className="space-y-16 pb-16 pt-8">
      <SEO 
        title="Engineering Project Portfolio — Bridges, Railways & Civil Works"
        description="Browse the major bridge, railway corridor, and heavy civil construction projects executed by JP Constructions India across Andhra Pradesh, Tamil Nadu, Karnataka, and beyond."
        canonicalPath="/projects"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Civil Engineering Portfolio</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Proven Engineering Structures & Critical Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Explore our portfolio of multi-span river bridges, post-tensioned box girders, active railway corridors, industrial facilities, and high-performance buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by bridge name, client (RVNL, Tata), or location..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Status Selector */}
            <div className="md:col-span-3">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              >
                <option value="all">All Execution Statuses</option>
                <option value="completed">Completed Projects</option>
                <option value="ongoing">Active / In Execution</option>
              </select>
            </div>

            {/* Verified Filter Toggle */}
            <div className="md:col-span-4 flex items-center justify-between md:justify-end gap-3">
              <button
                onClick={() => setVerifiedOnly(!verifiedOnly)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  verifiedOnly
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-950 border border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${verifiedOnly ? 'text-slate-950' : 'text-amber-400'}`} />
                <span>Verified Client Works Only</span>
              </button>

              {(searchQuery || selectedCategory !== 'all' || statusFilter !== 'all' || verifiedOnly) && (
                <button
                  onClick={resetFilters}
                  className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title="Reset All Filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 pt-2 border-t border-slate-800/80 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500/15 border border-amber-500/40 text-amber-400 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-xs text-slate-400 mb-6">
          <span>Showing <strong className="text-white">{filteredProjects.length}</strong> engineering projects</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Verified Works: {filteredProjects.filter(p => p.isVerified).length}
            </span>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">No Projects Match Your Filter</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your search keywords, clear category selections, or reset filters to view all works.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* Engineering Assurance Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-white">
                Verified Construction Credentials & Transparency
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Every project marked with the <strong className="text-amber-400">Verified Client Work</strong> badge represents actual civil infrastructure executed by JP Constructions for Indian Railways, RVNL, Tata Projects, and SWR. Configurable demo showcases represent architectural design models.
              </p>
            </div>
          </div>

          <a
            href="/quote"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Request Quotation
          </a>
        </div>
      </section>

    </div>
  );
};
