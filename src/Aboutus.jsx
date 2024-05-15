import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./about.css";

const teamMembers = [
  {
    name: "Alif Nurfaiz Widyatmoko",
    image:
      "https://media.licdn.com/dms/image/D4E03AQFj94a3qEL26A/profile-displayphoto-shrink_400_400/0/1694530454891?e=1720656000&v=beta&t=HQYDZhWtDS6yui_-20oQfEVj3s0tjOi0D0hKzu7iifI",
    description: "Suka Star Wars, The Orville, dan Sci-Fi lainnya",
    descriptionEN: "Loves Star Wars, The Orville, and other Sci-Fis",
  },
  {
    name: "John Isaac Witness",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHLL0yHmG_QEA/profile-displayphoto-shrink_400_400/0/1693917177158?e=1720656000&v=beta&t=6KzZM7hhhDN9u_k2cUJ3tLPOQykiEFN0cs972VPxjx8",
    description: "Suka capybara dan PEDROOOO",
    descriptionEN: "Loves capybara and PEDROOOO",
  },
  {
    name: "Maxell Nathanael",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHyMn9kKPnIzg/profile-displayphoto-shrink_400_400/0/1692976709581?e=1720656000&v=beta&t=iFF21USgB7FCM84udae1A763wrg-VKabEebJ8hhyuzg",
    description: "Expert dalam strategi militer",
    descriptionEN: "Have expertises in military strategies",
  },
  {
    name: "Haikal Ibrahim Faturahman",
    image:
      "https://media.licdn.com/dms/image/D5603AQF_k-PO1B2trA/profile-displayphoto-shrink_400_400/0/1715188632976?e=1720656000&v=beta&t=20JoJzrYwDPqmRFYHtfsPLZE5FMtTDVb-FjsuSNxshU",
    description: "Seorang pilot profesional dengan ribuan jam terbang",
    descriptionEN: "A professional pilot with thousands of flying hours"
  },
];

function About({language, onLanguageChange}) {
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
      <h2 className="h2-custom"><strong>{language==="id"?"Tentang Kami" : "About Us"}</strong></h2>
      <p className="p-custom">
        {language === "id" ? 
        "Inilah profil kami, mahasiswa Informatika Universitas Multimedia Nusantara. Dari kelompok 5 Kelas B, Mata Kuliah Intro to Internet Technology (PTI). Membuat Web berbasis ReactJS dan API."
          : 
        "Here is our profile, students of Informatics at Multimedia Nusantara University. From Group 5, Class B, Intro to Internet Technology (PTI) course. Creating a web based on ReactJS and API."
        }
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
                  <Card.Text>{language === "id" ? member.description : member.descriptionEN}</Card.Text>
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
