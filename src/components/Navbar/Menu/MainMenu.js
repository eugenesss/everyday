import React from "react";
import { NavLink } from "react-router-dom";

function MainMenu(props) {
  const { location, navLinks } = props;
  return (
    <div className="horizontal-menu">
      <ul className="list-unstyled nav">
        {navLinks.map((link, key) => (
          <li key={key} className="nav-item">
            <NavLink
              to={link.url}
              className={
                "nav-link " +
                (location.pathname.includes(link.baseUrl) ? "active" : "")
              }
            >
              <span className="menu-title">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainMenu;
