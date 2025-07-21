import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Portfolio() {
  const projects = [
    {
      title: 'Dashboard de Suivi de Performance Industrielle',
      description: "Création d’un tableau de bord interactif avec Power BI pour visualiser la performance de production d’une entreprise (stage chez Terélian).",
      image: 'https://via.placeholder.com/400x250?text=Projet+PowerBI',
      technologies: 'SQL, Power BI, DAX',
      challenges: 'Extraction des données brutes de systèmes hétérogènes, structuration dans un modèle exploitable et automatisation des rapports.',
      githubLink: '#', // À remplacer si disponible
      demoLink: '#', // À remplacer si disponible
    },
    {
      title: 'Macro VBA de Conversion et Réorganisation de Documents PDF',
      description: "Développement de macros VBA pour automatiser la conversion de documents PDF de 2000 pages en fichiers Excel via Adobe, puis réorganisation des données Excel pour simplifier l'extraction d'informations.",
      image: 'https://via.placeholder.com/400x250?text=Projet+VBA+PDF',
      technologies: 'VBA, Adobe Acrobat, Excel',
      challenges: 'Gestion de gros volumes de données, structuration des données hétérogènes après conversion.',
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: 'Macro VBA de Relevé de Compteurs et Génération de Rapports (Vinci Construction)',
      description: "Création d'une macro VBA pour relever les compteurs de toutes les machines de Vinci Construction et générer un fichier de rapport par machine.",
      image: 'https://via.placeholder.com/400x250?text=Projet+VBA+Compteurs',
      technologies: 'VBA, Excel',
      challenges: 'Collecte de données sur site, automatisation de la génération de rapports individualisés.',
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: "Tableau de Bord Power BI pour l'Analyse d'Inspection Mécanique",
      description: "Conception d'un tableau de bord Power BI pour l'analyse des données d'états des lieux et d'inspections mécaniques des machines en cours.",
      image: 'https://via.placeholder.com/400x250?text=Projet+PowerBI+Inspection',
      technologies: 'Power BI, SQL, DAX',
      challenges: "Intégration de données d'inspection, visualisation claire des indicateurs de performance et de l'état des machines.",
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: "Jeu d'Échecs en Java",
      description: "Programmation d'un jeu d'échecs complet en Java.",
      image: 'https://via.placeholder.com/400x250?text=Jeu+Echecs+Java',
      technologies: 'Java',
      challenges: 'Implémentation des règles du jeu, gestion des mouvements, interface utilisateur.',
      githubLink: '#',
      demoLink: '#',
    },
    {
      title: "Émulateur RISC-V en C",
      description: "Développement d'un émulateur pour l'architecture de jeu d'instructions RISC-V en langage C.",
      image: 'https://via.placeholder.com/400x250?text=RISC-V+Emulator',
      technologies: 'C, RISC-V',
      challenges: "Compréhension de l'architecture RISC-V, implémentation des instructions, gestion de la mémoire et des registres.",
      githubLink: '#',
      demoLink: '#',
    },
  ];

  return (
    <section className="section-padding">
      <Container>
        <h2 className="section-title">Portfolio</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card>
                {/* <Card.Img variant="top" src={project.image} /> */}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    {project.description}<br/>
                    <strong>Technologies:</strong> {project.technologies}<br/>
                    <strong>Défis:</strong> {project.challenges}
                  </Card.Text>
                  <Button variant="primary" href={project.githubLink} target="_blank" className="me-2">GitHub</Button>
                  <Button variant="secondary" href={project.demoLink} target="_blank">Démo</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;