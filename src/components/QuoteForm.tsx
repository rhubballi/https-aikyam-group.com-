import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  MapPin, 
  IndianRupee, 
  Clock, 
  FileText,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Download,
  ExternalLink
} from 'lucide-react';
import { quoteService } from '../lib/supabase';
import { QuoteRequest } from '../types';
import { companyProfile } from '../data/companyData';

interface QuoteFormProps {
  defaultProjectType?: string;
  className?: string;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ 
  defaultProjectType = '',
  className = '' 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: defaultProjectType || 'Infrastructure & Bridges',
    projectLocation: '',
    approximateBudget: '₹1 Cr – ₹5 Cr',
    timeline: 'Immediate (Within 1 Month)',
    projectDescription: '',
    antispam: '', // Honey pot field
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  const budgetOptions = [
    'Under ₹50 Lakhs (Residential / Minor Works)',
    '₹50 Lakhs – ₹1 Cr (Commercial / Turnkey)',
    '₹1 Cr – ₹5 Cr (Industrial / Multi-Storey)',
    '₹5 Cr – ₹20 Cr (Major Bridge / Railway Scope)',
    '₹20 Cr – ₹100 Cr+ (Large-Scale Infrastructure Package)',
    'Tender / Turnkey EPC Quoting'
  ];

  const projectTypes = [
    'Infrastructure & Bridges',
    'Railway Corridors & ROR',
    'Industrial Plants & Heavy Workshops',
    'Commercial & Institutional Construction',
    'Residential & Luxury Enclaves',
    'Structural Renovation & Retrofitting',
    'Turnkey Civil EPC Contracting'
  ];

  const timelineOptions = [
    'Immediate (Within 30 Days)',
    '1 – 3 Months',
    '3 – 6 Months',
    'Tender Bidding Stage (Future Planning)'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Spam bot check
    if (formData.antispam) {
      console.warn('Spam submission suppressed.');
      return;
    }

    // Validation
    if (!formData.name.trim()) {
      setError('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid official email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please provide a valid contact phone number.');
      return;
    }
    if (!formData.projectLocation.trim()) {
      setError('Please specify the project location (City/State).');
      return;
    }
    if (!formData.projectDescription.trim() || formData.projectDescription.length < 20) {
      setError('Please provide a brief description of your project requirements (min 20 characters).');
      return;
    }

    setLoading(true);

    try {
      // Submits to backend / Supabase with automatic local storage persistence
      const result = await quoteService.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        projectType: formData.projectType,
        projectLocation: formData.projectLocation,
        approximateBudget: formData.approximateBudget,
        timeline: formData.timeline,
        projectDescription: formData.projectDescription,
      });

      setSubmittedQuote(result);
    } catch (err: any) {
      setError(err?.message || 'Failed to submit quote request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmittedQuote(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: defaultProjectType || 'Infrastructure & Bridges',
      projectLocation: '',
      approximateBudget: '₹1 Cr – ₹5 Cr',
      timeline: 'Immediate (Within 1 Month)',
      projectDescription: '',
      antispam: '',
    });
  };

  return (
    <div className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {submittedQuote ? (
        /* Success State */
        <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Quote Request Submitted Successfully!
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{submittedQuote.name}</span>. Our senior technical estimators will review your project parameters and respond within 24 business hours.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 max-w-md mx-auto text-left space-y-3">
            <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
              <span className="text-xs uppercase font-bold text-slate-400">Tracking Reference</span>
              <span className="font-mono text-sm font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                {submittedQuote.referenceNo}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block">Discipline</span>
                <span className="font-semibold">{submittedQuote.projectType}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Site Location</span>
                <span className="font-semibold">{submittedQuote.projectLocation}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Budget Band</span>
                <span className="font-semibold">{submittedQuote.approximateBudget}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Submission Date</span>
                <span className="font-semibold">{new Date(submittedQuote.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${companyProfile.contact.whatsappNumber}?text=Hello%20JP%20Constructions,%20I%20have%20submitted%20Quote%20Request%20ref:%20${submittedQuote.referenceNo}%20for%20${encodeURIComponent(submittedQuote.projectType)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Instant WhatsApp Priority Connect</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={resetForm}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs uppercase tracking-wider"
            >
              Submit Another Project
            </button>
          </div>
        </div>
      ) : (
        /* Form State */
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Verified Direct Engineering Tender & Enquiry</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white">
              Request a Technical Project Quotation
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Provide your engineering parameters below. Our estimating team provides detailed BOQ evaluations, timeline estimates, and feasibility guidance.
            </p>
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Hidden Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="antispam"
              value={formData.antispam}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Full Name <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Er. Rajesh Varma"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Official Email <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rajesh@company.com"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Phone / WhatsApp <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Organization / Company */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Company / Department (Optional)
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Infrastructure PSU / Private Developer"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Project Discipline */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Construction Discipline <span className="text-amber-400">*</span>
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
              >
                {projectTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Project Location */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Project Site Location <span className="text-amber-400">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="projectLocation"
                  value={formData.projectLocation}
                  onChange={handleChange}
                  placeholder="e.g. Kakinada, Nellore, Bangalore"
                  required
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                />
              </div>
            </div>

            {/* Approximate Budget */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Approximate Budget Band
              </label>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  name="approximateBudget"
                  value={formData.approximateBudget}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                >
                  {budgetOptions.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Expected Start Timeline */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Expected Commencement
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                >
                  {timelineOptions.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
              Project Description & Scope Details <span className="text-amber-400">*</span>
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Outline project scope, span requirements, soil conditions, estimated built-up area, or tender package specifications..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Direct secure submission • Encrypted data storage</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                  <span>Transmitting Proposal...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Project For Evaluation</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
