import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Le formulaire a été soumis. Pour que les messages soient envoyés, une solution backend ou un service tiers est nécessaire.');
    // Ici, vous intégreriez la logique d'envoi du formulaire (ex: via une API, Formspree, etc.)
  };

  return (
    <section className="section-padding">
      <Container>
        <h2 className="section-title">Contactez-moi</h2>
        <Row>
          <Col md={8} className="mx-auto">
            <p className="text-center">N'hésitez pas à me contacter pour toute question ou opportunité. Je suis toujours ouvert aux nouvelles collaborations et aux défis stimulants.</p>
            
            <h3 className="mt-5 mb-3">Laissez-moi un message</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre nom" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Votre message" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Envoyer le message
              </Button>
            </Form>

            <h3 className="mt-5 mb-3">Mes coordonnées</h3>
            <div className="contact-info-box">
              <p>
                <strong>Email:</strong> <a href="mailto:mohamed.echchkoubi@gmail.com">mohamed.echchkoubi@gmail.com</a>
              </p>
              <p>
                <strong>Téléphone:</strong> <a href="tel:+33755683285">0755683285</a>
              </p>
              <p>
                <strong>Adresse:</strong> 26000 Valence
              </p>
            </div>

            <div className="social-icons mt-4">
              <a href="https://linkedin.com/in/mohamed-ech-chkoubi-a15954227" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
