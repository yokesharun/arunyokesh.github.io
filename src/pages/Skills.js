import React from "react";

import { Row, Col, Progress } from "antd";

const Skills = () => {
  return (
    <>
      <div className="parallex-container">
        <h1 className="heading">Technical Skills</h1>
        <Row>
          <Col span={12}>
            <div className="skill-container">
              <h3>JavaScript</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={90}
                showInfo={false}
              />
              <h3>React JS</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={90}
                showInfo={false}
              />
              <h3>GraphQL</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={70}
                showInfo={false}
              />
              <h3>JS Unit Testing - JEST, Enzyme & Intern</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={90}
                showInfo={false}
              />
              <h3>Redux</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={90}
                showInfo={false}
              />
              <h3>Blender 3D</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={70}
                showInfo={false}
              />
            </div>
          </Col>
          <Col span={12}>
            <div className="skill-container">
              <h3>Payment Integration</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={90}
                showInfo={false}
              />
              <h3>Version Control - GIT</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={80}
                showInfo={false}
              />
              <h3>Codeigniter Framework</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={70}
                showInfo={false}
              />
              <h3>Laravel Framework</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={90}
                showInfo={false}
              />
              <h3>Chrome Extension Development</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={70}
                showInfo={false}
              />
              <h3>PHP</h3>
              <Progress
                strokeColor={{
                  "0%": "#2D46B9",
                  "50%": "#2D46B9",
                  "100%": "#F037A5",
                }}
                percent={90}
                showInfo={false}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Skills;
