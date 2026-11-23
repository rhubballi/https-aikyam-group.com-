import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Droplets, 
  Layers, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';

interface CapabilityCard {
  id: string;
  title: string;
  discipline: string;
  location: string;
  spec: string;
  image: string;
  icon: React.ElementType;
  link: string;
}

const row1Cards: CapabilityCard[] = [
  {
    id: "cap-1",
    title: "Jackwell - JSPM College",
    discipline: "Pipelines & Jackwell",
    location: "Wagholi, Pune",
    spec: "Deep riverbed monolithic intake jackwell & pumphouse",
    image: "/images/projects/jackwell-jspm-college-wagholi.jpg",
    icon: Droplets,
    link: "/services/pipelines-construction"
  },
  {
    id: "cap-2",
    title: "Industrial Shed - Om Sai Engg.",
    discipline: "Building Construction",
    location: "Khopoli, Maharashtra",
    spec: "Turnkey PEB structural shed with heavy EOT crane bays",
    image: "/images/projects/industrial-shed-om-sai-khopoli.jpg",
    icon: Building2,
    link: "/services/building-construction"
  },
  {
    id: "cap-3",
    title: "Banda Canal Through Aqueduct",
    discipline: "RCC Works",
    location: "Tillari Irrigation Project",
    spec: "Reinforced concrete elevated canal aqueduct & siphon conduits",
    image: "/images/projects/banda-canal-through-aqueduct-tillari.jpg",
    icon: Layers,
    link: "/services/rcc-works"
  },
  {
    id: "cap-4",
    title: "Expressway & Highway PQC Pavement",
    discipline: "Road Construction",
    location: "Industrial Corridor",
    spec: "High-grade PQC concrete and sensor-paved bituminous highway",
    image: "/images/services/1.jpg",
    icon: Truck,
    link: "/services/road-construction"
  }
];

const row2Cards: CapabilityCard[] = [
  {
    id: "cap-5",
    title: "DI Pipeline - JSPM College",
    discipline: "Pipelines Construction",
    location: "Wagholi, Pune",
    spec: "Bulk Ductile Iron (DI) transmission main & thrust blocks",
    image: "/images/projects/di-pipeline-jspm-college-wagholi.jpg",
    icon: Droplets,
    link: "/services/pipelines-construction"
  },
  {
    id: "cap-6",
    title: "RCC Industrial Shed Execution",
    discipline: "RCC & Industrial Works",
    location: "Khopoli, Maharashtra",
    spec: "Heavy machine raft foundations and monolithic framing",
    image: "/images/projects/rcc-industrial-shed-om-sai-khopoli.jpg",
    icon: Layers,
    link: "/services/rcc-works"
  },
  {
    id: "cap-7",
    title: "Aqueduct Structural Framework",
    discipline: "RCC Works",
    location: "Phaltan, Maharashtra",
    spec: "Heavy-duty hydraulic water-carrying bridge structure",
    image: "/images/projects/aqueduct-phaltan.jpg",
    icon: Layers,
    link: "/services/rcc-works"
  },
  {
    id: "cap-8",
    title: "Modern Commercial Complex",
    discipline: "Building Construction",
    location: "Corporate Hub",
    spec: "Turnkey commercial civil framework with modern façade",
    image: "/images/gallery/pic1.jpg",
    icon: Building2,
    link: "/services/building-construction"
  }
];

// Replicated arrays for seamless continuous looping in opposite directions
const continuousRow1 = [...row1Cards, ...row1Cards, ...row1Cards, ...row1Cards];
const continuousRow2 = [...row2Cards, ...row2Cards, ...row2Cards, ...row2Cards];

export const ScrollMovingCards: React.FC = () => {
  return (
    <div className="space-y-8 overflow-hidden py-10 relative">
      {/* Background Watermark Pattern from Reference Website */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none bg-repeat"
        style={{ backgroundImage: "url('/images/background/bg-map.png')" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-blue-50 text-[#1d4ca2] border border-blue-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1d4ca2]" />
            <span>Demonstrated Engineering Track Record</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Real Infrastructure Works in Motion
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Continuously gliding showcase of verified civil site executions across intake jackwells, industrial sheds, canal aqueducts, and arterial highways.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#1d4ca2] hover:text-[#153a7e] transition-colors shrink-0 group"
        >
          <span>Explore All 4 Services</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Row 1: Continuously Moving to the Left */}
      <div className="relative w-full overflow-hidden py-2 z-10 group/row1">
        <div className="animate-marquee-left flex gap-6 w-max cursor-pointer pl-4 sm:pl-8">
          {continuousRow1.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={`${card.id}-r1-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white border border-slate-200 hover:border-[#1d4ca2] rounded-3xl p-5 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Photo */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                    <SafeImage
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#1d4ca2] border border-slate-200 shadow-sm">
                      <IconComp className="w-3.5 h-3.5 text-[#1d4ca2]" />
                      <span>{card.discipline}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] text-white/90 font-medium block">
                        📍 {card.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#1d4ca2] transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {card.spec}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1d4ca2] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ca2]" />
                    Verified On-Site Work
                  </span>
                  <Link
                    to={card.link}
                    className="p-2 rounded-xl bg-blue-50 group-hover:bg-[#1d4ca2] group-hover:text-white text-[#1d4ca2] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Row 2: Continuously Moving in the OPPOSITE Direction (Rightwards) */}
      <div className="relative w-full overflow-hidden py-2 z-10 group/row2">
        <div className="animate-marquee-right flex gap-6 w-max cursor-pointer pl-4 sm:pl-8">
          {continuousRow2.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div
                key={`${card.id}-r2-${idx}`}
                className="w-[320px] sm:w-[380px] shrink-0 bg-white border border-slate-200 hover:border-[#1d4ca2] rounded-3xl p-5 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Photo */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                    <SafeImage
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[10px] font-bold text-[#1d4ca2] border border-slate-200 shadow-sm">
                      <IconComp className="w-3.5 h-3.5 text-[#1d4ca2]" />
                      <span>{card.discipline}</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-[11px] text-white/90 font-medium block">
                        📍 {card.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-[#1d4ca2] transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {card.spec}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#1d4ca2] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#1d4ca2]" />
                    Verified On-Site Work
                  </span>
                  <Link
                    to={card.link}
                    className="p-2 rounded-xl bg-blue-50 group-hover:bg-[#1d4ca2] group-hover:text-white text-[#1d4ca2] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
