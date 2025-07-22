import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Services from './components/Services';
import Ebooks from './components/Ebooks';
import Footer from './components/Footer';
import BackButton from './components/BackButton';
import PaymentSuccess from './components/PaymentSuccess'; // Import the new component

// Import des nouvelles pages de détail
import ServiceDetailVitrine from './components/ServiceDetailVitrine';
import ServiceDetailEcommerce from './components/ServiceDetailEcommerce';
import ServiceDetailPdfExcel from './components/ServiceDetailPdfExcel';

function AppContent() {
  const location = useLocation();
  // Afficher le bouton Retour sur la page /ebooks et les pages de détail des services
  const showBackButton = location.pathname === '/ebooks' || 
                         location.pathname === '/services/site-vitrine' ||
                         location.pathname === '/services/e-commerce' ||
                         location.pathname === '/services/pdf-excel';

  return (
    <div className="App">
      <AppNavbar />
      {showBackButton && <BackButton />} 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/success" element={<PaymentSuccess />} />
        {/* Nouvelles routes pour les pages de détail des services */}
        <Route path="/services/site-vitrine" element={<ServiceDetailVitrine />} />
        <Route path="/services/e-commerce" element={<ServiceDetailEcommerce />} />
        <Route path="/services/pdf-excel" element={<ServiceDetailPdfExcel />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContent />
    </Router>
  );
}

export default App;