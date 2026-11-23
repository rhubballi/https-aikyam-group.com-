import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Calculator,
  Truck,
  Droplets,
  Layers,
  Building2
} from 'lucide-react';

interface HeroSliderProps {
  onOpenEstimator: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onOpenEstimator }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: "roads",
      discipline: "Road Construction",
      icon: Truck,
      tagline: "Highways & Heavy Industrial Pavements",
      title: "Building Durable Highways & Arterial Roadways",
      description: "Rigid Pavement Quality Concrete (PQC), heavy-duty bituminous highways, and sensor-paver leveled industrial arterial corridors built to strict MoRTH and IRC standards.",
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

  return (
    <div 
      className="relative bg-black text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Construction Video - Clean, Clear, Zero Blue Tint */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-100"
        >
          <source src="/videos/construction-hero.mp4" type="video/mp4" />
        </video>

        {/* Transparent neutral gradient strictly for text legibility without obscuring the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Main Slide Content Over Transparent Video */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-4xl space-y-6 text-left">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1d4ca2] text-white text-xs font-black uppercase tracking-wider shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping"></span>
              <span>{current.discipline}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Est. 2001 • Certified Civil EPC Contractor</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.1] drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]">
            {current.title}
          </h1>

          {/* Tagline / Subtitle */}
          <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {current.description}
          </p>

          {/* Technical Specs Pill Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
            {current.stats.map((st, sIdx) => (
              <div key={sIdx} className="bg-black/45 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center shadow-lg">
                <span className="text-[10px] text-blue-200 uppercase font-bold tracking-wider block">
                  {st.label}
                </span>
                <span className="font-display font-black text-sm sm:text-base text-white mt-0.5 block">
                  {st.value}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to={current.link}
              className="px-7 py-3.5 rounded-xl bg-[#1d4ca2] hover:bg-[#153a7e] text-white font-black text-xs uppercase tracking-wider transition-all duration-200 shadow-xl shadow-black/40 flex items-center gap-2 group active:scale-95"
            >
              <span>Explore {current.discipline}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-white border border-white/30 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 backdrop-blur-md active:scale-95 shadow-lg"
            >
              <span>Contact Engineering Team</span>
            </Link>

            <button
              onClick={onOpenEstimator}
              className="px-5 py-3.5 rounded-xl bg-black/30 hover:bg-black/50 text-white border border-white/25 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer backdrop-blur-md shadow-lg"
            >
              <Calculator className="w-4 h-4 text-[#38bdf8]" />
              <span>Cost Estimator</span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Interactive Discipline Tabs Over Video */}
      <div className="relative z-20 bg-black/40 backdrop-blur-md border-t border-white/10 px-4 sm:px-8 py-3">
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
                      : 'bg-black/30 text-slate-200 hover:text-white hover:bg-black/50 border border-white/10 backdrop-blur-sm'
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
              className="p-2 rounded-xl bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer border border-white/15 backdrop-blur-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveSlide(prev => (prev + 1) % slides.length)}
              className="p-2 rounded-xl bg-black/30 hover:bg-black/50 text-white transition-colors cursor-pointer border border-white/15 backdrop-blur-sm"
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
