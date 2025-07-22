import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

// Remplacez par votre clé publique Stripe (pk_test_...) après avoir configuré votre .env dans le backend
const stripePromise = loadStripe('pk_test_51RnenQQpSHVDUuMHKnuZmXBewGhZbjFZ1sDFXr1uM4sCBEDlC29MS7RPzBJ6IVnjNz5ZGQyuW7rIvWdDWdJG8UDq003Q3OJ6xm'); 

function Ebooks() {
  const ebooks = [
    {
      id: 3,
      title: "À la Conquête du Prompt Engineering : DOMPTEZ L’INTELLIGENCE ARTIFICIELLE PAR LA MAITRISE DU LANGAGE",
      description: "Plongez au cœur du Prompt Engineering et maîtrisez l'art de communiquer avec l'intelligence artificielle. Ce guide essentiel vous révèle les techniques et les stratégies pour formuler des requêtes précises, optimiser les réponses de l'IA et libérer tout son potentiel créatif et productif. Que vous soyez débutant ou expert, transformez votre interaction avec l'IA en une véritable superpuissance.",
      price: 14.99, // Utilisez un nombre pour le prix
      image: 'https://via.placeholder.com/300x200?text=Ebook+IA',
    },
    // Ajoutez d'autres e-books ici
  ];

  const handlePurchase = async (ebook) => {
    try {
      const stripe = await stripePromise;
      const response = await axios.post('http://localhost:5000/api/create-checkout-session', {
        ebookTitle: ebook.title,
        ebookPrice: ebook.price,
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
    }
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
                    <span className="h5 mb-0">{ebook.price}€</span>
                    <Button variant="primary" onClick={() => handlePurchase(ebook)}>
                      Acheter
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