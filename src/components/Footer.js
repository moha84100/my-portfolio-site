import React from 'react';
import './Footer.css'; // Nous allons créer ce fichier CSS plus tard

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Mohamed Ech-Chkoubi. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;