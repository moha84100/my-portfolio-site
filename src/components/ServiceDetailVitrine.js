import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ServiceDetailVitrine() {
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdn1RKTzY5sTnPNvoQzZYXlnddjcyC8dWkwXBIFKx2oYQWHBQ/viewform?usp=dialog';

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title">Création de Sites Vitrine</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="text-center mb-4">Un site vitrine est votre carte de visite numérique, essentielle pour toute entreprise ou professionnel souhaitant établir une présence en ligne solide et crédible.</p>
            
            <h3 className="mt-5 mb-3">Pourquoi un site vitrine ?</h3>
            <ul>
              <li><strong>Visibilité 24/7 :</strong> Votre entreprise est accessible à tout moment, partout dans le monde.</li>
              <li><strong>Crédibilité :</strong> Un site professionnel renforce la confiance de vos clients potentiels.</li>
              <li><strong>Présentation Complète :</strong> Mettez en avant vos services, vos réalisations, votre équipe et vos valeurs.</li>
              <li><strong>Génération de Leads :</strong> Facilitez la prise de contact et la conversion de vos visiteurs en clients.</li>
              <li><strong>Maîtrise de votre Image :</strong> Contrôlez entièrement le message et l'esthétique de votre marque en ligne.</li>
            </ul>

            <h3 className="mt-5 mb-3">Ce que je vous propose :</h3>
            <ul>
              <li>Conception personnalisée et design moderne.</li>
              <li>Développement responsive (adapté à tous les écrans : mobile, tablette, ordinateur).</li>
              <li>Optimisation pour le référencement naturel (SEO de base).</li>
              <li>Intégration de formulaires de contact et de galeries d'images.</li>
              <li>Maintenance et support technique (options disponibles).</li>
            </ul>

            <div className="text-center mt-5">
              <Button variant="primary" size="lg" href={googleFormLink} target="_blank" rel="noopener noreferrer">
                Demander un devis pour un site vitrine
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiceDetailVitrine;
