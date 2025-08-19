import React from 'react';
import { Image } from 'react-bootstrap';

function Hero() {
  const heroSectionStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    color: 'white'
  };

  const videoStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: '-1'
  };

  const contentContainerStyle = {
    position: 'relative',
    zIndex: '1',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  };

  const bottomLeftContainerStyle = {
    position: 'absolute',
    top: '60%',
    left: '7%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  };

  const imageStyle = {
    width: '400px',
    height: '400px',
    objectFit: 'cover'
  };

  const textBlockStyle = {
    maxWidth: '600px',
    textAlign: 'left'
  };

  return (
    <section id="hero" className="hero-section">
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={process.env.PUBLIC_URL + '/hero-background.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={contentContainerStyle}>
        <div style={bottomLeftContainerStyle}>
          <Image src={process.env.PUBLIC_URL + "/ma_photo_de_profil.jpg"} roundedCircle style={imageStyle} />
          <div style={textBlockStyle}>
            <p className="lead" style={{ fontSize: '1.8rem', fontWeight: '400', marginBottom: '0.5rem' }}>Étudiant Ingénieur en Réseau Cybersecurité & Développeur Web | Votre futur collaborateur</p>
            <p style={{ fontSize: '1.2rem', fontWeight: '300', margin: 0 }}>Passionné par la création d'expériences web innovantes et performantes. Fort d'une solide expertise en développement frontend et backend, je suis constamment à la recherche de nouveaux défis pour mettre mes compétences au service de projets stimulants.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
