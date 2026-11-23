import React, { useState, useMemo } from 'react';
import { 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  RotateCcw 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { ProjectCard } from '../components/ProjectCard';
import { initialProjects } from '../data/projectsData';

export const ProjectsPortfolio: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'infrastructure', label: 'Bridges & Dams' },
    { id: 'roads', label: 'Roads & Highways' },
    { id: 'pipelines', label: 'Pipelines & Water' },
    { id: 'rcc-works', label: 'Heavy RCC' },
    { id: 'railways', label: 'Railway & ROR' },
    { id: 'industrial', label: 'Industrial & Workshops' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'residential', label: 'Residential' },
    { id: 'renovation', label: 'Renovation' },
  ];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        project.title.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.state.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query);

      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
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
    <div className="space-y-16 pb-16 pt-8 bg-slate-50">
      <SEO 
        title="Engineering Project Portfolio — Bridges, Railways & Civil Works"
        description="Browse the major bridge, railway corridor, and heavy civil construction projects executed by JP Constructions India across Andhra Pradesh, Tamil Nadu, Karnataka, and beyond."
        canonicalPath="/projects"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-900 border border-amber-500/30">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Civil Engineering Portfolio</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Proven Engineering Structures & Critical Infrastructure
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore our portfolio of multi-span river bridges, post-tensioned box girders, active railway corridors, industrial facilities, and high-performance buildings.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by bridge name, client (RVNL, Tata), or location..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-700"
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
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors"
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
                className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  verifiedOnly
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${verifiedOnly ? 'text-slate-950' : 'text-amber-600'}`} />
                <span>Verified Client Works Only</span>
              </button>

              {(searchQuery || selectedCategory !== 'all' || statusFilter !== 'all' || verifiedOnly) && (
                <button
                  onClick={resetFilters}
                  className="p-2.5 rounded-xl bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
                  title="Reset All Filters"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto gap-2 pt-2 border-t border-slate-100 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-50 border border-amber-300 text-amber-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
        <div className="flex justify-between items-center text-xs text-slate-500 mb-6 font-medium">
          <span>Showing <strong className="text-slate-900">{filteredProjects.length}</strong> engineering projects</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Verified Works: {filteredProjects.filter(p => p.isVerified).length}
            </span>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">No Projects Match Your Filter</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search keywords, clear category selections, or reset filters to view all works.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider"
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
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">
                Verified Construction Credentials & Transparency
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
                Every project marked with the <strong className="text-amber-800">Verified Client Work</strong> badge represents actual civil infrastructure executed by JP Constructions for Indian Railways, RVNL, Tata Projects, and SWR. Configurable demo showcases represent architectural design models.
              </p>
            </div>
          </div>

          <a
            href="/quote"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            Request Quotation
          </a>
        </div>
      </section>

    </div>
  );
};
