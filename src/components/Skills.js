import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal';

function Skills() {
  const skills = [
    { category: 'Langages de programmation', items: [
      { name: 'C', level: 90 },
      { name: 'Python', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'R', level: 65 },
      { name: 'HTML/CSS', level: 70 },
      { name: 'VBA', level: 30 },
    ]},
    { category: 'Systèmes & outils', items: [
      { name: 'Linux', level: 70 },
      { name: 'SQL', level: 70 },
      { name: 'Microsoft Power BI', level: 70 },
      { name: 'DAX', level: 30 },
    ]},
    { category: 'Architecture et développement embarqué', items: [
      { name: 'RISC-V', level: 70 },
    ]},
    { category: 'Outils scientifiques & analyse de données', items: [
      { name: 'MATLAB', level: 70 },
    ]},
  ];

  return (
    <section id="skills" className="section-padding bg-light" style={{ background: 'linear-gradient(to bottom, #f1ecec, #e0e0e0)' }}>
      <Container>
        <h2 className="section-title">Compétences</h2>
        {skills.map((skillCategory, catIndex) => (
          <div key={catIndex} className="mb-5">
            <h3 className="text-start mb-3">{skillCategory.category}</h3>
            <Row>
              {skillCategory.items.map((skill, index) => (
                <Col md={6} key={index} className="mb-3">
                  <Fade direction={index % 2 === 0 ? "left" : "right"} triggerOnce>
                    <h5 className="text-start">{skill.name}</h5>
                    <ProgressBar now={skill.level} label={`${skill.level}%`} />
                  </Fade>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
}

export default Skills;
