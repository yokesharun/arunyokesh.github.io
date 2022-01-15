import React from "react";

import { Menu } from "antd";

const BottomNav = () => {
  return (
    <Menu mode="horizontal" id="bottom-menu" theme="dark">
      <Menu.Item key="github">
        <a
          href="https://github.com/yokesharun"
          target="_blank"
          rel="noreferrer"
          className="external-links"
        >
          <ion-icon name="logo-github" size="large"></ion-icon>
        </a>
      </Menu.Item>
      <Menu.Item key="linkedin">
        <a
          href="https://www.linkedin.com/in/arunyokesh/"
          target="_blank"
          rel="noreferrer"
          className="external-links"
        >
          <ion-icon name="logo-linkedin" size="large"></ion-icon>
        </a>
      </Menu.Item>
      <Menu.Item key="stackoverflow">
        <a
          href="https://stackoverflow.com/users/4270123/arun-yokesh"
          target="_blank"
          rel="noreferrer"
          className="external-links"
        >
          <ion-icon name="logo-stackoverflow" size="large"></ion-icon>
        </a>
      </Menu.Item>
      <Menu.Item key="youtube">
        <a
          href="https://www.youtube.com/channel/UCOxXtnAYx2cSadyK1zSqomw"
          target="_blank"
          rel="noreferrer"
          className="external-links"
        >
          <ion-icon name="logo-youtube" size="large"></ion-icon>
        </a>
      </Menu.Item>
      <Menu.Item key="medium">
        <a
          href="https://arunyokesh.medium.com/"
          target="_blank"
          rel="noreferrer"
          className="external-links"
        >
          <ion-icon name="logo-medium" size="large"></ion-icon>
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default BottomNav;
