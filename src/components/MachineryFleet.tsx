import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Settings, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { machineryFleet } from '../data/machineryData';
import { SafeImage } from './SafeImage';
import { SectionHeader } from './SectionHeader';

interface MachineryFleetProps {
  showTitle?: boolean;
}

export const MachineryFleet: React.FC<MachineryFleetProps> = ({ showTitle = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'concreting', label: 'Concreting & Batching' },
    { id: 'earthmoving', label: 'Earthmoving & Excavation' },
    { id: 'road', label: 'Road & Pavement' },
    { id: 'lifting', label: 'Lifting & Launching' },
  ];

  const filteredFleet = activeCategory === 'all'
    ? machineryFleet
    : machineryFleet.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-8">
      {showTitle && (
        <SectionHeader
          badge="Heavy Plant & Fleet Inventory"
          title="State-of-the-Art Construction Machinery Fleet"
          subtitle="Our in-house equipment ownership eliminates third-party dependencies, guaranteeing rapid mobilization and uninterrupted project velocity."
          centered
        />
      )}

      {/* Fleet Stats Overview Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-display text-3xl sm:text-4xl font-black text-amber-700 block">
              45+
            </span>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1 block">
              Heavy Equipment Units
            </span>
          </div>
          <div>
            <span className="font-display text-3xl sm:text-4xl font-black text-slate-900 block">
              100%
            </span>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1 block">
              In-House Ownership
            </span>
          </div>
          <div>
            <span className="font-display text-3xl sm:text-4xl font-black text-amber-700 block">
              160 MT
            </span>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1 block">
              Max Crane / Gantry Lift
            </span>
          </div>
          <div>
            <span className="font-display text-3xl sm:text-4xl font-black text-slate-900 block">
              90 m³/h
            </span>
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider mt-1 block">
              Batching Concrete Output
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none justify-start sm:justify-center">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Equipment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFleet.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: (idx % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="group bg-white border border-slate-200/90 rounded-3xl overflow-hidden hover:border-amber-400 transition-shadow duration-300 hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col justify-between shadow-sm"
          >
            <div>
              {/* Image Container */}
              <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                <SafeImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-800 border border-slate-200 shadow-sm">
                  {item.categoryLabel}
                </div>
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-lg text-[10px] font-bold shadow-sm">
                  {item.unitsCount} Units in Fleet
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3">
                <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Specs Pills */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center text-[11px]">
                      <span className="text-slate-400 font-medium">{spec.label}:</span>
                      <span className="font-bold text-slate-700">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Indicator */}
            <div className="px-5 pb-5 pt-1">
              <div className="w-full py-2 px-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] font-bold text-slate-700 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-amber-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Certified Site Ready</span>
                </span>
                <span className="text-slate-400">Deployed Pan-India</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
