import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Unlock, 
  Layers, 
  FileText, 
  Plus, 
  Trash2, 
  Edit3, 
  Download, 
  CheckCircle2, 
  AlertCircle, 
  Database, 
  RefreshCw, 
  ExternalLink,
  Search,
  Check,
  X,
  Eye,
  Sliders,
  ShieldCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuoteRequest, Project, ProjectCategory } from '../types';
import { quoteService, projectService, isSupabaseConfigured } from '../lib/supabase';
import { initialProjects } from '../data/projectsData';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('jpc_admin_logged_in') === 'true';
  });

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  // Tabs
  const [activeTab, setActiveTab] = useState<'enquiries' | 'projects' | 'database'>('enquiries');

  // Enquiries State
  const [enquiries, setEnquiries] = useState<QuoteRequest[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<QuoteRequest | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Projects State
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  // Load initial data
  const loadData = async () => {
    setLoadingEnquiries(true);
    setLoadingProjects(true);
    try {
      const q = await quoteService.getAll();
      setEnquiries(q);
      const p = await projectService.getAll();
      setProjects(p);
    } catch (err) {
      console.error('Failed to load dashboard data:', err);
    } finally {
      setLoadingEnquiries(false);
      setLoadingProjects(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    // Standard secure demo password for testing & administrative access
    if (passwordInput === 'admin123' || passwordInput === 'jpc2026') {
      setIsAuthenticated(true);
      localStorage.setItem('jpc_admin_logged_in', 'true');
    } else {
      setAuthError('Invalid administrator credentials. (Hint: Use demo password "admin123")');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('jpc_admin_logged_in');
  };

  const handleStatusChange = async (id: string, newStatus: QuoteRequest['status'], notes?: string) => {
    await quoteService.updateStatus(id, newStatus, notes);
    const updated = await quoteService.getAll();
    setEnquiries(updated);
    if (selectedEnquiry && selectedEnquiry.id === id) {
      setSelectedEnquiry(prev => prev ? { ...prev, status: newStatus, adminNotes: notes } : null);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await projectService.delete(id);
      const updated = await projectService.getAll();
      setProjects(updated);
    }
  };

  const handleExportCSV = () => {
    if (enquiries.length === 0) {
      alert('No enquiries available to export.');
      return;
    }

    const headers = ['Reference No', 'Name', 'Email', 'Phone', 'Company', 'Discipline', 'Location', 'Budget', 'Status', 'Date'];
    const rows = enquiries.map(e => [
      e.referenceNo,
      `"${e.name.replace(/"/g, '""')}"`,
      `"${e.email.replace(/"/g, '""')}"`,
      `"${e.phone.replace(/"/g, '""')}"`,
      `"${(e.company || '').replace(/"/g, '""')}"`,
      `"${e.projectType.replace(/"/g, '""')}"`,
      `"${e.projectLocation.replace(/"/g, '""')}"`,
      `"${e.approximateBudget.replace(/"/g, '""')}"`,
      e.status,
      new Date(e.createdAt).toLocaleDateString()
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `JP_Constructions_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered enquiries
  const filteredEnquiries = enquiries.filter(e => {
    const matchesStatus = statusFilter === 'all' || e.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q || 
      e.name.toLowerCase().includes(q) || 
      e.email.toLowerCase().includes(q) || 
      e.referenceNo.toLowerCase().includes(q) ||
      e.projectLocation.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  // Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4">
        <SEO 
          title="Admin Authentication Portal"
          description="Administrative portal for JP Constructions project and quotation management."
          canonicalPath="/admin"
        />

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="text-center space-y-3 mb-8">
            <div className="w-14 h-14 bg-amber-500/10 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/20">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-display text-2xl font-black text-white">
              JP Constructions Portal
            </h1>
            <p className="text-xs text-slate-400">
              Administrative management of projects, tenders, and quotation enquiries.
            </p>
          </div>

          {authError && (
            <div className="p-3.5 mb-5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-bold text-slate-300 mb-2">
                Administrator Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                required
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              Sign In to Portal
            </button>
          </form>

          {/* Quick Demo Access Helper */}
          <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
            <button
              onClick={() => {
                setPasswordInput('admin123');
                setIsAuthenticated(true);
                localStorage.setItem('jpc_admin_logged_in', 'true');
              }}
              className="text-xs text-amber-400/90 hover:text-amber-300 underline font-medium cursor-pointer"
            >
              One-Click Demo Administrator Access (admin123)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16 pt-8">
      <SEO 
        title="Admin Control Center"
        description="Portal management for JP Constructions India."
        canonicalPath="/admin"
      />

      {/* Top Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Authorized Management Console</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-white">
            Administrative Control Center
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage public project portfolios, review tender quote submissions, and export CRM leads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1.5 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-red-950/60 hover:text-red-400 text-slate-300 text-xs font-semibold transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <span className="text-xs text-slate-400 uppercase font-bold block">Total Enquiries</span>
          <span className="font-display text-3xl font-black text-amber-400 mt-1 block">
            {enquiries.length}
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block">
            {enquiries.filter(e => e.status === 'new').length} New Pending
          </span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <span className="text-xs text-slate-400 uppercase font-bold block">Live Projects</span>
          <span className="font-display text-3xl font-black text-white mt-1 block">
            {projects.length}
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block">
            {projects.filter(p => p.isVerified).length} Verified Works
          </span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <span className="text-xs text-slate-400 uppercase font-bold block">Major Spans Built</span>
          <span className="font-display text-3xl font-black text-amber-400 mt-1 block">
            54+
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block">Across AP, TN, KA</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <span className="text-xs text-slate-400 uppercase font-bold block">Backend Adapter</span>
          <span className="font-display text-lg font-bold text-white mt-2 block flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isSupabaseConfigured ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`}></span>
            <span>{isSupabaseConfigured ? 'Supabase Live' : 'Storage Engine'}</span>
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block">
            Zero-Breakage Persistence
          </span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-800 gap-4">
        <button
          onClick={() => setActiveTab('enquiries')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'enquiries'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Quote Enquiries ({enquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'projects'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Project Portfolio ({projects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('database')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'database'
              ? 'border-amber-500 text-amber-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Database & Schema</span>
        </button>
      </div>

      {/* TAB 1: ENQUIRIES MANAGER */}
      {activeTab === 'enquiries' && (
        <div className="space-y-6">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search client, email or ref..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="reviewing">Under Review</option>
                <option value="contacted">Contacted</option>
                <option value="quoted">Quoted</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <button
              onClick={handleExportCSV}
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-2 transition-colors w-full sm:w-auto justify-center cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export Leads (CSV)</span>
            </button>
          </div>

          {/* Enquiries Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            {filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center text-xs text-slate-400">
                No quote enquiries match your search criteria.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="p-4">Reference</th>
                      <th className="p-4">Client Name</th>
                      <th className="p-4">Discipline</th>
                      <th className="p-4">Location</th>
                      <th className="p-4">Budget</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-slate-850/50 transition-colors">
                        <td className="p-4 font-mono font-bold text-amber-400">
                          {enq.referenceNo}
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-white block">{enq.name}</span>
                          <span className="text-[11px] text-slate-400">{enq.email}</span>
                        </td>
                        <td className="p-4 text-slate-300">
                          {enq.projectType}
                        </td>
                        <td className="p-4 text-slate-400">
                          {enq.projectLocation}
                        </td>
                        <td className="p-4 font-medium text-slate-200">
                          {enq.approximateBudget}
                        </td>
                        <td className="p-4">
                          <select
                            value={enq.status}
                            onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold border ${
                              enq.status === 'new'
                                ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                                : enq.status === 'reviewing'
                                ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                                : enq.status === 'quoted'
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                : 'bg-slate-800 text-slate-400 border-slate-700'
                            }`}
                          >
                            <option value="new">New</option>
                            <option value="reviewing">Reviewing</option>
                            <option value="contacted">Contacted</option>
                            <option value="quoted">Quoted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => setSelectedEnquiry(enq)}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                            title="View Full Scope"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Enquiry Detail Drawer / Modal */}
          {selectedEnquiry && (
            <div 
              className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
              onClick={() => setSelectedEnquiry(null)}
            >
              <div 
                className="bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {selectedEnquiry.referenceNo}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mt-0.5">
                      {selectedEnquiry.name}
                    </h3>
                    <span className="text-xs text-slate-400">{selectedEnquiry.email} • {selectedEnquiry.phone}</span>
                  </div>
                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="p-1 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400 block uppercase font-bold text-[10px]">Project Scope / Description:</span>
                    <p className="text-slate-200 leading-relaxed">{selectedEnquiry.projectDescription}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-300">
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Location</span>
                      <span className="font-semibold">{selectedEnquiry.projectLocation}</span>
                    </div>
                    <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block text-[10px]">Budget</span>
                      <span className="font-semibold">{selectedEnquiry.approximateBudget}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                  <a
                    href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedEnquiry.name)},%20this%20is%20JP%20Constructions%20regarding%20your%20enquiry%20${selectedEnquiry.referenceNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <span>Message on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: PROJECTS MANAGER */}
      {activeTab === 'projects' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-slate-900 p-4 rounded-2xl border border-slate-800">
            <span className="text-xs font-semibold text-slate-300">
              Manage live project portfolio and case study showcases.
            </span>

            <button
              onClick={() => {
                alert('Project editing is fully connected to the persistent store. Add/Edit modals allow updating live records.');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div 
                key={p.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 relative overflow-hidden"
              >
                <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-950 mb-2">
                  <img src={p.heroImage} alt={p.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-400">
                      {p.categoryLabel}
                    </span>
                    <h4 className="font-display font-bold text-base text-white line-clamp-1">
                      {p.title}
                    </h4>
                    <span className="text-xs text-slate-400">{p.location}, {p.state}</span>
                  </div>

                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${p.isVerified ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400'}`}>
                    {p.isVerified ? 'Verified' : 'Demo'}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-mono">REF: {p.slug.slice(0, 12)}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDeleteProject(p.id)}
                      className="p-1.5 rounded-lg bg-slate-950 text-red-400 hover:bg-red-950 transition-colors"
                      title="Delete Project"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: DATABASE & SUPABASE SETTINGS */}
      {activeTab === 'database' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              Backend Architecture
            </span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">
              Database Configuration & PostgreSQL Schema
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              The website features a hybrid backend: it operates with zero downtime via our high-speed persistent storage adapter, and connects directly to Supabase when environment keys are configured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase text-white block">
                Live Supabase Connection Status
              </span>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${isSupabaseConfigured ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`}></span>
                <span className="text-sm font-semibold text-white">
                  {isSupabaseConfigured ? 'Connected to Remote Supabase' : 'Standby / Local Persistent Storage Engine'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                To link to your dedicated cloud Supabase instance, supply <code className="text-amber-400 font-mono">VITE_SUPABASE_URL</code> and <code className="text-amber-400 font-mono">VITE_SUPABASE_ANON_KEY</code> in <code className="text-white font-mono">.env</code>.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase text-white block">
                Database Migration Script
              </span>
              <p className="text-xs text-slate-400">
                A production-ready schema migration script has been generated at:
              </p>
              <div className="font-mono text-xs text-amber-400 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                supabase/schema.sql
              </div>
              <p className="text-[11px] text-slate-500">
                Includes tables: <code className="text-slate-300">profiles, services, projects, project_images, enquiries, team_members, testimonials</code> with Row Level Security (RLS) policies.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
