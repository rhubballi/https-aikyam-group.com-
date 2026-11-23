import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Phone, 
  Calculator,
  CheckCircle2,
  HardHat,
  Truck,
  Droplets,
  Layers,
  Building2
} from 'lucide-react';
import { SafeImage } from './SafeImage';
import { companyProfile } from '../data/companyData';

interface HeroSliderProps {
  onOpenEstimator: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenEstimator }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Quick enquiry state in hero
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickService, setQuickService] = useState('Road Construction');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const slides = [
    {
      id: "roads",
      discipline: "Road Construction",
      icon: Truck,
      tagline: "High-Performance Expressways & RCC Pavements",
      title: "Building Durable Highways & Industrial Roadways",
      description: "Rigid Pavement Quality Concrete (PQC), heavy-duty bituminous highways, and sensor-paver leveled industrial arterial corridors built to strict MoRTH and IRC standards.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=2000&q=85",
      stats: [
        { label: "Design Life", value: "30+ Years" },
        { label: "Axle Load", value: "150 kN Rated" },
        { label: "Paving Spec", value: "Dual Sonic Sensors" }
      ],
      link: "/services/roads"
    },
    {
      id: "bridges",
      discipline: "Bridges & Dams",
      icon: HardHat,
      tagline: "Prestressed Concrete River Spans & Corridors",
      title: "Major River Bridges & Rail Over Rail (ROR) Flyovers",
      description: "Specialized deep well caisson sinking, pier tables, post-tensioned PSC box girders, and viaduct launching across active riverbeds and live rail corridors.",
      image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=2000&q=85",
      stats: [
        { label: "Longest Span", value: "96m Continuous" },
        { label: "River Bridges", value: "10 in 18 Mos" },
        { label: "Code Standard", value: "IRS & IRC Bridge" }
      ],
      link: "/services/infrastructure"
    },
    {
      id: "pipelines",
      discipline: "Pipelines Construction",
      icon: Droplets,
      tagline: "Bulk Water Transmission & Hydraulic Intake Wells",
      title: "Intake Jackwells, DI Pipelines & Pumphouses",
      description: "Deep pneumatic caisson intake jackwells in riverbed strata, high-head pumping stations, and large-diameter Ductile Iron (DI) transmission mains.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85",
      stats: [
        { label: "Jackwell Dia", value: "12m Monolithic" },
        { label: "Pipeline Spec", value: "Class K9 DI" },
        { label: "Test Pressure", value: "16 kg/cm²" }
      ],
      link: "/services/pipelines"
    },
    {
      id: "rcc-works",
      discipline: "RCC Works",
      icon: Layers,
      tagline: "High-Strength Structural Concrete & Deep Rafts",
      title: "Heavy RCC Foundations, Retaining Walls & OHT Tanks",
      description: "Monolithic reinforced cement concrete execution for vibratory machine foundations, retaining walls, multi-million liter reservoirs, and seismic transfer diaphragms.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=85",
      stats: [
        { label: "Grade Mix", value: "M40 – M60 High-Perf" },
        { label: "Testing", value: "100% Cube Certified" },
        { label: "Standard", value: "IS 456 & IS 1893" }
      ],
      link: "/services/rcc-works"
    },
    {
      id: "buildings",
      discipline: "Building Construction",
      icon: Building2,
      tagline: "Industrial Workshops, Fabrication Bays & Commercial Towers",
      title: "Turnkey Industrial Plants & Modern Commercial Structures",
      description: "High-bay industrial sheds with overhead EOT cranes, heavy laser-screed flooring, institutional complexes, and corporate commercial facilities.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85",
      stats: [
        { label: "Floor Load", value: "Up to 10T/m²" },
        { label: "Crane Bays", value: "Heavy EOT Ready" },
        { label: "Execution", value: "Fast-Track Turnkey" }
      ],
      link: "/services/industrial"
    }
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const current = slides[activeSlide];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickPhone.trim()) return;
    setQuickSubmitted(true);
    setTimeout(() => {
      setQuickSubmitted(false);
      setQuickName('');
      setQuickPhone('');
    }, 5000);
  };

  return (
    <div 
      className="relative bg-slate-900 text-white overflow-hidden border-b-4 border-amber-500"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Hero Image with Transitions */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover brightness-[0.38] contrast-125 scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Call-To-Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></span>
                <span>{current.discipline}</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Est. 2001 • Certified Civil EPC Contractor</span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
              {current.title}
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl">
              {current.description}
            </p>

            {/* Technical Specs Pill Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl">
              {current.stats.map((st, sIdx) => (
                <div key={sIdx} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 text-center">
                  <span className="text-[10px] text-amber-300 uppercase font-bold tracking-wider block">
                    {st.label}
                  </span>
                  <span className="font-display font-black text-sm sm:text-base text-white mt-0.5 block">
                    {st.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to={current.link}
                className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-lg hover:shadow-amber-500/30 flex items-center gap-2 group active:scale-95"
              >
                <span>Explore {current.discipline}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="px-6 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 backdrop-blur-md"
              >
                <span>View Real Projects</span>
              </Link>

              <button
                onClick={onOpenEstimator}
                className="px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-amber-400 border border-amber-500/40 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Instant Cost Estimator</span>
              </button>
            </div>
          </div>

          {/* Right Column: Instant Project Inquiry Card (Matching jpconstructionspune.com style) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl text-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 relative">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] uppercase font-extrabold tracking-widest text-amber-700 block">
                  Quick Civil Consultation
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Request Immediate Site Review
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Have an upcoming tender, road, bridge, or RCC work? Get response within 24 hours.
                </p>
              </div>

              {quickSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base text-emerald-900">
                    Request Received!
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Our Senior Project Director will reach out to you directly today.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                      Your Name / Organization
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel / Infrastructure JV"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                      Phone Number (Direct)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                      Construction Service
                    </label>
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    >
                      <option value="Road Construction">Road Construction & Highways</option>
                      <option value="Bridges & Dams">Bridges & Heavy Corridors</option>
                      <option value="Pipelines & Jackwells">Pipelines & Water Infrastructure</option>
                      <option value="RCC Works">Heavy RCC Works & Foundations</option>
                      <option value="Industrial Buildings">Industrial Workshops & Plants</option>
                      <option value="Turnkey Commercial">Commercial Complexes</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 mt-2"
                  >
                    <span>Submit Quick Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-500">
                      Or call directly: <a href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`} className="font-bold text-amber-800 hover:underline">{companyProfile.contact.displayPhone}</a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Interactive Discipline Tabs (Allows direct 1-click switching of slides) */}
      <div className="relative z-20 bg-slate-950/90 backdrop-blur-md border-t border-white/10 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Discipline Navigation Pills */}
          <div className="flex overflow-x-auto gap-2 scrollbar-none py-1">
            {slides.map((s, idx) => {
              const Icon = s.icon;
              const isActive = idx === activeSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-black scale-105'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{s.discipline}</span>
                </button>
              );
            })}
          </div>

          {/* Slider Prev / Next Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveSlide(prev => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveSlide(prev => (prev + 1) % slides.length)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/15"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
