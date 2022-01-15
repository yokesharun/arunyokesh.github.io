import React from "react";

import { Menu } from "antd";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Menu mode="horizontal" id="top-menu" theme="dark">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="two">
        <Link to="/skills">Skills</Link>
      </Menu.Item>
      <Menu.Item key="three">
        <Link to="/projects">Projects</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
