import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="AllyCiv"
              description="

              I developed a custom website for AllyCiv, an engineering firm specializing in water, to showcase their services and projects. After meeting with the team to gather their requirements, I created a mockup design that was approved before proceeding with the full website development. The website includes a stunning water animation and a user-friendly FAQ section with accordions, and is fully responsive across all devices. A custom contact form was created for visitors to easily reach out to the firm and all necessary qualifications and recent projects are displayed in an easy-to-read way. The website effectively represents the firm's services and capabilities and is sure to attract potential clients."
              ghLink="https://www.allyciv.co.za"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Transport Action Group"
              description="The Transport Action Group (TAG) needed a website to accompany their published book on CO2 emissions for the transport industry. The website required membership for users to access digital tools for CO2 emissions calculations and assistance. The website would be linked with the book through QR codes and would have an easy-to-use interface for users to view their carbon footprint and track their progress. It would also include a news section, blog section, and security measures to protect user privacy. Furthermore, the website would have a user-friendly dashboard that displays the user's progress in reducing their carbon footprint, along with suggestions on how to further reduce it.
              "
              ghLink="https://transportactiongroup.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Wholesale E‑Commerce"
              description="Allifas Spice Wholesalers required a web portal for their wholesale business, which allowed customers to place orders and view pricing based on their order quantity or customer tier. A secure login system ensured customer privacy, while a PWA app was created for Android devices. Push notifications were used to advertise promotions, increasing customer engagement. The portal and app provided a user-friendly platform, streamlining the ordering process and driving sales. Moreover, the web portal included a real-time inventory management system that allowed customers to view stock availability for each product. The PWA app was optimized for mobile devices, enabling customers to easily place orders on-the-go."
              ghLink="https://factory.allifas.co.za"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Retail Ecommerce"
              description="As the developer of Luxury Lingerie's e-commerce website, I created a modern and user-friendly design that offers a seamless shopping experience. The site features Instagram product tagging, allowing the owners to tag products in their posts, and abandoned cart recovery, which reduces cart abandonment rates. Other standard e-commerce features, such as adding to cart and secure payment gateways, are also included. Overall, the Luxury Lingerie website is a one-stop-shop for all women's sleepwear and lingerie needs, offering a hassle-free shopping experience."
              ghLink="https://luxurylingerie.co.za"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects