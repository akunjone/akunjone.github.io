import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./jateng.png";
import { FaHome, FaCameraRetro, FaBookOpen, FaBookReader, FaPeopleArrows } from "react-icons/fa";
import "./styles.css";

function MenuNavbar({ onLanguageChange, language }) {
  const navigate = useNavigate();

  const handleLanguageChange = (selectedLanguage) => {
    onLanguageChange(selectedLanguage);
  };

  const handleRoute = (path) => {
    const paths = {
      en: {
        "/": "/",
        "/destinations": "/destinations",
        "/history": "/history",
        "/folklores": "/folklores",
        "/aboutus": "/aboutus"
      },
      id: {
        "/": "/",
        "/destinations": "/destinasi",
        "/history": "/sejarah",
        "/folklores": "/cerita-rakyat",
        "/aboutus": "/tentang-kami"
      }
    };
    navigate(paths[language][path]);
  };

  return (
    <Navbar
      style={{ backgroundColor: "white" }}
      expand="lg"
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand onClick={() => handleRoute("/")} style={{ cursor: "pointer" }}>
          <img
            src={logo}
            width="100px"
            className="d-inline-block align-top"
            alt="Central Java"
          />
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Item onClick={() => handleLanguageChange("en")} style={{ cursor: "pointer" }}>
            <img src="https://lh3.googleusercontent.com/d/1x3NKU4rdQguAVmxoFhmGOu9_6VD2ldtM" alt="English" width="30" />
          </Nav.Item>
          <Nav.Item onClick={() => handleLanguageChange("id")} style={{ cursor: "pointer" }}>
            <img src="https://lh3.googleusercontent.com/d/1X6N-8IrpcjRpJ9wF6FIZlumNkWJJpjQc" alt="Indonesia" width="30" />
          </Nav.Item>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => handleRoute("/")} style={{ color: "black" }}>
              <FaHome /> {language === "id" ? "Beranda" : "Home"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/destinations")} style={{ color: "black" }}>
              <FaCameraRetro /> {language === "id" ? "Destinasi" : "Destinations"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/history")} style={{ color: "black" }}>
              <FaBookOpen /> {language === "id" ? "Sejarah" : "History"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/folklores")} style={{ color: "black" }}>
              <FaBookReader /> {language === "id" ? "Cerita Rakyat" : "Folklores"}
            </Nav.Link>
            <Nav.Link onClick={() => handleRoute("/aboutus")} style={{ color: "black" }}>
              <FaPeopleArrows /> {language === "id" ? "Tentang Kami" : "About Us"}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;
