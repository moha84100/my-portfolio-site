import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Fade } from 'react-awesome-reveal';

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
    },
    {
      id: 2,
      title: "10 projets web concrets expliqués pas à pas",
      description: "Boostez votre portfolio avec 10 projets réels, expliqués pas à pas.",
      price: 24.99,
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
    <section id="ebooks" className="section-padding bg-light" style={{ background: 'linear-gradient(to bottom, #d5f4ff, #060429)' }}>
      <Container>
        <h2 className="section-title">Catalogue d'E-books</h2>
        <p className="text-center mb-5">Découvrez ma sélection d'e-books pour approfondir vos connaissances.</p>
        <Row className="justify-content-center">
          {ebooks.map((ebook, index) => (
            <Col xs={12} md={6} lg={4} key={ebook.id} className="mb-4">
              <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
                <Card className="h-100 d-flex flex-column">
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
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Ebooks;