import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css'; // For custom styles

function Hero() {
  return (
    <section className="hero-section text-center">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="mx-auto">
            <Image src={process.env.PUBLIC_URL + "/ma_photo_de_profil.jpg"} roundedCircle fluid className="mb-3" /> {/* Chemin vers ta photo de profil */}
            <h1 className="display-4">Mohamed Ech-Chkoubi</h1>
            <p className="lead">Étudiant Ingénieur en Réseau Cybersecurité & Développeur Web | Votre futur collaborateur</p>
            <p>Passionné par la création d'expériences web innovantes et performantes. Fort d'une solide expertise en développement frontend et backend, je suis constamment à la recherche de nouveaux défis pour mettre mes compétences au service de projets stimulants.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
