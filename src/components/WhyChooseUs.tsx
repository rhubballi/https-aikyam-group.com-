import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Wrench, 
  CheckCircle2, 
  HardHat, 
  FileCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: "23+ Years Engineering Track Record",
      subtitle: "Established in 2001",
      description: "Proven history executing mission-critical bridge infrastructure, railway grade separators, and high-load industrial structures across South and Central India."
    },
    {
      icon: Cpu,
      title: "Modern Machinery & Plant Ownership",
      subtitle: "Zero Third-Party Dependency",
      description: "Fully owned fleet of automated batching plants, transit mixers, sensor pavers, vibratory rollers, and 160 MT bridge launching truss gantries."
    },
    {
      icon: FileCheck,
      title: "Rigorous Code & Quality Compliance",
      subtitle: "IS / IRC / IRS Certified",
      description: "Every pour undergoes 7-day and 28-day certified cube testing, ultrasonic flaw detection on rebar welds, and non-destructive rebound hammer tests."
    },
    {
      icon: HardHat,
      title: "Uncompromising Trackside Safety",
      subtitle: "Zero-Accident Safety Regime",
      description: "Dedicated HSE leadership enforcing railway safety block rules, personal protective equipment (PPE), daily safety briefings, and zero Lost Time Injuries (LTI)."
    },
    {
      icon: Clock,
      title: "Proven On-Time Execution Velocity",
      subtitle: "Accelerated Delivery Milestones",
      description: "Demonstrated velocity delivering 10 major river bridges across the Villupuram–Mayiladuthurai corridor in just 18 months without schedule overruns."
    },
    {
      icon: TrendingUp,
      title: "Transparent Estimation & Value Engineering",
      subtitle: "Optimal Life-Cycle Value",
      description: "Comprehensive Bill of Quantities (BOQ), clear milestone disbursements, and structural value engineering that eliminates material wastage."
    }
  ];

  return (
    <div className="space-y-12">
      <SectionHeader
        badge="Why Partner With JP Constructions"
        title="Engineering Excellence Built on Verified Capability"
        subtitle="We combine two decades of public infrastructure contracting with modern plant machinery, delivering structures that endure for generations."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-white border border-slate-200/90 rounded-3xl p-7 hover:border-amber-400 transition-shadow duration-300 hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1 mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 block">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-amber-800 transition-colors">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified Engineering Protocol</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
