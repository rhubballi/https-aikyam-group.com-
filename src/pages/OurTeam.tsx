import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2 
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { leadershipTeam, companyProfile } from '../data/companyData';

export const OurTeam: React.FC = () => {
  return (
    <div className="space-y-20 pb-16 pt-8 bg-slate-50">
      <SEO 
        title="Our Engineering Leadership & Technical Team"
        description="Meet the experienced structural engineers, project directors, and safety specialists driving JP Constructions India across major river bridges and railway corridors."
        canonicalPath="/team"
      />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-900 border border-amber-500/30">
              <Users className="w-4 h-4 text-amber-600" />
              <span>Engineering Leadership</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Driven by Deep Structural Expertise and Unwavering Commitment
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our multidisciplinary engineering cadre unites decades of expertise across prestressed concrete technology, geotechnical foundation analysis, heavy equipment logistics, and railway safety standards.
            </p>
          </div>
        </div>
      </section>

      {/* Senior Leadership Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Executive Board"
          title="Senior Management & Project Directors"
          subtitle="Experienced professionals who lead from the front lines of high-stakes civil infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl text-[10px] font-bold text-amber-800 border border-slate-200 shadow-sm">
                    {member.experienceYears}+ Years
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-amber-700 block tracking-wider">
                    {member.role}
                  </span>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">{member.qualification}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100 font-normal">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-100 text-[11px] text-amber-800 font-bold">
                  <span>Specialization: </span>
                  <span className="font-medium text-slate-700">{member.specialization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering Hierarchy & Departments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Organizational Structure"
          title="Integrated Project Delivery Departments"
          subtitle="How our specialized engineering divisions ensure end-to-end accountability."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Structural Design & Proofing",
              lead: "Venkat Satyanarayana, M.Tech",
              desc: "Finite element modeling, seismic analysis, IRC/IRS code proofing, and pier table formwork calculations.",
              skills: ["FEA Analysis", "PSC Tendon Stressing", "Bore Strata Interpretation"]
            },
            {
              title: "Heavy Plant Logistics & Machinery",
              lead: "M. Suresh Kumar, B.E.",
              desc: "Managing our fleet of hydraulic piling rigs, 120T launching gantries, and automated 60 m³/hr batching setups.",
              skills: ["Gantry Launching", "Piling Rig Deployment", "Batching QA Systems"]
            },
            {
              title: "Health, Safety & Environment (HSE)",
              lead: "R. Anand Murthy, Lead Auditor",
              desc: "Implementing zero-tolerance trackside safety protocols, fall-arrest systems, and environmental compliance.",
              skills: ["NEBOSH Compliance", "Railway Mega-block Safety", "Tidal River Precautions"]
            },
            {
              title: "Site Execution & Project Management",
              lead: "Prakash Rao & Senior Resident Engrs",
              desc: "On-site 24/7 supervision ensuring daily cube testing, slump verification, and schedule adherence.",
              skills: ["Daily Progress Tracking", "Contractor Coordination", "Commissioning Dossiers"]
            }
          ].map((dept, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-amber-400 transition-colors shadow-sm">
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 block mb-1">
                Division 0{idx + 1}
              </span>
              <h4 className="font-display font-bold text-lg text-slate-900 mb-2">
                {dept.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {dept.desc}
              </p>
              <div className="pt-3 border-t border-slate-100 space-y-1">
                {dept.skills.map((sk, skIdx) => (
                  <div key={skIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-amber-600" />
                    <span>{sk}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Careers Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Join Our Engineering Workforce
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900">
              Looking for Challenging Bridge & Civil Projects?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We welcome motivated civil engineers, structural draftsmen, survey specialists, and heavy plant operators to join our team across Andhra Pradesh and national corridors.
            </p>
          </div>

          <a
            href={`mailto:${companyProfile.contact.email}?subject=Career%20Application%20-%20JP%20Constructions`}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
          >
            <Briefcase className="w-4 h-4" />
            <span>Send CV / Resume</span>
          </a>
        </div>
      </section>

    </div>
  );
};
