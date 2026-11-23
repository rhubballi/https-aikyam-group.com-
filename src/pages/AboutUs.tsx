import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Building2, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  HardHat,
  Truck,
  Target,
  Compass,
  FileCheck
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { companyProfile, leadershipTeam, verifiedStats } from '../data/companyData';

export const AboutUs: React.FC = () => {
  return (
    <div className="space-y-20 pb-16 pt-8">
      <SEO 
        title="About Us — Corporate Profile & 20+ Years Legacy"
        description="Learn about JP Constructions India, founded in 2001 in Kakinada, AP. Our mission, leadership, infrastructure partnerships with RVNL and Tata Projects, and quality commitments."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Corporate Profile & History</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Pioneering Civil Infrastructure with Uncompromising Precision
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Founded in 2001 in Kakinada, Andhra Pradesh, JP Constructions has grown from a specialized regional contractor into a nationally respected civil engineering firm trusted on critical railway bridges, highways, and industrial assets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & Evolution Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="Our Story"
              title="Built on Integrity, Reliability, and Engineering Agility"
              subtitle="Over two decades of delivering complex structures on time and within budget."
            />

            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                In 2001, JP Constructions was established with a clear mandate: to fill the critical need for a reliable, highly agile main contractor capable of executing complex civil structures where precision, safety, and strict timelines converge.
              </p>
              <p>
                Our breakthrough milestone came with the construction of the longest span PSC Box Girder Bridge in South Western Railways at Doddajala Railway Crossing on the NH-7 highway widening near Bangalore. This engineering achievement established our credentials for high-risk rail and highway interfaces.
              </p>
              <p>
                Subsequently, our teams accomplished the delivery of 10 Major River Bridges on the Villupuram–Mayiladuthurai corridor within an unprecedented 18-month timeframe as nominated sub-contractors for Tata Projects and RVNL, cementing our reputation as contractors who deliver when deadlines are unyielding.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block uppercase font-semibold">Registered Entity</span>
                <span className="text-white font-bold text-sm">JP Constructions India</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-semibold">Establishment Year</span>
                <span className="text-amber-400 font-bold text-sm">2001 (23+ Years)</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-semibold">Operating Headquarters</span>
                <span className="text-white font-bold text-sm">Kakinada, Andhra Pradesh</span>
              </div>
              <div>
                <span className="text-slate-400 block uppercase font-semibold">Primary Focus</span>
                <span className="text-amber-400 font-bold text-sm">Bridges, Railways & Civil EPC</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80"
                alt="JP Constructions site engineers inspecting reinforcement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-xs">
                <span className="text-amber-400 font-bold block">Engineering Philosophy:</span>
                <span className="text-slate-200">
                  "Detailed resource planning, rigorous scheduling, and strict adherence to client objectives ensure a dependable execution experience."
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To be the most respected and dependable civil engineering contractor in India, renowned for structural longevity, zero-harm environments, and technological modernization.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              To deliver uncompromising quality within realistic timeframes, safeguarding worker well-being and optimizing capital efficiency for both public authorities and private developers.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-amber-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-5">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">Quality Policy</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Strict multi-tier QA/QC checks on all raw inputs, continuous cube testing, non-destructive evaluations, and full adherence to IRS, IRC, and IS structural guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Hierarchy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Engineering Leadership"
          title="Guided by Experienced Technical Minds"
          subtitle="Our directors and project heads bring decades of hands-on structural engineering expertise."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member) => (
            <div 
              key={member.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group"
            >
              <div className="aspect-[4/3] bg-slate-950 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-bold text-amber-400">
                  {member.experienceYears}+ Yrs Exp
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h4 className="font-display font-bold text-base text-white group-hover:text-amber-400 transition-colors">
                  {member.name}
                </h4>
                <div className="text-xs text-amber-400 font-semibold">{member.role}</div>
                <div className="text-[11px] text-slate-400 font-mono">{member.qualification}</div>
                <p className="text-xs text-slate-300 line-clamp-3 pt-2 border-t border-slate-800">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heavy Machinery & Plant Fleet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Truck className="w-4 h-4" />
                <span>Heavy Equipment Fleet</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Mechanized Execution & Plant Capability
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We own and operate high-capacity machinery ensuring complete self-reliance across deep foundations, mass concrete production, and high-altitude girder launches.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {[
                { title: "Hydraulic Piling Rigs", detail: "Bored cast-in-situ up to 1500mm dia" },
                { title: "PSC Launching Gantries", detail: "120T & 150T multi-span carriers" },
                { title: "Batching Plants", detail: "60 m³/hr automated twin-shaft mixers" },
                { title: "Heavy Mobile Cranes", detail: "40T to 150T heavy lifting units" },
                { title: "Transit Mixers Fleet", detail: "Dedicated transit logistics fleet" },
                { title: "Laser Screed Flooring", detail: "Industrial grade floor levelers" },
              ].map((eq, i) => (
                <div key={i} className="bg-slate-950 p-4 rounded-xl border border-slate-800/80">
                  <span className="font-bold text-white block mb-1">{eq.title}</span>
                  <span className="text-[11px] text-slate-400">{eq.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Footprint"
          title="Where We Operate"
          subtitle="Strategically located to deploy heavy civil machinery and engineering crews across South India and national corridors."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyProfile.operatingLocations.map((loc, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-lg mb-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>{loc.state}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {loc.hubs.map((hub, hIdx) => (
                  <li key={hIdx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{hub}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 rounded-3xl p-10 sm:p-14 space-y-6">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white">
            Have a Complex Civil or Bridge Tender?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Discuss technical schedules, joint venture capabilities, or sub-contracting packages directly with our senior management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
            >
              Request Project Quotation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider"
            >
              Contact Kakinada Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
