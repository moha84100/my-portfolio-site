import EbookDetail from './components/EbookDetail';

function AppContent() {
  const location = useLocation();
  // Afficher le bouton Retour sur la page /ebooks et les pages de détail des services
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
        {/* Nouvelles routes pour les pages de détail des services */}
        <Route path="/services/site-vitrine" element={<ServiceDetailVitrine />} />
        <Route path="/services/e-commerce" element={<ServiceDetailEcommerce />} />
        <Route path="/services/pdf-excel" element={<ServiceDetailPdfExcel />} />
        <Route path="/prestation/ebook" element={<EbookDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}