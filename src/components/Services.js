import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Création de Sites Vitrine',
      description: 'Conception et développement de sites web professionnels et esthétiques pour présenter votre activité, vos produits ou vos services. Idéal pour les entreprises, les freelances et les portfolios.',
      icon: 'fas fa-globe', // Exemple d'icône, à adapter si besoin
      link: '/services/site-vitrine', // Redirection vers la page de détail
    },
    {
      title: 'Développement de Sites E-commerce',
      description: "Mise en place de plateformes de vente en ligne robustes et sécurisées, optimisées pour l'expérience utilisateur et la conversion. Intégration de systèmes de paiement et gestion de catalogue produits.",
      icon: 'fas fa-shopping-cart',
      link: '/services/e-commerce', // Redirection vers la page de détail
    },
    {
      title: "Vente d'E-books",
      description: "Création et distribution d'e-books sur des sujets techniques ou spécifiques. Accompagnement dans la rédaction, la mise en page et la publication de vos contenus numériques.",
      icon: 'fas fa-book',
      link: '/ebooks', // Redirection vers la page du catalogue d'e-books
    },
    {
      title: 'Conversion PDF en Excel',
      description: "Automatisation de la conversion de documents PDF complexes (même de grande taille) en fichiers Excel structurés et exploitables. Idéal pour l'extraction de données et l'analyse.",
      icon: 'fas fa-file-excel',
      link: '/services/pdf-excel', // Redirection vers la page de détail
    },
  ];

  const handleCardClick = (link) => {
    navigate(link); // Navigation interne pour toutes les prestations
  };

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title">Mes Prestations</h2>
        <p className="text-center mb-5">Découvrez les services que je propose pour vous accompagner dans vos projets numériques.</p>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card className="h-100 service-card" onClick={() => handleCardClick(service.link)} style={{ cursor: 'pointer' }}>
                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                  {/* <i className={`${service.icon} fa-3x mb-3`}></i> */}
                  <Card.Title className="text-center">{service.title}</Card.Title>
                  <Card.Text className="text-center flex-grow-1">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
