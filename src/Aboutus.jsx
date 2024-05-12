import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./about.css";

const teamMembers = [
  {
    name: "Alif Nurfaiz Widyatmoko",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFj94a3qEL26A/profile-displayphoto-shrink_400_400/0/1694530454891?e=1720656000&v=beta&t=HQYDZhWtDS6yui_-20oQfEVj3s0tjOi0D0hKzu7iifI",
    description: "Suka Star Wars, The Orville, dan Sci-Fi lainnya",
  },
  {
    name: "John Isaac Witness",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHLL0yHmG_QEA/profile-displayphoto-shrink_400_400/0/1693917177158?e=1720656000&v=beta&t=6KzZM7hhhDN9u_k2cUJ3tLPOQykiEFN0cs972VPxjx8",
    description: "Suka capybara dan PEDROOOO",
  },
  {
    name: "Maxell Nathanael",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHyMn9kKPnIzg/profile-displayphoto-shrink_400_400/0/1692976709581?e=1720656000&v=beta&t=iFF21USgB7FCM84udae1A763wrg-VKabEebJ8hhyuzg",
    description: "Expert dalam strategi militer",
  },
  {
    name: "Haikal Ibrahim Faturahman",
    image:
      "https://media.licdn.com/dms/image/D5603AQF_k-PO1B2trA/profile-displayphoto-shrink_400_400/0/1715188632976?e=1720656000&v=beta&t=20JoJzrYwDPqmRFYHtfsPLZE5FMtTDVb-FjsuSNxshU",
    description: "Seorang Pilot profesional dengan ribuan jam terbang",
  },
];

function About() {
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleClick = (name) => {
    setSelectedMembers((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((member) => member !== name)
        : [...prevSelected, name]
    );
  };

  const isSelected = (name) => selectedMembers.includes(name);

  return (
    <Container className="container-custom">
      <h2 className="h2-custom"><strong>Tentang Kami</strong></h2>
      <p className="p-custom">
        Inilah profil kami, mahasiswa Informatika Universitas Multimedia
        Nusantara.
        <br />
        Dari kelompok 5 Kelas B, Mata Kuliah Intro to Internet Technology (PTI).
        <br />
        Membuat Web berbasis ReactJS dan API.
      </p>
      <Row>
        {teamMembers.map((member, index) => (
          <Col sm={12} md={6} lg={3} className="mb-4" key={index}>
            <div
              className={`card-container ${
                isSelected(member.name) ? "flipped" : ""
              }`}
              onClick={() => handleClick(member.name)}
            >
              <Card className="h-100 shadow-sm card-animation card-front">
                <Card.Img variant="top" src={member.image} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                </Card.Body>
              </Card>
              <Card
                className={`h-100 shadow-sm card-animation card-back ${
                  isSelected(member.name) ? "flipped" : ""
                }`}
              >
                <Card.Body>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
