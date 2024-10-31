import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          👋 สวัสดีครับ, ผม ธนกฤต ชูเชิด<br/>
Computer Science | มหาวิทยาลัยพะเยา | รหัสนักศึกษา 66<br/>
📧 ติดต่อได้ที่: tanakit200663@gmail.com<br/>
🧠 กำลังศึกษา: การพัฒนา Web App, Node.js<br/>

            
          </p>
         

          
  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
