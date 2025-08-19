import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

function Experience() {
  const experiences = [
    {
      title: "Stagiaire",
      company: "Terélian",
      duration: "Juin 2025 – Aujourd’hui, Valence",
      description: [
        "Création de rapports de suivi de production avec Power BI.",
        "Utilisation de SQL pour extraire les données depuis les bases internes.",
        "Automatisation de tableaux de bord pour une meilleure prise de décision.",
      ],
    },
    {
      title: "Professeur particulier en mathématiques (Indépendant)",
      company: "Hybride",
      duration: "Sept. 2021 – Aujourd’hui",
      description: [
        "Cours particuliers en mathématiques, physique-chimie, et sciences de l’ingénieur.",
        "Adaptation des méthodes pédagogiques selon le niveau de l’élève.",
      ],
    },
  ];

  const otherExperiences = [
    "Préparateur de commandes (IKEA)",
    "Montage d’abris piscine (Abrisud Caux)",
    "Mise en rayon et vente (Centrakor)",
    "Logistique et stock (Clair Azur)",
    "Équipier polyvalent (McDonald's)",
  ];

  const education = [
    {
      degree: "Diplôme d’ingénieur en informatique et systèmes embarqués",
      institution: "Grenoble INP – Esisar",
      year: "Depuis sept. 2024",
      description: "",
    },
    {
      degree: "CPGE (PCSI – PSI)",
      institution: "Lycée Frédéric Mistral – Avignon",
      year: "2022 – 2024",
      description: "",
    },
    {
      degree: "Baccalauréat Général",
      institution: "Spécialités : Mathématiques & Sciences de l’ingénieur",
      year: "2018-2021",
      description: "",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-light" style={{ background: 'linear-gradient(to bottom, #f1ecec, #d5f4ff)' }}>
      <Container>
        <h2 className="section-title">Expérience & Éducation</h2>
        <Row>
          <Col md={6}>
            <h3>Expérience Professionnelle</h3>
            {experiences.map((exp, index) => (
              <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
                <Card key={index} className="mb-3">
                  <Card.Body>
                    <Card.Title>{exp.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{exp.company} | {exp.duration}</Card.Subtitle>
                    <ul>
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Fade>
            ))}
            <Fade direction="left" triggerOnce>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Autres expériences professionnelles (missions intérimaires via Adecco)</Card.Title>
                <ul>
                  {otherExperiences.map((otherExp, index) => (
                    <li key={index}>{otherExp}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
            </Fade>
          </Col>
          <Col md={6}>
            <h3>Éducation</h3>
            {education.map((edu, index) => (
              <Fade direction={index % 2 === 0 ? "right" : "left"} triggerOnce>
                <Card key={index} className="mb-3">
                  <Card.Body>
                    <Card.Title>{edu.degree}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{edu.institution} | {edu.year}</Card.Subtitle>
                    {edu.description && <Card.Text>{edu.description}</Card.Text>}
                  </Card.Body>
                </Card>
              </Fade>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
