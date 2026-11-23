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
  Truck,
  Droplets,
  Layers,
  Building2,
  Sparkles
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
      tagline: "Highways & Heavy Industrial Pavements",
      title: "Building Durable Highways & Arterial Roadways",
      description: "Rigid Pavement Quality Concrete (PQC), heavy-duty bituminous highways, and sensor-paver leveled industrial arterial corridors built to strict MoRTH and IRC standards.",
      image: "/images/main-slider/slide-1.jpg",
      stats: [
        { label: "Design Life", value: "30+ Years" },
        { label: "Axle Load", value: "150 kN Rated" },
        { label: "Paving Spec", value: "Dual Sonic Sensors" }
      ],
      link: "/services/road-construction"
    },
    {
      id: "pipelines",
      discipline: "Pipelines Construction",
      icon: Droplets,
      tagline: "Bulk Water Transmission & Jackwells",
      title: "Intake Jackwells, DI Pipelines & Pumphouses",
      description: "Deep pneumatic caisson intake jackwells in riverbed strata, high-head pumping stations, and large-diameter Ductile Iron (DI) transmission mains.",
      image: "/images/main-slider/slide-2.jpg",
      stats: [
        { label: "Jackwell Dia", value: "12m Monolithic" },
        { label: "Pipeline Spec", value: "Class K9 DI" },
        { label: "Test Pressure", value: "16 kg/cm²" }
      ],
      link: "/services/pipelines-construction"
    },
    {
      id: "rcc-works",
      discipline: "RCC Works",
      icon: Layers,
      tagline: "Structural Concrete & Foundations",
      title: "Heavy RCC Foundations, Retaining Walls & Aqueducts",
      description: "Monolithic reinforced cement concrete execution for vibratory machine foundations, retaining walls, multi-million liter reservoirs, and canal aqueducts.",
      image: "/images/main-slider/slide-3.jpg",
      stats: [
        { label: "Grade Mix", value: "M40 – M60 High-Perf" },
        { label: "Testing", value: "100% Cube Certified" },
        { label: "Standard", value: "IS 456 & IS 1893" }
      ],
      link: "/services/rcc-works"
    },
    {
      id: "building",
      discipline: "Building Construction",
      icon: Building2,
      tagline: "Industrial Sheds & Commercial Complexes",
      title: "Turnkey Industrial Plants & Modern Structures",
      description: "High-bay industrial sheds with overhead EOT cranes, heavy laser-screed flooring, commercial complexes, and modern educational institutions.",
      image: "/images/main-slider/slide-4.jpg",
      stats: [
        { label: "Floor Load", value: "Up to 10T/m²" },
        { label: "Crane Bays", value: "Heavy EOT Ready" },
        { label: "Execution", value: "Fast-Track Turnkey" }
      ],
      link: "/services/building-construction"
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
      className="relative bg-[#072151] text-white overflow-hidden border-b-4 border-[#1d4ca2]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Real Photo with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={current.image}
          alt={current.title}
          className="w-full h-full object-cover brightness-[0.4] contrast-110 scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#072151]/95 via-[#072151]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#072151] via-transparent to-transparent"></div>
      </div>

      {/* Main Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headlines & Call-To-Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1d4ca2] text-white text-xs font-black uppercase tracking-wider shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
                <span>{current.discipline}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-blue-200 text-xs font-semibold border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
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
                <div key={sIdx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center">
                  <span className="text-[10px] text-blue-200 uppercase font-bold tracking-wider block">
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
                className="px-7 py-3.5 rounded-xl bg-[#1d4ca2] hover:bg-[#153a7e] text-white font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-blue-900/40 flex items-center gap-2 group active:scale-95"
              >
                <span>Explore {current.discipline}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/machinery"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 backdrop-blur-md"
              >
                <span>View Machinery Fleet</span>
              </Link>

              <button
                onClick={onOpenEstimator}
                className="px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-blue-200 border border-blue-400/30 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-[#38bdf8]" />
                <span>Cost Estimator</span>
              </button>
            </div>
          </div>

          {/* Right Column: Instant Project Inquiry Card (Matching Reference Style) */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 relative">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[11px] uppercase font-extrabold tracking-widest text-[#1d4ca2] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#1d4ca2]" />
                  <span>Quick Civil Consultation</span>
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Request Immediate Site Review
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Have an upcoming road, pipeline, RCC work, or building tender? Get verified response within 24 hours.
                </p>
              </div>

              {quickSubmitted ? (
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#1d4ca2] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-base text-[#072151]">
                    Request Received!
                  </h4>
                  <p className="text-xs text-slate-600">
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
                      placeholder="e.g. Rajesh Patil / Infrastructure JV"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#1d4ca2] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                      Phone Number (Direct)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 94207 35721"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#1d4ca2] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                      Construction Service
                    </label>
                    <select
                      value={quickService}
                      onChange={(e) => setQuickService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#1d4ca2] focus:bg-white transition-colors"
                    >
                      <option value="Road Construction">Road Construction</option>
                      <option value="Pipelines Construction">Pipelines Construction</option>
                      <option value="RCC Works">RCC Works</option>
                      <option value="Building Construction">Building Construction</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-[#1d4ca2] hover:bg-[#153a7e] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-900/20 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 mt-2"
                  >
                    <span>Submit Quick Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-slate-500">
                      Or call directly: <a href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`} className="font-bold text-[#1d4ca2] hover:underline">{companyProfile.contact.displayPhone}</a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Interactive Discipline Tabs */}
      <div className="relative z-20 bg-[#072151]/95 backdrop-blur-md border-t border-blue-900/50 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Discipline Navigation Pills (The 4 Official Services) */}
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
                      ? 'bg-[#1d4ca2] text-white shadow-md font-black scale-105'
                      : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
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
