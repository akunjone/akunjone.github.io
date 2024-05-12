import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./jateng.png";
import {
  FaHome,
  FaCameraRetro,
  FaBookOpen,
  FaBookReader,
  FaPeopleArrows,
} from "react-icons/fa";
import "./styles.css";

function MenuNavbar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleRoute = (path) => {
    navigate(path);
  };

  return (
    <Navbar
      style={{ backgroundColor: "white" }}
      expand="lg"
      className="navbar-custom"
    >
      <Container>
        <Navbar.Brand onClick={handleHomeClick} style={{ cursor: "pointer" }}>
          <img
            src={logo}
            width="100px"
            className="d-inline-block align-top"
            alt="Central Java"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              onClick={() => handleRoute("/")}
              style={{ color: "black" }}
            >
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link
              onClick={() => handleRoute("/destinations")}
              style={{ color: "black" }}
            >
              <FaCameraRetro /> Destinations
            </Nav.Link>
            <Nav.Link
              onClick={() => handleRoute("/history")}
              style={{ color: "black" }}
            >
              <FaBookOpen /> History
            </Nav.Link>
            <Nav.Link
              onClick={() => handleRoute("/folklores")}
              style={{ color: "black" }}
            >
              <FaBookReader /> Folklores
            </Nav.Link>
            <Nav.Link
              onClick={() => handleRoute("/aboutus")}
              style={{ color: "black" }}
            >
              <FaPeopleArrows /> About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavbar;
