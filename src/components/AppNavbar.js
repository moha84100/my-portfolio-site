import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function AppNavbar() {
  const location = useLocation();

  // Helper function to handle navigation
  const handleNavClick = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home and then scroll
      window.location.href = `${process.env.PUBLIC_URL}/${hash}`;
    }
  };

  return (
    <Navbar expand="lg" sticky="top" style={{ backgroundColor: '#c5963f', borderColor: '#c5963f' }}>
      <Container>
        <Navbar.Brand onClick={() => {
  const heroElement = document.getElementById('hero');
  if (heroElement) {
    heroElement.scrollIntoView({ behavior: 'smooth' });
  } else {
    // If not on homepage, navigate to home and then scroll
    window.location.href = `${process.env.PUBLIC_URL}/#hero`;
  }
}}>Mohamed Ech-Chkoubi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={(e) => handleNavClick(e, '#about')}>À propos</Nav.Link>
            <Nav.Link href="#services" onClick={(e) => handleNavClick(e, '#services')}>Mes Prestations</Nav.Link>
            <Nav.Link href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Compétences</Nav.Link>
            <Nav.Link href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Expérience</Nav.Link>
            <Nav.Link href="#ebooks" onClick={(e) => handleNavClick(e, '#ebooks')}>E-books</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;