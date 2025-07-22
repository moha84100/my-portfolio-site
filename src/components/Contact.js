import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios'; // Import axios
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(null); // Clear previous status

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
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
              {status === 'success' && <Alert variant="success">Message envoyé avec succès !</Alert>}
              {status === 'error' && <Alert variant="danger">Erreur lors de l'envoi du message. Veuillez réessayer plus tard.</Alert>}

              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre nom" required value={formData.name} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre email" required value={formData.email} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Votre message" required value={formData.message} onChange={handleChange} />
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
