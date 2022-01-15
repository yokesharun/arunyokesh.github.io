import React from "react";

import avatar from "../assets/arun-yokesh-avatar.png";
import { Row, Col } from "antd";

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const About = () => {
  return (
    <>
      <div className="parallex-container">
        <Row>
          <Col span={8}>
            <img className="avatar" src={avatar} alt="Arun Yokesh Avatar" />
          </Col>
          <Col span={16}>
            <h1 className="heading">About me</h1>
            <p className="content">
              I'm Arun Yokesh, a {getAge("04-01-1993")} year old developer,
              Traveller, YouTuber and a 3D Modeler living in Bangalore, India. I
              am a Computer Science Engineer, currently working with awesome
              folks at Intuit as a Senior FrontEnd Developer.
            </p>
            <p className="content">
              Having 7+ years of experience in the IT Industry both as a
              Frontend and Backend Developer and worked on 50+ Projects.
            </p>
            <p className="content">
              I have started my career as a PHP developer in 2014 and Developed
              my skills towards JavaScript, React JS, Laravel and CodeIgniter. In 2017 we
              have started a knowledge base SaaS Product called{" "}
              <a
                href="https://helptier.com/"
                target="_blank"
                className="external-link"
              >
                Helptier
              </a>{" "}
              which helps companies to build their product help center.
            </p>
            <p className="content">Email: ayokesh.cse@gmail.com</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
