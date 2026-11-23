import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Truck, 
  Target, 
  Compass, 
  FileCheck 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { SafeImage } from '../components/SafeImage';
import { companyProfile, leadershipTeam } from '../data/companyData';

export const AboutUs: React.FC = () => {
  return (
    <div className="space-y-20 pb-16 pt-8 bg-slate-50">
      <SEO 
        title="About Us — Corporate Profile & 20+ Years Legacy"
        description="Learn about JP Constructions India, founded in 2001 in Kakinada, AP. Our mission, leadership, infrastructure partnerships with RVNL and Tata Projects, and quality commitments."
        canonicalPath="/about"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-900 border border-amber-500/30">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Corporate Profile & History</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Pioneering Civil Infrastructure with Uncompromising Precision
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
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

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
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

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-slate-200 text-xs">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block uppercase font-bold text-[10px]">Registered Entity</span>
                <span className="text-slate-900 font-bold text-sm">JP Constructions India</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block uppercase font-bold text-[10px]">Establishment Year</span>
                <span className="text-amber-800 font-bold text-sm">2001 (23+ Years)</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block uppercase font-bold text-[10px]">Operating Headquarters</span>
                <span className="text-slate-900 font-bold text-sm">Kakinada, Andhra Pradesh</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                <span className="text-slate-500 block uppercase font-bold text-[10px]">Primary Focus</span>
                <span className="text-amber-800 font-bold text-sm">Bridges, Railways & Civil EPC</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-slate-100 aspect-[16/10] shadow-md border border-slate-200">
              <SafeImage
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
                alt="JP Constructions site engineers inspecting reinforcement"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 text-xs shadow-lg">
                <span className="text-amber-800 font-bold block">Engineering Philosophy:</span>
                <span className="text-slate-700 font-medium">
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
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-amber-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 border border-amber-200">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To be the most respected and dependable civil engineering contractor in India, renowned for structural longevity, zero-harm environments, and technological modernization.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-amber-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 border border-amber-200">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To deliver uncompromising quality within realistic timeframes, safeguarding worker well-being and optimizing capital efficiency for both public authorities and private developers.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-amber-400 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5 border border-amber-200">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Quality Policy</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-amber-400 transition-all group shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <SafeImage
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-800 border border-slate-200 shadow-sm">
                    {member.experienceYears}+ Yrs Exp
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-amber-800 transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs text-amber-800 font-bold">{member.role}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{member.qualification}</div>
                  <p className="text-xs text-slate-600 line-clamp-3 pt-2 border-t border-slate-100 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heavy Machinery & Plant Fleet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300">
                <Truck className="w-4 h-4 text-amber-700" />
                <span>Heavy Equipment Fleet</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Mechanized Execution & Plant Capability
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
                <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="font-bold text-slate-900 block mb-1">{eq.title}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{eq.detail}</span>
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
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-amber-800 font-display font-bold text-lg mb-3">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>{loc.state}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
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
        <div className="bg-white border border-slate-200 rounded-3xl p-10 sm:p-14 space-y-6 shadow-md">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
            Have a Complex Civil or Bridge Tender?
          </h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Discuss technical schedules, joint venture capabilities, or sub-contracting packages directly with our senior management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              Request Project Quotation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider"
            >
              Contact Kakinada Office
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
