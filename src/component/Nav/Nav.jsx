
import React from 'react';
import NavItem from "./NavItem/NavItem";
import "./Nav.css";

const Nav = ({ nav }) => {
  return (
    <nav>
      <div className="container">
          <h1>Anoi xanut</h1>
          
        <NavItem nav={nav} />

        <div className="nav-search">
          <input type="text" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
