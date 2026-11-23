import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  Menu, 
  X, 
  ChevronDown, 
  FileText, 
  ShieldCheck,
  Truck,
  Droplets,
  Layers,
  Sparkles,
  Mail,
  Phone
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
        { name: 'Road Construction', path: '/services/road-construction', icon: Truck },
        { name: 'Pipelines Construction', path: '/services/pipelines-construction', icon: Droplets },
        { name: 'RCC Works', path: '/services/rcc-works', icon: Layers },
        { name: 'Building Construction', path: '/services/building-construction', icon: Building2 },
      ]
    },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar - Clean Deep Navy / Transparent Blue Accent */}
      <div className="bg-[#072151] border-b border-white/10 text-xs py-2 px-4 sm:px-8 text-blue-100 flex justify-between items-center z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-blue-200 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
            <span>ISO Certified Civil Engineering Contractor • Est. 2001</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={`mailto:${companyProfile.contact.email}`} 
            className="flex items-center gap-1.5 text-blue-200 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{companyProfile.contact.email}</span>
          </a>
          <span className="text-blue-400/40">|</span>
          <a 
            href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`} 
            className="flex items-center gap-1.5 text-white hover:text-[#38bdf8] font-bold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>{companyProfile.contact.displayPhone}</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Header - Unified Transparent Deep Navy Glassmorphism (No jarring white bar) */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#072151]/95 backdrop-blur-md shadow-2xl border-b border-blue-900/60 py-3' 
          : 'bg-[#072151]/80 backdrop-blur-md border-b border-white/10 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Branding - High Contrast White & Sky Blue */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-[#1d4ca2] p-0.5 shadow-md shadow-blue-950/40 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#072151] rounded-[10px] flex items-center justify-center border border-white/20">
                <span className="font-display font-black text-xl tracking-tighter text-white">JP</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white leading-none group-hover:text-[#38bdf8] transition-colors drop-shadow-sm">
                JP CONSTRUCTIONS
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#38bdf8] uppercase mt-1">
                CIVIL INFRASTRUCTURE • EST. 2001
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Crisp White & Legible Links */}
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
                      className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all ${
                        isActive 
                          ? 'text-white bg-white/20 border border-white/30 font-bold backdrop-blur-sm shadow-sm' 
                          : 'text-slate-100 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#38bdf8]' : 'text-slate-300'}`} />
                    </Link>

                    {/* Services Dropdown (The 4 Official Services) */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-[#072151]/95 backdrop-blur-xl border border-blue-800/80 rounded-2xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-blue-200 px-3 py-1.5 border-b border-blue-900/60 mb-1 flex items-center justify-between">
                          <span>Construction Services</span>
                          <Sparkles className="w-3 h-3 text-[#38bdf8]" />
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
                                  ? 'bg-blue-600 text-white font-bold shadow-md'
                                  : 'text-slate-200 hover:text-white hover:bg-white/10'
                              }`}
                            >
                              <div className={`p-1.5 rounded-lg ${isSubActive ? 'bg-white text-blue-700' : 'bg-blue-900/60 text-[#38bdf8]'}`}>
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
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive 
                      ? 'text-white bg-white/20 border border-white/30 font-bold backdrop-blur-sm shadow-sm' 
                      : 'text-slate-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#072151]/95 backdrop-blur-xl border-b border-blue-900 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
            <div className="text-xs uppercase font-bold text-blue-300 px-3 py-1">Navigation</div>
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-600 text-white font-bold shadow-sm'
                      : 'text-slate-100 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="pl-5 pr-2 py-1 space-y-1 border-l-2 border-blue-400/40 ml-4 my-1">
                    {link.subItems?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={`block py-1.5 text-xs font-medium ${
                          location.pathname === sub.path ? 'text-[#38bdf8] font-bold' : 'text-blue-100/80 hover:text-white'
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-blue-900 space-y-2">
              <Link
                to="/quote"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center text-sm flex items-center justify-center gap-2 shadow-md"
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
