import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { ServicesOverview } from './pages/ServicesOverview';
import { 
  ServiceDetail, 
  ResidentialConstructionPage, 
  CommercialConstructionPage, 
  IndustrialConstructionPage, 
  InfrastructureProjectsPage, 
  RenovationServicePage, 
  RailwayServicePage 
} from './pages/ServiceDetail';
import { MachineryPage } from './pages/MachineryPage';
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
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-cyan-600 selection:text-white">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          {/* 1. Home */}
          <Route path="/" element={<Home />} />

          {/* 2. About Us */}
          <Route path="/about" element={<AboutUs />} />

          {/* 3. Our Services Overview */}
          <Route path="/services" element={<ServicesOverview />} />

          {/* 4. Specialized Disciplines */}
          <Route path="/services/residential" element={<ResidentialConstructionPage />} />
          <Route path="/services/commercial" element={<CommercialConstructionPage />} />
          <Route path="/services/industrial" element={<IndustrialConstructionPage />} />
          <Route path="/services/infrastructure" element={<InfrastructureProjectsPage />} />
          <Route path="/services/renovation" element={<RenovationServicePage />} />
          <Route path="/services/railways" element={<RailwayServicePage />} />
          <Route path="/services/roads" element={<InfrastructureProjectsPage />} />
          <Route path="/services/pipelines" element={<InfrastructureProjectsPage />} />
          <Route path="/services/rcc-works" element={<InfrastructureProjectsPage />} />

          {/* Dynamic Service Route */}
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* Plant & Machinery Fleet */}
          <Route path="/machinery" element={<MachineryPage />} />

          {/* Contact Us */}
          <Route path="/contact" element={<ContactUs />} />

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
