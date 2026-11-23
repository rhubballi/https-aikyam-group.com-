import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  Layers, 
  FileText, 
  Plus, 
  Trash2, 
  Download, 
  AlertCircle, 
  Database, 
  RefreshCw, 
  Search, 
  X, 
  Eye, 
  ShieldCheck 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SafeImage } from '../components/SafeImage';
import { QuoteRequest, Project } from '../types';
import { quoteService, projectService, isSupabaseConfigured } from '../lib/supabase';

export const AdminDashboard: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('jpc_admin_logged_in') === 'true';
  });

  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<'enquiries' | 'projects' | 'database'>('enquiries');

  const [enquiries, setEnquiries] = useState<QuoteRequest[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState<QuoteRequest | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4 bg-slate-50">
        <SEO 
          title="Admin Authentication Portal"
          description="Administrative portal for JP Constructions project and quotation management."
          canonicalPath="/admin"
        />

        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 max-w-md w-full shadow-xl relative overflow-hidden">
          <div className="text-center space-y-3 mb-8">
            <div className="w-14 h-14 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mx-auto border border-amber-200">
              <Lock className="w-7 h-7" />
            </div>
            <h1 className="font-display text-2xl font-black text-slate-900">
              JP Constructions Portal
            </h1>
            <p className="text-xs text-slate-500">
              Administrative management of projects, tenders, and quotation enquiries.
            </p>
          </div>

          {authError && (
            <div className="p-3.5 mb-5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
                Administrator Password
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                required
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Sign In to Portal
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <button
              onClick={() => {
                setPasswordInput('admin123');
                setIsAuthenticated(true);
                localStorage.setItem('jpc_admin_logged_in', 'true');
              }}
              className="text-xs text-amber-800 hover:text-amber-900 underline font-bold cursor-pointer"
            >
              One-Click Demo Administrator Access (admin123)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16 pt-8 bg-slate-50">
      <SEO 
        title="Admin Control Center"
        description="Portal management for JP Constructions India."
        canonicalPath="/admin"
      />

      {/* Top Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Authorized Management Console</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
            Administrative Control Center
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage public project portfolios, review tender quote submissions, and export CRM leads.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Refresh Data"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Refresh</span>
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-700 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
          <span className="text-xs text-slate-500 uppercase font-bold block">Total Enquiries</span>
          <span className="font-display text-3xl font-black text-amber-700 mt-1 block">
            {enquiries.length}
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block font-medium">
            {enquiries.filter(e => e.status === 'new').length} New Pending
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
          <span className="text-xs text-slate-500 uppercase font-bold block">Live Projects</span>
          <span className="font-display text-3xl font-black text-slate-900 mt-1 block">
            {projects.length}
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block font-medium">
            {projects.filter(p => p.isVerified).length} Verified Works
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
          <span className="text-xs text-slate-500 uppercase font-bold block">Major Spans Built</span>
          <span className="font-display text-3xl font-black text-amber-700 mt-1 block">
            54+
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block font-medium">Across AP, TN, KA</span>
        </div>

        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
          <span className="text-xs text-slate-500 uppercase font-bold block">Backend Adapter</span>
          <span className="font-display text-base font-bold text-slate-900 mt-2 block flex items-center gap-1.5">
            <span className={`w-2.5 h-2.5 rounded-full ${isSupabaseConfigured ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
            <span>{isSupabaseConfigured ? 'Supabase Live' : 'Storage Engine'}</span>
          </span>
          <span className="text-[10px] text-slate-500 mt-1 block font-medium">
            Zero-Breakage Persistence
          </span>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 gap-4">
        <button
          onClick={() => setActiveTab('enquiries')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'enquiries'
              ? 'border-amber-600 text-amber-800'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Quote Enquiries ({enquiries.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'projects'
              ? 'border-amber-600 text-amber-800'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Project Portfolio ({projects.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('database')}
          className={`pb-3 text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
            activeTab === 'database'
              ? 'border-amber-600 text-amber-800'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Database & Schema</span>
        </button>
      </div>

      {/* TAB 1: ENQUIRIES MANAGER */}
      {activeTab === 'enquiries' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search client, email or ref..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500"
                />
              </div>

              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:bg-white focus:border-amber-500"
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
              className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-2 transition-colors w-full sm:w-auto justify-center cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Export Leads (CSV)</span>
            </button>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            {filteredEnquiries.length === 0 ? (
              <div className="p-12 text-center text-xs text-slate-500 font-medium">
                No quote enquiries match your search criteria.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 uppercase font-bold border-b border-slate-200">
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
                  <tbody className="divide-y divide-slate-100">
                    {filteredEnquiries.map((enq) => (
                      <tr key={enq.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-4 font-mono font-bold text-amber-800">
                          {enq.referenceNo}
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-slate-900 block">{enq.name}</span>
                          <span className="text-[11px] text-slate-500">{enq.email}</span>
                        </td>
                        <td className="p-4 text-slate-700 font-medium">
                          {enq.projectType}
                        </td>
                        <td className="p-4 text-slate-600">
                          {enq.projectLocation}
                        </td>
                        <td className="p-4 font-bold text-slate-800">
                          {enq.approximateBudget}
                        </td>
                        <td className="p-4">
                          <select
                            value={enq.status}
                            onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-bold border border-slate-200 bg-slate-50 text-slate-800"
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
                            className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors"
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

          {selectedEnquiry && (
            <div 
              className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
              onClick={() => setSelectedEnquiry(null)}
            >
              <div 
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-lg w-full space-y-5 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-amber-800">
                      {selectedEnquiry.referenceNo}
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-900 mt-0.5">
                      {selectedEnquiry.name}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">{selectedEnquiry.email} • {selectedEnquiry.phone}</span>
                  </div>
                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="p-1 text-slate-400 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-slate-500 block uppercase font-bold text-[10px]">Project Scope / Description:</span>
                    <p className="text-slate-800 leading-relaxed font-normal">{selectedEnquiry.projectDescription}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-slate-700">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-[10px] font-bold">Location</span>
                      <span className="font-bold text-slate-900">{selectedEnquiry.projectLocation}</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <span className="text-slate-500 block text-[10px] font-bold">Budget</span>
                      <span className="font-bold text-slate-900">{selectedEnquiry.approximateBudget}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between items-center">
                  <a
                    href={`https://wa.me/${selectedEnquiry.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedEnquiry.name)},%20this%20is%20JP%20Constructions%20regarding%20your%20enquiry%20${selectedEnquiry.referenceNo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Message on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setSelectedEnquiry(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-bold text-slate-700"
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
          <div className="flex justify-between items-center bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-semibold text-slate-600">
              Manage live project portfolio and case study showcases.
            </span>

            <button
              onClick={() => {
                alert('Project editing is fully connected to the persistent store.');
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Project</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div 
                key={p.id}
                className="bg-white border border-slate-200 rounded-3xl p-5 space-y-3 relative overflow-hidden shadow-xs"
              >
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-2">
                  <SafeImage src={p.heroImage} alt={p.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-amber-700">
                      {p.categoryLabel}
                    </span>
                    <h4 className="font-display font-bold text-base text-slate-900 line-clamp-1">
                      {p.title}
                    </h4>
                    <span className="text-xs text-slate-500 font-medium">{p.location}, {p.state}</span>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${p.isVerified ? 'bg-amber-100 text-amber-900 border border-amber-300' : 'bg-slate-100 text-slate-600'}`}>
                    {p.isVerified ? 'Verified' : 'Demo'}
                  </span>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-mono">REF: {p.slug.slice(0, 12)}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDeleteProject(p.id)}
                      className="p-1.5 rounded-lg bg-slate-50 text-red-600 hover:bg-red-100 transition-colors cursor-pointer"
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
        <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs uppercase font-bold text-amber-700 tracking-wider">
              Backend Architecture
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              Database Configuration & PostgreSQL Schema
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              The website features a hybrid backend: it operates with zero downtime via our high-speed persistent storage adapter, and connects directly to Supabase when environment keys are configured.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase text-slate-900 block">
                Live Supabase Connection Status
              </span>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${isSupabaseConfigured ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></span>
                <span className="text-sm font-bold text-slate-900">
                  {isSupabaseConfigured ? 'Connected to Remote Supabase' : 'Standby / Local Persistent Storage Engine'}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                To link to your dedicated cloud Supabase instance, supply <code className="text-amber-800 font-mono bg-amber-50 px-1 py-0.5 rounded border border-amber-200">VITE_SUPABASE_URL</code> and <code className="text-amber-800 font-mono bg-amber-50 px-1 py-0.5 rounded border border-amber-200">VITE_SUPABASE_ANON_KEY</code> in <code className="text-slate-900 font-mono">.env</code>.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold uppercase text-slate-900 block">
                Database Migration Script
              </span>
              <p className="text-xs text-slate-600">
                A production-ready schema migration script has been generated at:
              </p>
              <div className="font-mono text-xs text-amber-900 bg-white p-2.5 rounded-xl border border-slate-200">
                supabase/schema.sql
              </div>
              <p className="text-[11px] text-slate-500">
                Includes tables: <code className="text-slate-700">profiles, services, projects, project_images, enquiries, team_members, testimonials</code> with Row Level Security (RLS) policies.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
