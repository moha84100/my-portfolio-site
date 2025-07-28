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
import PaymentSuccess from './components/PaymentSuccess';
import ServiceDetailVitrine from './components/ServiceDetailVitrine';
import ServiceDetailEcommerce from './components/ServiceDetailEcommerce';
import ServiceDetailPdfExcel from './components/ServiceDetailPdfExcel';
import EbookDetail from './components/EbookDetail';

function AppContent() {
  const location = useLocation();
  const showBackButton = location.pathname === '/ebooks' || 
                         location.pathname === '/services/site-vitrine' ||
                         location.pathname === '/services/e-commerce' ||
                         location.pathname === '/services/pdf-excel' ||
                         location.pathname === '/prestation/ebook';

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
        <Route path="/services/site-vitrine" element={<ServiceDetailVitrine />} />
        <Route path="/services/e-commerce" element={<ServiceDetailEcommerce />} />
        <Route path="/services/pdf-excel" element={<ServiceDetailPdfExcel />} />
        <Route path="/prestation/ebook" element={<EbookDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <AppContent />
    </Router>
  );
}

export default App;