import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowUpRight, 
  ShieldCheck, 
  Lock,
  Truck
} from 'lucide-react';
import { companyProfile } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#072151] text-slate-300 border-t border-blue-900/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-blue-900/40">
          
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d4ca2] to-[#38bdf8] p-0.5">
                <div className="w-full h-full bg-[#072151] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-xl text-white">JP</span>
                </div>
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  JP CONSTRUCTIONS
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#38bdf8] uppercase">
                  INDIA • ESTABLISHED 2001
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300/80 leading-relaxed max-w-sm">
              Premier civil engineering contractor specializing in road construction, water pipelines, heavy RCC works, and industrial & commercial building projects across India.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800/60 text-blue-200 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
                20+ Years Verified Record
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-800/60 text-slate-300 font-medium">
                ISO & IRC Code Compliant
              </span>
            </div>
          </div>

          {/* Column 2: The 4 Core Construction Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1d4ca2] pl-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services/road-construction" className="hover:text-white transition-colors">
                  Road Construction
                </Link>
              </li>
              <li>
                <Link to="/services/pipelines-construction" className="hover:text-white transition-colors">
                  Pipelines Construction
                </Link>
              </li>
              <li>
                <Link to="/services/rcc-works" className="hover:text-white transition-colors">
                  RCC Works
                </Link>
              </li>
              <li>
                <Link to="/services/building-construction" className="hover:text-white transition-colors">
                  Building Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1d4ca2] pl-2">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us & History
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Plant & Machinery Fleet</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-[#38bdf8] hover:text-white font-semibold flex items-center gap-1 transition-colors">
                  <span>Get a Project Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white transition-colors flex items-center gap-1 text-slate-400">
                  <Lock className="w-3 h-3" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1d4ca2] pl-2">
              Headquarters
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {companyProfile.headquarters.addressLine1}, {companyProfile.headquarters.city} - {companyProfile.headquarters.postalCode}, {companyProfile.headquarters.district}, {companyProfile.headquarters.state}, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <a href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-white transition-colors">
                  {companyProfile.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38bdf8] shrink-0" />
                <a href={`mailto:${companyProfile.contact.email}`} className="text-slate-200 hover:text-white transition-colors">
                  {companyProfile.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  {companyProfile.contact.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {companyProfile.legalName}. All rights reserved.
          </div>

          <div className="text-center md:text-right max-w-xl text-[11px] text-slate-400/80">
            Official website for JP Constructions. Civil engineering, road construction, pipelines, RCC works, and building projects.
          </div>
        </div>
      </div>
    </footer>
  );
};
