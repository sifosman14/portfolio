import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';
import { FaArrowDown } from 'react-icons/fa';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi {" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Mohamed Osman</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <div className="arrow-container">
                  <FaArrowDown className="arrow-icon" />
                </div>
              </div>
            </Col>
        
            <Col md={5} style={{ paddingBottom: 0 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home
