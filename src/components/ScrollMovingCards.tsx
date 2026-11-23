import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  HardHat, 
  Truck, 
  Droplets, 
  Layers, 
  Factory, 
  TrainTrack, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeImage } from './SafeImage';
import { SectionHeader } from './SectionHeader';

interface CapabilityCard {
  id: string;
  title: string;
  discipline: string;
  metric: string;
  metricLabel: string;
  spec: string;
  image: string;
  icon: React.ElementType;
  link: string;
}

const row1Cards: CapabilityCard[] = [
  {
    id: "cap-1",
    title: "Major River PSC Box Girder Bridge",
    discipline: "Bridge Infrastructure",
    metric: "96m",
    metricLabel: "Continuous Longest Span",
    spec: "IRS Bridge Code • Deep Well Caissons",
    image: "/images/bridge-hero.svg",
    icon: HardHat,
    link: "/services/infrastructure"
  },
  {
    id: "cap-2",
    title: "4-Lane High Velocity Expressways",
    discipline: "Road & Pavements",
    metric: "150 kN",
    metricLabel: "Axle Load Rating",
    spec: "Sensor-Paver Leveled PQC Pavement",
    image: "/images/road-construction.svg",
    icon: Truck,
    link: "/services/roads"
  },
  {
    id: "cap-3",
    title: "Deep Riverbed Intake Jackwells",
    discipline: "Water & Pipelines",
    metric: "12m Dia",
    metricLabel: "Monolithic Sinking",
    spec: "Pneumatic Sinking • Class K9 DI Pipes",
    image: "/images/pipeline-construction.svg",
    icon: Droplets,
    link: "/services/pipelines"
  },
  {
    id: "cap-4",
    title: "Rail-Over-Rail (ROR) Flyover Viaducts",
    discipline: "Railway Corridors",
    metric: "160 MT",
    metricLabel: "Truss Launching Capacity",
    spec: "Live Track Safety Blocks • Zero LTI",
    image: "/images/civil-execution.svg",
    icon: TrainTrack,
    link: "/services/railways"
  }
];

const row2Cards: CapabilityCard[] = [
  {
    id: "cap-5",
    title: "Heavy RCC Machine Rafts & Slabs",
    discipline: "Structural Concrete",
    metric: "M60",
    metricLabel: "High-Strength Mix Design",
    spec: "Continuous 36-hr Monolithic Pours",
    image: "/images/rcc-construction.svg",
    icon: Layers,
    link: "/services/rcc-works"
  },
  {
    id: "cap-6",
    title: "Turnkey Pre-Engineered Workshops",
    discipline: "Industrial Facilities",
    metric: "10T/m²",
    metricLabel: "Heavy Floor Load Rating",
    spec: "Overhead EOT Crane Bays • FM2 Flatness",
    image: "/images/industrial-building.svg",
    icon: Factory,
    link: "/services/industrial"
  },
  {
    id: "cap-7",
    title: "Precast Girder Yard & Launching",
    discipline: "Infrastructure Engineering",
    metric: "10 Bridges",
    metricLabel: "Delivered in 18 Months",
    spec: "Villupuram–Mayiladuthurai Corridor",
    image: "/images/bridge-hero.svg",
    icon: HardHat,
    link: "/services/infrastructure"
  },
  {
    id: "cap-8",
    title: "Bulk DI Water Transmission Grids",
    discipline: "Hydraulic Utilities",
    metric: "16 kg/cm²",
    metricLabel: "Hydrostatic Test Pressure",
    spec: "Thrust Blocks & Surge Pumping Bays",
    image: "/images/pipeline-construction.svg",
    icon: Droplets,
    link: "/services/pipelines"
  }
];

export const ScrollMovingCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the section to move cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Row 1 shifts smoothly from left (positive X) to right (negative X) as you scroll down
  const xRow1 = useTransform(scrollYProgress, [0, 1], ["5%", "-35%"]);
  // Row 2 shifts smoothly in the opposite direction
  const xRow2 = useTransform(scrollYProgress, [0, 1], ["-35%", "5%"]);

  return (
    <div ref={containerRef} className="space-y-10 overflow-hidden py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-teal-50 text-teal-900 border border-teal-200/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Interactive Operational Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Core Civil Capabilities in Motion
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            As you scroll, inspect our specialized civil execution disciplines spanning heavy bridges, sensor-paved highways, and high-pressure transmission networks.
          </p>
        </div>

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-cyan-700 transition-colors shrink-0 group"
        >
          <span>Explore All 10 Disciplines</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Interactive Moving Stream: Row 1 (Glides Left on Scroll) */}
      <div className="relative w-full overflow-hidden py-3">
        <motion.div 
          style={{ x: xRow1 }} 
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing pl-4 sm:pl-8"
        >
          {row1Cards.map((card) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="w-[340px] sm:w-[400px] shrink-0 bg-white border border-slate-200/90 hover:border-cyan-400 rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Banner */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                    <SafeImage
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {/* Top Tag & Metric Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[10px] font-bold text-teal-800 border border-slate-200 shadow-sm">
                      <IconComp className="w-3.5 h-3.5 text-teal-600" />
                      <span>{card.discipline}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 text-right">
                      <span className="font-display font-black text-xl text-white block leading-none drop-shadow-md">
                        {card.metric}
                      </span>
                      <span className="text-[10px] text-teal-300 uppercase font-bold tracking-wider block">
                        {card.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-teal-900 transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium">
                    {card.spec}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-teal-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    Certified Execution
                  </span>
                  <Link
                    to={card.link}
                    className="p-2 rounded-xl bg-slate-100 group-hover:bg-teal-600 group-hover:text-white text-slate-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Interactive Moving Stream: Row 2 (Glides Right on Scroll) */}
      <div className="relative w-full overflow-hidden py-3">
        <motion.div 
          style={{ x: xRow2 }} 
          className="flex gap-6 w-max cursor-grab active:cursor-grabbing pl-4 sm:pl-8"
        >
          {row2Cards.map((card) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="w-[340px] sm:w-[400px] shrink-0 bg-white border border-slate-200/90 hover:border-cyan-400 rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:shadow-cyan-900/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Banner */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 relative mb-4">
                    <SafeImage
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {/* Top Tag & Metric Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md text-[10px] font-bold text-teal-800 border border-slate-200 shadow-sm">
                      <IconComp className="w-3.5 h-3.5 text-teal-600" />
                      <span>{card.discipline}</span>
                    </div>

                    <div className="absolute bottom-3 right-3 text-right">
                      <span className="font-display font-black text-xl text-white block leading-none drop-shadow-md">
                        {card.metric}
                      </span>
                      <span className="text-[10px] text-cyan-300 uppercase font-bold tracking-wider block">
                        {card.metricLabel}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-teal-900 transition-colors mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium">
                    {card.spec}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-cyan-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                    IS / IRC Compliant
                  </span>
                  <Link
                    to={card.link}
                    className="p-2 rounded-xl bg-slate-100 group-hover:bg-cyan-600 group-hover:text-white text-slate-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
