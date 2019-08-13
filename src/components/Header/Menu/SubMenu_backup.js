import React from "react";
import { NavLink } from "react-router-dom";
import IntlMessages from "Util/IntlMessages";

export default function SubMenu(props) {
  const { childRoutes } = props;
  return (
    <div className="sub-menu justify-content-between">
      <ul className="list-unstyled nav">
        {childRoutes.length > 0 &&
          childRoutes.map((link, key) => (
            <li className="nav-item" key={key}>
              <NavLink
                to={link.path}
                className="nav-link"
                activeClassName="active"
              >
                <IntlMessages id={link.title} />
              </NavLink>
            </li>
          ))}
      </ul>
      <div className="action-bar list-inline mb-0" />
    </div>
  );
}
