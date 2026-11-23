import React from 'react';
import { motion } from 'framer-motion';
import { companyProfile } from '../data/companyData';
import { ShieldCheck } from 'lucide-react';

export const ClientMarquee: React.FC = () => {
  const clients = companyProfile.verifiedClients;
  // Duplicate for seamless infinite loop
  const marqueeItems = [...clients, ...clients];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
          <span className="text-xs uppercase font-extrabold tracking-widest text-slate-800">
            Trusted by Premier Infrastructure Authorities & Global EPC Conglomerates
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-teal-800 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>Active Government & Corporate Empanelment</span>
        </div>
      </div>

      {/* Animated Tape */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
          whileHover={{ transition: { duration: 60 } }}
        >
          {marqueeItems.map((client, idx) => (
            <div
              key={idx}
              className="bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-teal-400 rounded-2xl px-6 py-4 text-center min-w-[200px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:-translate-y-1 group cursor-default"
            >
              <span className="font-display font-extrabold text-sm text-slate-900 group-hover:text-teal-700 transition-colors block">
                {client.shortName}
              </span>
              <span className="text-[10px] text-slate-500 font-semibold truncate max-w-full block mt-0.5">
                {client.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
