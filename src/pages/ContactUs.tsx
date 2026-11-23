import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  MessageSquare,
  Building,
  ExternalLink
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { companyProfile } from '../data/companyData';
import { contactService } from '../lib/supabase';

export const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Project Enquiry & Tender Discussion',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all mandatory fields.');
      return;
    }

    setLoading(true);

    try {
      await contactService.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Project Enquiry & Tender Discussion',
        message: '',
      });
    } catch (err: any) {
      setError(err?.message || 'Failed to transmit message. Please contact us via phone or WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-16 pb-16 pt-8">
      <SEO 
        title="Contact JP Constructions India — Office & Site Locations"
        description="Official contact details for JP Constructions: 3-16B-92, Santhi Nagar, Kakinada - 533003, Andhra Pradesh. Phone: +91 90030 38833. Email: jpc@jpconstructions.in."
        canonicalPath="/contact"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Building className="w-4 h-4 text-amber-400" />
              <span>Direct Communication</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Get in Touch with Our Engineering Team
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Connect with our corporate office in Kakinada or our regional site offices across Andhra Pradesh, Tamil Nadu, and Karnataka.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards & Working Message Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Verified Office Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
              <div className="border-b border-slate-800 pb-4">
                <span className="text-[11px] uppercase font-bold text-amber-400 tracking-wider">
                  Registered Corporate Headquarters
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  JP Constructions India
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Office Address:</span>
                    <span className="text-slate-300 leading-relaxed">
                      {companyProfile.headquarters.addressLine1},<br />
                      {companyProfile.headquarters.city} - {companyProfile.headquarters.postalCode},<br />
                      {companyProfile.headquarters.district}, {companyProfile.headquarters.state}, India
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Key Contact / Leadership:</span>
                    <span className="text-slate-300 block">{companyProfile.contact.contactPerson}</span>
                    <a 
                      href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                      className="text-amber-400 hover:text-amber-300 font-bold block mt-0.5"
                    >
                      {companyProfile.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Corporate Email:</span>
                    <a 
                      href={`mailto:${companyProfile.contact.email}`}
                      className="text-amber-400 hover:text-amber-300 font-medium"
                    >
                      {companyProfile.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Working Hours:</span>
                    <span className="text-slate-400 text-xs">
                      {companyProfile.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Priority Button */}
              <div className="pt-2 border-t border-slate-800">
                <a
                  href={companyProfile.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Start WhatsApp Conversation</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Regional Project Hubs */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-3">
              <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Active Construction Hubs & Field Bases:
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="text-amber-400 font-bold block">Nellore Hub</span>
                  <span className="text-slate-400 text-[11px]">Penna River Corridor</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="text-amber-400 font-bold block">Gudur Base</span>
                  <span className="text-slate-400 text-[11px]">3rd Line Rail Alignment</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="text-amber-400 font-bold block">Podanur Site</span>
                  <span className="text-slate-400 text-[11px]">S&T Workshop Complex</span>
                </div>
                <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                  <span className="text-amber-400 font-bold block">Bangalore Base</span>
                  <span className="text-slate-400 text-[11px]">South Western Railway</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              <div className="border-b border-slate-800 pb-4 mb-6">
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Enquiry Transmission
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Send an Official Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  For general business enquiries, joint ventures, vendor registration, or site coordination.
                </p>
              </div>

              {success ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl font-bold text-white">
                    Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you. Your message has been routed to our project administration desk. We will respond promptly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 uppercase tracking-wider"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Er. Suresh Varma"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="suresh@domain.com"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="+91 90030 38833"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-semibold text-slate-300 mb-2">
                      Message / Requirement *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please share details about your inquiry, bridge project, tender submission, or partnership interest..."
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex justify-between items-center">
                    <span className="text-[11px] text-slate-500">
                      Confidential communication guaranteed.
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-display font-bold text-xl text-white">
                Location Map: Kakinada Headquarters
              </h3>
              <p className="text-xs text-slate-400">
                Santhi Nagar, Kakinada - 533003, East Godavari District, Andhra Pradesh
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Santhi+Nagar+Kakinada+Andhra+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden aspect-[21/9] min-h-[300px] bg-slate-950 border border-slate-800 relative">
            <iframe
              title="JP Constructions Kakinada Office Map"
              src={companyProfile.headquarters.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter invert-[0.9] hue-rotate-180 contrast-125"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
};
