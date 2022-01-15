import React from "react";

import { Row, Col, Card } from "antd";

const Projects = () => {
  return (
    <>
      <div className="parallex-container">
        <h1 className="heading">Github Projects</h1>
        <Row>
          <Col span={24}>
            <Card
              title={
                <h3 className="project-heading">
                  Remallow - NPM Package manager
                </h3>
              }
              className="card"
              style={{ "margin-right": "10px" }}
            >
              <p>GUI tool for React / NPM Package manager</p>
              <p>
                Its a simple graphical user interface tool for manage your
                package.json or npm package. You can search, install and delete
                your npm packages without terminal commands.
              </p>
              <p>Technologies Used: React JS, Node JS, npm, webpack, babel</p>
              <h4>Github:</h4>
              <p>
                <a
                  href="https://github.com/yokesharun/remallow"
                  className="project-link"
                >
                  https://github.com/yokesharun/remallow{" "}
                </a>
              </p>
              <h4>NPM Package:</h4>
              <p>
                <a
                  href="https://www.npmjs.com/package/remallow"
                  className="project-link"
                >
                  https://www.npmjs.com/package/remallow{" "}
                </a>
              </p>
            </Card>
          </Col>
          <Col span={24}>
            <Card
              title={
                <h3 className="project-heading">
                  Linora - Share links between computer & phone
                </h3>
              }
              className="card"
              style={{ "margin-right": "10px" }}
            >
              <p>
                Worked on Chrome Extension Development and Firebase Integration
              </p>
              <p>
                Technologies Used: Javascript, HTML, CSS, Chrome Extension
                Development Tools
              </p>
              <h4>Chrome Extension:</h4>
              <p>
                <a
                  href="https://chrome.google.com/webstore/detail/linora-share-links-from-c/lgjialkebobgcbdbkafjmcgfeelclcpb"
                  className="project-link"
                >
                  https://chrome.google.com/webstore/detail/linora-share-links-from-c/lgjialkebobgcbdbkafjmcgfeelclcpb{" "}
                </a>
              </p>
              <h4>Android App:</h4>
              <p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.amp.passlink"
                  className="project-link"
                >
                  https://play.google.com/store/apps/details?id=com.amp.passlink{" "}
                </a>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Projects;
