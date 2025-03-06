import React from 'react';
import "./NavItem.css";

const NavItem = ({ nav }) => {
  return (
    <div className="nav-items">
      {nav.map((el, ind) => (
        <div className="nav-item" key={ind}>
          <a href="">{el}</a>
        </div>
      ))}
    </div>
  );
};

export default NavItem;
