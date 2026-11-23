import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  FileText, 
  ArrowRight,
  ShieldCheck,
  HardHat,
  Home,
  Factory,
  Wrench,
  TrainTrack
} from 'lucide-react';
import { companyProfile } from '../data/companyData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      subItems: [
        { name: 'All Services Overview', path: '/services', icon: HardHat },
        { name: 'Infrastructure & Bridges', path: '/services/infrastructure', icon: HardHat },
        { name: 'Railway Corridors & ROR', path: '/services/railways', icon: TrainTrack },
        { name: 'Industrial & Heavy Workshops', path: '/services/industrial', icon: Factory },
        { name: 'Commercial Construction', path: '/services/commercial', icon: Building2 },
        { name: 'Residential Construction', path: '/services/residential', icon: Home },
        { name: 'Renovation & Retrofitting', path: '/services/renovation', icon: Wrench },
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Engineering Alert / Quick Contact Bar - Settled Light Cream/Slate */}
      <div className="bg-slate-100 border-b border-slate-200/80 text-xs py-2 px-4 sm:px-8 text-slate-700 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-amber-800 font-semibold">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>20+ Years Verified Infrastructure Excellence (Est. 2001)</span>
          </span>
          <span className="hidden md:inline text-slate-300">|</span>
          <span className="hidden md:inline text-slate-600">
            HQ: {companyProfile.headquarters.city}, {companyProfile.headquarters.state}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-1.5 text-slate-700 hover:text-amber-700 font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>{companyProfile.contact.displayPhone}</span>
          </a>
          <span className="text-slate-300">|</span>
          <Link to="/admin" className="text-slate-500 hover:text-slate-900 transition-colors text-[11px] font-medium">
            Portal Access
          </Link>
        </div>
      </div>

      {/* Main Sticky Header - Clean White Frosted Glass */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 p-0.5 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <span className="font-display font-black text-xl tracking-tighter text-amber-400">JP</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none group-hover:text-amber-600 transition-colors">
                JP CONSTRUCTIONS
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-amber-700 uppercase mt-1">
                INDIA • EST. 2001
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                (link.hasDropdown && location.pathname.startsWith('/services'));

              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-all ${
                        isActive 
                          ? 'text-amber-700 bg-amber-50 font-bold' 
                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-600' : 'text-slate-400'}`} />
                    </Link>

                    {/* Services Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-600 px-3 py-1.5 border-b border-slate-100 mb-1">
                          Construction Disciplines
                        </div>
                        {link.subItems?.map((sub) => {
                          const IconComp = sub.icon;
                          const isSubActive = location.pathname === sub.path;
                          return (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                                isSubActive
                                  ? 'bg-amber-500/10 text-amber-800 font-bold'
                                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg ${isSubActive ? 'bg-amber-500 text-slate-950' : 'bg-slate-100 text-amber-700'}`}>
                                <IconComp className="w-3.5 h-3.5" />
                              </div>
                              <span>{sub.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive 
                      ? 'text-amber-700 bg-amber-50 font-bold' 
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/quote"
              className="relative group overflow-hidden px-4.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/quote"
              className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="text-xs uppercase font-bold text-slate-600 px-3 py-1">Menu</div>
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    location.pathname === link.path
                      ? 'bg-amber-50 text-amber-800 font-bold'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-5 pr-2 py-1 space-y-1 border-l-2 border-slate-200 ml-4 my-1">
                    {link.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block py-1.5 text-xs font-medium ${
                          location.pathname === sub.path ? 'text-amber-700 font-bold' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                to="/quote"
                className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Request Project Quotation</span>
              </Link>
              <a
                href={companyProfile.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-center text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
