import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function Ebooks() {
  const [loading, setLoading] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState(null);

  const ebooks = [
    {
      id: 1,
      title: "À la Conquête du Prompt Engineering : Domptez l’Intelligence Artificielle par la Maîtrise du Langage",
      description: "Maîtrisez l'art de communiquer avec l'IA pour des résultats optimisés.",
      price: 14.99,
      image: 'https://via.placeholder.com/300x200?text=Ebook+IA', // Placeholder
    },
    {
      id: 2,
      title: "10 projets web concrets expliqués pas à pas",
      description: "Boostez votre portfolio avec 10 projets réels, expliqués pas à pas.",
      price: 24.99,
      image: process.env.PUBLIC_URL + '/ebooks/10_projets_web_concrets.png',
    },
  ];

  const handlePurchase = async (ebook) => {
    setLoading(true);
    setSelectedEbook(ebook.id);
    try {
      const stripe = await stripePromise;
      const response = await axios.post('https://my-portfolio-site-vj11.onrender.com/api/create-checkout-session', {
        ebookTitle: ebook.title,
      });

      const session = response.data;

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error("Error during Stripe checkout:", error);
      alert("Une erreur est survenue lors du processus de paiement.");
    } finally {
      setLoading(false);
      setSelectedEbook(null);
    }
  };

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title">Catalogue d'E-books</h2>
        <p className="text-center mb-5">Découvrez ma sélection d'e-books pour approfondir vos connaissances.</p>
        <Row className="justify-content-center">
          {ebooks.map((ebook) => (
            <Col xs={12} md={6} lg={4} key={ebook.id} className="mb-4">
              <Card className="h-100 d-flex flex-column">
                <Card.Img variant="top" src={ebook.image} />
                <Card.Body className="d-flex flex-column flex-grow-1">
                  <Card.Title>{ebook.title}</Card.Title>
                  <Card.Text className="flex-grow-1">
                    {ebook.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="h5 mb-0">{ebook.price}€</span>
                    <Button variant="primary" onClick={() => handlePurchase(ebook)} disabled={loading && selectedEbook === ebook.id}>
                      {loading && selectedEbook === ebook.id ? (
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                      ) : (
                        'Acheter'
                      )}
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