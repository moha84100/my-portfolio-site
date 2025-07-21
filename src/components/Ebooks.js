import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Ebooks() {
  const ebooks = [
    {
      id: 3,
      title: "Maîtriser l'IA au Quotidien : Guide Pratique pour Débutants et Experts",
      description: "Découvrez comment intégrer l'intelligence artificielle dans votre vie personnelle et professionnelle. Ce guide complet vous offre des stratégies concrètes, des outils essentiels et des cas d'usage pour exploiter pleinement le potentiel de l'IA, de la productivité à la créativité.",
      price: '19.99€',
      image: 'https://via.placeholder.com/300x200?text=Ebook+IA',
    },
    // Ajoutez d'autres e-books ici
  ];

  const handleAddToCart = (ebookId) => {
    alert(`L'e-book ${ebookId} a été ajouté au panier (simulation). Pour un vrai panier, une solution e-commerce est nécessaire.`);
    // Ici, vous intégreriez la logique d'ajout au panier d'une plateforme e-commerce externe
  };

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title">Catalogue d'E-books</h2>
        <p className="text-center mb-5">Découvrez ma sélection d'e-books pour approfondir vos connaissances.</p>
        <Row className="justify-content-center">
          {ebooks.map((ebook) => (
            <Col md={6} lg={4} key={ebook.id} className="mb-4">
              <Card className="h-100">
                {/* <Card.Img variant="top" src={ebook.image} /> */}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{ebook.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {ebook.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 mb-0">{ebook.price}</span>
                    <Button variant="primary" onClick={() => handleAddToCart(ebook.id)}>
                      Ajouter au panier
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Ebooks;