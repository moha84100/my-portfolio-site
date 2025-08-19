import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <section id="about" className="section-padding" style={{ background: 'linear-gradient(to bottom, #060429, #d5f4ff)' }}>
      <Container>
        <h2 className="section-title" style={{ color: '#d5f4ff' }}>À propos de moi</h2>
        <Row className="justify-content-center">
          <Col lg={10} className="about-content">
            <div className="about-block">
              <h3>Mon Parcours & Ma Philosophie</h3>
              <p>
                Étudiant en ingénierie informatique et systèmes embarqués à Grenoble INP – Esisar, je suis animé par une passion inébranlable pour la technologie et l'innovation. Mon parcours, forgé par des classes préparatoires exigeantes, m'a doté d'une discipline intellectuelle rigoureuse et d'une capacité d'analyse approfondie. Je crois fermement que la persévérance et la curiosité sont les piliers de l'apprentissage continu, des valeurs que j'incarne dans chaque projet.
              </p>
            </div>

            <div className="about-block">
              <h3>Compétences & Adaptabilité</h3>
              <p>
                Je me distingue par ma capacité à aborder et résoudre des problèmes complexes avec méthode et créativité. Mes diverses expériences professionnelles m'ont permis de développer une adaptabilité remarquable, me permettant de m'intégrer rapidement et d'apporter une valeur ajoutée significative dans des environnements variés. Que ce soit en programmation, en gestion de projet ou en analyse de données, je suis toujours prêt à relever de nouveaux défis techniques.
              </p>
            </div>

            <div className="about-block">
              <h3>Au-delà du Code : Mes Passions</h3>
              <p>
                En dehors du cadre académique et professionnel, je cultive un équilibre à travers mes passions. Le basketball, que je pratique à un niveau régional, m'enseigne la stratégie d'équipe et la persévérance. Les échecs, quant à eux, affûtent mon esprit stratégique et ma capacité à anticiper. Ces activités enrichissent ma pensée et ma capacité à aborder les problèmes sous différents angles.
              </p>
            </div>

            <div className="about-block">
              <h3>Mes Aspirations</h3>
              <p>
                Je suis activement à la recherche d'opportunités stimulantes où je pourrai mettre mes compétences en programmation et en gestion de projet au service de l'innovation. Mon objectif est de contribuer activement à des projets techniques exigeants, tout en évoluant dans un environnement qui favorise le développement humain et intellectuel. Je suis convaincu que c'est en collaborant au sein d'équipes dynamiques que l'on crée les solutions de demain.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
