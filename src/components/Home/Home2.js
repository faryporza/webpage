import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              นี่คือการ <span className="purple"> แนะนำ </span> ตัวเอง
            </h1>
            <p className="home-about-body">
            สวัสดีครับ! ผมชื่อนายธนกฤต ชูเชิด
              <br />
              <br />ผมมีพื้นฐานในภาษาโปรแกรมอย่าง
              <i>
                <b className="purple"> PHP, Javascript and Node.js </b>
              </i>
              <br />
              <br />
              ผมเริ่มต้นเส้นทางสายโปรแกรมมิ่งด้วยความหลงใหลในเทคโนโลยีและการสร้างสรรค์สิ่งใหม่ๆ &nbsp;
              <i>
                <b className="purple"> จุดเริ่มต้นของผมก็คือด้วยความที่ผมเป็นเด็กห้องท้ายและได้มีโอกาสได้เรียนวิชาเขียนโค้ดด้วยภาษา python  </b> และจุดนั้นจึงทำให้ผมรู้ตัวเอง และชอบในการเขียนโค้ดมาก{" "}
                <b className="purple">

                </b>
              </i>
              <br />
              <br />
              ผมหวังว่าความรู้และประสบการณ์ที่ผมมีจะสามารถสร้างผลงานที่น่าทึ่งและต่อยอดการพัฒนาในสายเทคโนโลยีนี้ต่อไปได้ครับ <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/faryporza"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/farypor"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
