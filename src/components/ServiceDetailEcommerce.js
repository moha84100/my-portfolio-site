import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ServiceDetailEcommerce() {
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLScafxAdf4JSUxbStczx_ieD82r4BMHlZIdFf0UJ2eNtBgwLTA/viewform?usp=dialog';

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title">Développement de Sites E-commerce</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="text-center mb-4">Lancez ou développez votre activité en ligne avec une <strong>boutique e-commerce</strong> performante, sécurisée et facile à gérer. En tant que <strong>développeur e-commerce</strong>, je vous aide à atteindre une clientèle plus large et à augmenter vos ventes grâce à une présence en ligne optimisée.</p>
            
            <h3 className="mt-5 mb-3">Pourquoi investir dans un site e-commerce professionnel ?</h3>
            <p>Un <strong>site e-commerce</strong> est bien plus qu'une simple boutique en ligne ; c'est un puissant levier de croissance pour votre entreprise. Il vous permet de :</p>
            <ul>
              <li><strong>Vendre 24h/24 et 7j/7 :</strong> Vos produits sont disponibles à tout moment, sans contraintes d'horaires, augmentant ainsi vos opportunités de vente.</li>
              <li><strong>Atteindre une Portée Mondiale :</strong> Élargissez votre marché au-delà des frontières géographiques et touchez des clients partout dans le monde.</li>
              <li><strong>Automatiser la Gestion :</strong> Simplifiez la gestion de vos commandes, de vos stocks et de vos paiements, vous faisant gagner un temps précieux.</li>
              <li><strong>Collecter des Données Précieuses :</strong> Analysez le comportement de vos clients pour affiner vos stratégies marketing et améliorer l'expérience d'achat.</li>
              <li><strong>Réduire les Coûts Opérationnels :</strong> Moins de frais fixes qu'une boutique physique, ce qui optimise votre rentabilité.</li>
            </ul>

            <h3 className="mt-5 mb-3">Mes services de développement e-commerce incluent :</h3>
            <ul>
              <li><strong>Conception Personnalisée :</strong> Création d'une interface utilisateur intuitive, attrayante et adaptée à votre marque, garantissant une expérience d'achat fluide.</li>
              <li><strong>Intégration de Paiements Sécurisés :</strong> Mise en place de solutions de paiement fiables et reconnues (Stripe, PayPal, etc.) pour rassurer vos clients.</li>
              <li><strong>Gestion de Catalogue Produits :</strong> Facilité d'ajout, de modification et de suppression de vos produits, avec des options de personnalisation avancées.</li>
              <li><strong>Optimisation SEO E-commerce :</strong> Structuration du site pour un meilleur référencement naturel sur Google, augmentant votre visibilité et attirant plus de trafic qualifié.</li>
              <li><strong>Fonctionnalités Avancées :</strong> Intégration d'avis clients, de systèmes de promotion, de suivi de commande, et bien plus encore pour enrichir l'expérience utilisateur.</li>
              <li><strong>Développement sur Mesure :</strong> Que ce soit pour une petite boutique ou une plateforme complexe, je développe des solutions adaptées à vos besoins spécifiques.</li>
            </ul>

            <div className="text-center mt-5">
              <Button variant="primary" size="lg" href={googleFormLink} target="_blank" rel="noopener noreferrer">
                Demander un devis pour un site e-commerce
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiceDetailEcommerce;
