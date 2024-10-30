import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import image from "../../Assets/Projects/image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          ผลงาน <strong className="purple">ที่ทำเล่นๆ </strong>
        </h1>
        <p style={{ color: "white" }}>
        นี่คือตัวอย่างโปรเจกต์ที่ผมทำเมื่อเร็วๆ นี้
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="ระบบเช็คการเก็บเงิน"
              description="ระบบนี้นำมาช่วยเช็คสลิปที่คนในกลุ่มส่งมาโดยที่เราสามารถเช็คได้เลยและคนที่จ่ายด้วยสามารถเห็นได้ด้วยเช่นกัน"
              ghLink="https://github.com/faryporza/payslip.git"
              demoLink=""
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
