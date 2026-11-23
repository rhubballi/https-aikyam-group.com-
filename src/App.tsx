import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ServicesOverview } from './pages/ServicesOverview';
import { ServiceDetail } from './pages/ServiceDetail';
import { ContactUs } from './pages/ContactUs';
import { RequestQuotePage } from './pages/RequestQuotePage';
import { AdminDashboard } from './pages/AdminDashboard';

// Automatically scroll window to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#1d4ca2] selection:text-white">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* 1. Home */}
          <Route path="/" element={<Home />} />

          {/* 2. About Us */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about-us" element={<AboutUs />} />

          {/* 3. Our Services Overview */}
          <Route path="/services" element={<ServicesOverview />} />

          {/* 4. The 4 Official Services (Matching Reference Website) */}
          <Route path="/services/road-construction" element={<ServiceDetail forcedSlug="road-construction" />} />
          <Route path="/services/pipelines-construction" element={<ServiceDetail forcedSlug="pipelines-construction" />} />
          <Route path="/services/rcc-works" element={<ServiceDetail forcedSlug="rcc-works" />} />
          <Route path="/services/building-construction" element={<ServiceDetail forcedSlug="building-construction" />} />

          {/* Legacy Aliases & Dynamic Route */}
          <Route path="/services/roads" element={<Navigate to="/services/road-construction" replace />} />
          <Route path="/services/pipelines" element={<Navigate to="/services/pipelines-construction" replace />} />
          <Route path="/services/building" element={<Navigate to="/services/building-construction" replace />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Plant & Machinery redirect */}
          <Route path="/machinery" element={<Navigate to="/services" replace />} />

          {/* Contact Us */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Request a Quote */}
          <Route path="/quote" element={<RequestQuotePage />} />
          <Route path="/request-a-quote" element={<RequestQuotePage />} />

          {/* Admin Control Portal */}
          <Route path="/admin" element={<AdminDashboard />} />

          {/* Safe Redirects for removed Projects and Team pages */}
          <Route path="/projects" element={<Navigate to="/services" replace />} />
          <Route path="/projects/*" element={<Navigate to="/services" replace />} />
          <Route path="/team" element={<Navigate to="/about" replace />} />

          {/* Fallback redirect */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
