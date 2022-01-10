import React from "react";

import { Menu } from 'antd';

const Nav = () => {
    return <Menu mode="horizontal" id="top-menu" theme="dark">
    <Menu.Item key="one">
      About me
    </Menu.Item>
    <Menu.Item key="two">
      Skills
    </Menu.Item>
    <Menu.Item key="three">
      Github Projects
    </Menu.Item>
    <Menu.Item key="four">
      Connect with me
    </Menu.Item>
  </Menu>
}

export default Nav;