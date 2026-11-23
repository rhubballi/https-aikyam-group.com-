import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  HardHat, 
  Building2, 
  ChevronRight,
  Calculator,
  Truck,
  Droplets,
  Layers,
  Phone,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { SectionHeader } from '../components/SectionHeader';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { motion } from 'framer-motion';
import { CostEstimatorModal } from '../components/CostEstimatorModal';
import { SafeImage } from '../components/SafeImage';
import { HeroSlider } from '../components/HeroSlider';
import { ClientMarquee } from '../components/ClientMarquee';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ScrollMovingCards } from '../components/ScrollMovingCards';
import { companyProfile, clientTestimonials } from '../data/companyData';
import { servicesData } from '../data/servicesData';

export const Home: React.FC = () => {
  const [estimatorOpen, setEstimatorOpen] = useState(false);

  return (
    <div className="space-y-24 pb-16 bg-slate-50">
      <SEO 
        title="Engineering Strong Foundations. Creating Lasting Value."
        description="JP Constructions India is a premier civil engineering main contractor specializing in road construction, water pipelines, heavy RCC works, and building projects since 2001."
        canonicalPath="/"
      />

      <CostEstimatorModal 
        isOpen={estimatorOpen} 
        onClose={() => setEstimatorOpen(false)} 
      />

      {/* =========================================================================
          1. HERO SLIDER SECTION (Real Construction Photos from Reference Site)
         ========================================================================= */}
      <HeroSlider onOpenEstimator={() => setEstimatorOpen(true)} />

      {/* =========================================================================
          2. CLIENT MARQUEE (Continuous Gliding EPC & Authority Clients)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientMarquee />
      </section>

      {/* =========================================================================
          2B. QUICK CONSULTATION ACTION STRIP (Royal Blue & Navy Accent)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="bg-[#072151] text-white border border-blue-900/50 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
          style={{ backgroundImage: "url('/images/background/bg-map.png')", backgroundRepeat: 'repeat' }}
        >
          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#38bdf8] flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Planning an Infrastructure Tender or Construction Project?</span>
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white">
              Speak Directly With Our Project Director
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 font-normal max-w-2xl leading-relaxed">
              From site feasibility and BOQ estimations to end-to-end turnkey civil execution, receive verified engineering guidance within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
            <a
              href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 rounded-xl bg-[#1d4ca2] hover:bg-[#153a7e] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md shadow-blue-900/30"
            >
              <Phone className="w-4 h-4 text-[#38bdf8]" />
              <span>Call: {companyProfile.contact.displayPhone}</span>
            </a>
            <a
              href={companyProfile.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
            <button
              onClick={() => setEstimatorOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#1d4ca2]" />
              <span>Instant Cost Estimator</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPANY OVERVIEW & 20+ YEARS LEGACY (Real Construction Photos)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              badge="About JP Constructions"
              title="Two Decades of High-Precision Heavy Civil Engineering"
              subtitle="Since 2001, we have operated as a premier civil infrastructure contractor executing critical roads, pipelines, heavy RCC works, and building structures with unwavering discipline."
            />

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                Headquartered in Santhi Nagar, Kakinada (Andhra Pradesh), JP Constructions has established a benchmark reputation across South and Central India. We partner directly with public sector undertakings like Rail Vikas Nigam Limited (RVNL) and leading infrastructure giants including Tata Projects, L&T, and KEC International.
              </p>
              <p>
                Our specialized project execution team has earned accolades for completing complex multi-span river bridges—such as the 10 Major River Bridges on the Villupuram–Mayiladuthurai corridor—within aggressive 18-month deadlines without compromising safety or structural integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ca2] shrink-0" />
                <span className="font-semibold">ISO & IRC Code Compliance</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ca2] shrink-0" />
                <span className="font-semibold">In-House Heavy Machinery Fleet</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ca2] shrink-0" />
                <span className="font-semibold">Zero LTI Site Safety Track Record</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 bg-white p-3.5 rounded-xl border border-slate-200/90 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#1d4ca2] shrink-0" />
                <span className="font-semibold">End-to-End Turnkey Delivery</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1d4ca2] hover:text-[#153a7e] group transition-colors"
              >
                <span>Read Our Full Corporate Story & History</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Real Construction Site Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-md border border-slate-200 relative group"
              >
                <SafeImage
                  src="/images/gallery/pic1.jpg"
                  alt="Civil Engineering Execution"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold drop-shadow-md">
                  Active Site Execution
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200 p-5 rounded-3xl text-center shadow-xs"
              >
                <span className="font-display text-4xl font-black text-[#1d4ca2] block">
                  <AnimatedCounter value={54} />
                </span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1 block">
                  Major Projects Delivered
                </span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-4 pt-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <motion.div 
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-blue-50 border border-blue-200 text-slate-900 p-5 rounded-3xl shadow-xs"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#1d4ca2] block">Headquarters</span>
                <span className="font-display font-black text-xl block mt-1">Kakinada, AP</span>
                <span className="text-xs text-slate-600 block mt-1">Santhi Nagar Hub</span>
              </motion.div>
              <motion.div 
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-md border border-slate-200 relative group"
              >
                <SafeImage
                  src="/images/gallery/pic2.jpg"
                  alt="Industrial Construction"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold drop-shadow-md">
                  Heavy Structural Works
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. SCROLL-DRIVEN MOVING REAL WORK CARDS (Real Photos from Reference Site)
         ========================================================================= */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-8">
        <ScrollMovingCards />
      </section>

      {/* =========================================================================
          5. THE 4 CORE SERVICES BREAKDOWN (Matching Reference Website)
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Core Capabilities"
          title="Our Construction Services"
          subtitle="Specialized civil engineering solutions matching our proven track record in roads, pipelines, heavy RCC works, and building structures."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((svc, idx) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 hover:border-[#1d4ca2] transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Visual Real Photo with Icon Badge */}
                <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 mb-5 relative group/img">
                  <SafeImage
                    src={svc.heroImage}
                    alt={svc.title}
                    category={svc.category}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[#1d4ca2] flex items-center justify-center shadow-sm">
                    {svc.category === 'roads' && <Truck className="w-5 h-5" />}
                    {svc.category === 'pipelines' && <Droplets className="w-5 h-5" />}
                    {svc.category === 'rcc-works' && <Layers className="w-5 h-5" />}
                    {svc.category === 'building' && <Building2 className="w-5 h-5" />}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[10px] font-bold text-white uppercase tracking-wider">
                    <span className="bg-[#1d4ca2] text-white px-2.5 py-0.5 rounded shadow-xs font-black">
                      Discipline 0{idx + 1}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded">
                      Certified
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#1d4ca2] transition-colors mb-2">
                  {svc.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {svc.shortDescription}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-4 mb-6">
                  {svc.scopeOfWork.slice(0, 3).map((item, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <span className="text-[#1d4ca2] font-bold">•</span>
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Link
                  to={`/services/${svc.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-300 text-xs font-bold text-[#1d4ca2] flex items-center justify-between transition-colors shadow-xs"
                >
                  <span>Explore Scope & Methodology</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          6. WHY CHOOSE US / KEY ENGINEERING STRENGTHS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WhyChooseUs />
      </section>

      {/* =========================================================================
          7. SEVEN-STAGE PROVEN ENGINEERING PROCESS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Systematic Methodology"
          title="Our Seven-Phase Construction Process"
          subtitle="Every project undergoes rigorous engineering scrutiny, geotechnical modeling, statutory clearances, and quality auditing."
          centered
        />

        <ProcessTimeline />
      </section>

      {/* =========================================================================
          8. VERIFIED CLIENT ENDORSEMENTS
         ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Verified Client Endorsements"
          title="What Our Engineering Partners Say"
          subtitle="Feedback from the principal infrastructure agencies and contracting conglomerates we collaborate with."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientTestimonials.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-white border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between hover:border-[#1d4ca2] transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-1 text-[#1d4ca2] mb-4 text-sm">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-900">{t.clientName}</div>
                <div className="text-[11px] text-[#1d4ca2] font-bold">{t.organization}</div>
                <div className="text-[10px] text-slate-500 mt-1">Project: {t.projectTitle}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
