import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import { ProjectsPortfolio } from './pages/ProjectsPortfolio';
import { ProjectDetail } from './pages/ProjectDetail';
import { OurTeam } from './pages/OurTeam';
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
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
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

          {/* 4. Residential Construction */}
          <Route path="/services/residential" element={<ResidentialConstructionPage />} />

          {/* 5. Commercial Construction */}
          <Route path="/services/commercial" element={<CommercialConstructionPage />} />

          {/* 6. Industrial Construction */}
          <Route path="/services/industrial" element={<IndustrialConstructionPage />} />

          {/* 7. Infrastructure Projects */}
          <Route path="/services/infrastructure" element={<InfrastructureProjectsPage />} />

          {/* 8. Renovation & Retrofitting */}
          <Route path="/services/renovation" element={<RenovationServicePage />} />

          {/* Specific Railway Corridors Discipline */}
          <Route path="/services/railways" element={<RailwayServicePage />} />

          {/* Dynamic Service Route */}
          <Route path="/services/:slug" element={<ServiceDetail />} />

          {/* 9. Projects / Portfolio */}
          <Route path="/projects" element={<ProjectsPortfolio />} />

          {/* 10. Project Details */}
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* 11. Our Team */}
          <Route path="/team" element={<OurTeam />} />

          {/* 12. Contact Us */}
          <Route path="/contact" element={<ContactUs />} />

          {/* 13. Request a Quote */}
          <Route path="/quote" element={<RequestQuotePage />} />
          <Route path="/request-a-quote" element={<RequestQuotePage />} />

          {/* 14. Admin Control Portal */}
          <Route path="/admin" element={<AdminDashboard />} />

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
