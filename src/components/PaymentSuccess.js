import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './PaymentSuccess.css'; // Nous allons créer ce fichier CSS

function PaymentSuccess() {
  return (
    <section className="section-padding">
      <Container className="text-center">
        <h2 className="section-title">Paiement avec succès !</h2>
        <p className="lead">Merci pour votre achat. Votre transaction a été traitée avec succès.</p>
        <Button as={Link} to="/" variant="primary" size="lg" className="mt-4">
          Retour à l'accueil
        </Button>
      </Container>
    </section>
  );
}

export default PaymentSuccess;
