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
  Truck,
  HardHat
} from 'lucide-react';
import { companyProfile } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 via-cyan-500 to-sky-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-xl text-cyan-300">JP</span>
                </div>
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                  JP CONSTRUCTIONS
                </span>
                <span className="text-[10px] font-bold tracking-widest text-teal-400 uppercase">
                  INDIA • ESTABLISHED 2001
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Premier civil engineering and infrastructure main contractor specializing in major river bridges, PSC box girders, railway corridors, heavy industrial facilities, and turnkey construction across India.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-teal-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                20+ Years Verified Record
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                IRS / IRC Code Compliant
              </span>
            </div>
          </div>

          {/* Column 2: Construction Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services/infrastructure" className="hover:text-cyan-400 transition-colors">
                  Infrastructure & Bridges
                </Link>
              </li>
              <li>
                <Link to="/services/roads" className="hover:text-cyan-400 transition-colors">
                  Roads & Highways
                </Link>
              </li>
              <li>
                <Link to="/services/pipelines" className="hover:text-cyan-400 transition-colors">
                  Pipelines & Water Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/services/rcc-works" className="hover:text-cyan-400 transition-colors">
                  Heavy RCC Works & Foundations
                </Link>
              </li>
              <li>
                <Link to="/services/railways" className="hover:text-cyan-400 transition-colors">
                  Railway Corridors & ROR
                </Link>
              </li>
              <li>
                <Link to="/services/industrial" className="hover:text-cyan-400 transition-colors">
                  Industrial Workshops
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="hover:text-cyan-400 transition-colors">
                  Commercial Complexes
                </Link>
              </li>
              <li>
                <Link to="/services/residential" className="hover:text-cyan-400 transition-colors">
                  Residential Construction
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Fleet */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-2">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  About Us & History
                </Link>
              </li>
              <li>
                <Link to="/machinery" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Plant & Machinery Fleet</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition-colors">
                  Core Disciplines
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors">
                  <span>Request a Quotation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Contact Office
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white transition-colors flex items-center gap-1 text-slate-500">
                  <Lock className="w-3 h-3" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-teal-500 pl-2">
              Headquarters
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {companyProfile.headquarters.addressLine1}, {companyProfile.headquarters.city} - {companyProfile.headquarters.postalCode}, {companyProfile.headquarters.district}, {companyProfile.headquarters.state}, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`} className="text-slate-200 hover:text-white transition-colors">
                  {companyProfile.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${companyProfile.contact.email}`} className="text-slate-200 hover:text-white transition-colors">
                  {companyProfile.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">
                  {companyProfile.contact.workingHours}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Public & Infrastructure Clients Strip */}
        <div className="py-6 border-b border-slate-800">
          <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-3">
            Verified Principals & Infrastructure Collaborators:
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-300">
            <span>Rail Vikas Nigam Limited (RVNL)</span>
            <span className="text-slate-600">•</span>
            <span>Tata Projects Limited</span>
            <span className="text-slate-600">•</span>
            <span>Larsen & Toubro (L&T)</span>
            <span className="text-slate-600">•</span>
            <span>KEC International</span>
            <span className="text-slate-600">•</span>
            <span>Dedicated Freight Corridor (DFCC)</span>
            <span className="text-slate-600">•</span>
            <span>South Central Railway</span>
            <span className="text-slate-600">•</span>
            <span>Southern Railway</span>
            <span className="text-slate-600">•</span>
            <span>South Western Railway</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {companyProfile.legalName}. All rights reserved.
          </div>

          <div className="text-center md:text-right max-w-xl text-[11px] text-slate-500">
            Official website for JP Constructions (Kakinada, Andhra Pradesh). Major bridge engineering, railway infrastructure, and civil projects verified from official records.
          </div>
        </div>
      </div>
    </footer>
  );
};
