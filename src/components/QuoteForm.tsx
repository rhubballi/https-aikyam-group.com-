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
    projectType: defaultProjectType || 'Road Construction',
    projectLocation: '',
    approximateBudget: '₹1 Cr – ₹5 Cr',
    timeline: 'Immediate (Within 1 Month)',
    projectDescription: '',
    antispam: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  const budgetOptions = [
    'Under ₹50 Lakhs (Minor Civil Works)',
    '₹50 Lakhs – ₹1 Cr (Commercial / RCC)',
    '₹1 Cr – ₹5 Cr (Pipelines / Industrial Sheds)',
    '₹5 Cr – ₹20 Cr (Road Corridors / Major Works)',
    '₹20 Cr – ₹100 Cr+ (Large-Scale Turnkey EPC Package)',
    'Tender / Turnkey EPC Quoting'
  ];

  const projectTypes = [
    'Road Construction',
    'Pipelines Construction',
    'RCC Works',
    'Building Construction',
    'Turnkey Infrastructure EPC'
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

    if (formData.antispam) return;

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
    <div className={`bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden ${className}`}>
      
      {submittedQuote ? (
        <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
              Quote Request Submitted Successfully!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-slate-900 font-bold">{submittedQuote.name}</span>. Our senior technical estimators will review your parameters and respond within 24 business hours.
            </p>
          </div>

          {/* Reference Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left space-y-3 shadow-xs">
            <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
              <span className="text-xs uppercase font-bold text-slate-500">Tracking Reference</span>
              <span className="font-mono text-sm font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
                {submittedQuote.referenceNo}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Discipline</span>
                <span className="font-bold text-slate-900">{submittedQuote.projectType}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Site Location</span>
                <span className="font-bold text-slate-900">{submittedQuote.projectLocation}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Budget Band</span>
                <span className="font-bold text-slate-900">{submittedQuote.approximateBudget}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Submission Date</span>
                <span className="font-bold text-slate-900">{new Date(submittedQuote.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <a
              href={`https://wa.me/${companyProfile.contact.whatsappNumber}?text=Hello%20JP%20Constructions,%20I%20have%20submitted%20Quote%20Request%20ref:%20${submittedQuote.referenceNo}%20for%20${encodeURIComponent(submittedQuote.projectType)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Instant WhatsApp Priority Connect</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={resetForm}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider"
            >
              Submit Another Project
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1d4ca2] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#1d4ca2]" />
              <span>Direct Engineering Tender & Quotation Desk</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Request a Technical Project Quotation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Provide your engineering parameters below. Our estimating engineers provide detailed BOQ evaluations, timeline estimates, and feasibility guidance.
            </p>
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
              <span>{error}</span>
            </div>
          )}

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
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Full Name <span className="text-[#1d4ca2]">*</span>
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Official Email <span className="text-[#1d4ca2]">*</span>
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Phone / WhatsApp <span className="text-[#1d4ca2]">*</span>
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Construction Discipline <span className="text-[#1d4ca2]">*</span>
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
              >
                {projectTypes.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Project Site Location <span className="text-[#1d4ca2]">*</span>
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Approximate Budget Band
              </label>
              <div className="relative">
                <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  name="approximateBudget"
                  value={formData.approximateBudget}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
                >
                  {budgetOptions.map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Expected Commencement
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
                >
                  {timelineOptions.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Project Description & Scope Details <span className="text-[#1d4ca2]">*</span>
            </label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows={4}
              required
              placeholder="Outline project scope, span requirements, soil conditions, estimated built-up area, or tender package specifications..."
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#1d4ca2] focus:ring-2 focus:ring-[#1d4ca2]/20 transition-all"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Direct secure submission • Encrypted data storage</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#1d4ca2] hover:bg-[#153a7e] disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-blue-900/20 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
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
