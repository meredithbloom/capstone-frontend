import React from "react";
import { stack as Menu } from "react-burger-menu";
import '../styles/sidebar.css'
import { Outlet, Link } from "react-router-dom";

export default props => {
  return (
    <Menu {...props}>
      <Link className="menu-item" to="/">
        Home
      </Link>

      <Link className="menu-item" to="/games">
        Disover
      </Link>

      <Link className="menu-item" to="/profile">
        Profile
      </Link>

      <Link className="menu-item" to="/play">
        Play
      </Link>
    </Menu>
  );
};

