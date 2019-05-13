/**
 * Horizontal Menu
 */
import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";

import NavMenuItem from "./NavMenuItem";

class HorizontalMenu extends Component {
  render() {
    return (
      <div className="horizontal-menu">
        <ul className="list-unstyled nav">
          <li className="nav-item">
            <NavLink
              to="/app/homebase/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-home text-danger" />
              Homebase
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/app/calendar/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-calendar text-secondary" />
              Calendar
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/app/reminders/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-notifications-none text-warning" />
              Reminders
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              to="/app/proj/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-roller" />
              Project Management
            </NavLink>
    </li> */}
          <li className="nav-item">
            <a href="javascript:void(0);" className="nav-link">
              <i className="zmdi zmdi-group-work text-primary" />
              <span className="menu-title">CRM</span>
            </a>
            <ul className="list-unstyled sub-menu">
              {navLinks.crm.map((menu, key) => (
                <NavMenuItem menu={menu} key={key} />
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0);" className="nav-link">
              <i className="zmdi zmdi-money text-success" />
              <span className="menu-title">Accounting</span>
            </a>
            <ul className="list-unstyled sub-menu">
              {navLinks.account.map((menu, key) => (
                <NavMenuItem menu={menu} key={key} />
              ))}
            </ul>
          </li>
          <li className="nav-item">
            <NavLink
              to="/app/reports/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-chart text-info" />
              Reports
            </NavLink>
          </li>

          {/* <li className="nav-item">
            <NavLink
              to="/app/tasks/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-assignment-o" />
              Tasks
            </NavLink>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default HorizontalMenu;
