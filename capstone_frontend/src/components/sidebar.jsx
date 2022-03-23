import React from "react";
import { stack as Menu } from "react-burger-menu";
import '../styles/sidebar.css'

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/burgers">
        Disover
      </a>

      <a className="menu-item" href="/pizzas">
        Profile
      </a>

      <a className="menu-item" href="/desserts">
        Play
      </a>
    </Menu>
  );
};

