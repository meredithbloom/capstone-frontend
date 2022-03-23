import React from "react";
import { stack as Menu } from "react-burger-menu";
import '../styles/sidebar.css'

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/">
        Disover
      </a>

      <a className="menu-item" href="/profile">
        Profile
      </a>

      <a className="menu-item" href="/">
        Play
      </a>
    </Menu>
  );
};

