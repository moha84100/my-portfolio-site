import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function ServiceDetailPdfExcel() {
  const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSdpmC0iVH0V-LKNBiTyz8BljwAWPK9zz28IYQ1w_ekwboIHVQ/viewform?usp=header';

  return (
    <section className="section-padding bg-light">
      <Container>
        <h2 className="section-title">Conversion PDF en Excel</h2>
        <Row className="justify-content-center">
          <Col lg={8}>
            <p className="text-center mb-4">Transformez vos documents PDF complexes en données Excel structurées et exploitables. Gagnez un temps précieux et améliorez la précision de vos analyses.</p>
            
            <h3 className="mt-5 mb-3">Pourquoi automatiser la conversion PDF en Excel ?</h3>
            <ul>
              <li><strong>Gain de Temps Massif :</strong> Éliminez la saisie manuelle fastidieuse et sujette aux erreurs.</li>
              <li><strong>Précision Accrue :</strong> Réduisez les erreurs humaines grâce à l'automatisation.</li>
              <li><strong>Analyse Simplifiée :</strong> Obtenez des données prêtes à être analysées dans Excel (tableaux croisés dynamiques, graphiques).</li>
              <li><strong>Gestion de Gros Volumes :</strong> Traitez des centaines, voire des milliers de pages PDF en quelques clics.</li>
              <li><strong>Flexibilité :</strong> Adaptez l'extraction aux spécificités de vos documents.</li>
            </ul>

            <h3 className="mt-5 mb-3">Ce que je vous propose :</h3>
            <ul>
              <li>Développement de macros VBA personnalisées pour l'extraction.</li>
              <li>Traitement de PDF complexes (multi-colonnes, tableaux, etc.).</li>
              <li>Structuration des données Excel selon vos besoins.</li>
              <li>Automatisation complète du processus de conversion.</li>
              <li>Solutions adaptées aux documents de grande taille (2000 pages et plus).</li>
            </ul>

            <div className="text-center mt-5">
              <Button variant="primary" size="lg" href={googleFormLink} target="_blank" rel="noopener noreferrer">
                Demander un devis pour la conversion PDF en Excel
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ServiceDetailPdfExcel;
