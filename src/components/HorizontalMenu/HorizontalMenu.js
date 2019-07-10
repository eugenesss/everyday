/**
 * Horizontal Menu
 */
import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import navLinks from "./NavLinks";
import NavMenuItem from "./NavMenuItem";

class HorizontalMenu extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="horizontal-menu">
        <ul className="list-unstyled nav">
          <li className="nav-item">
            <NavLink
              to="/app/homebase/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-home text-success" />
              Homebase
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/app/calendar/"
              className="nav-link no-arrow"
              activeClassName="active"
            >
              <i className="zmdi zmdi-calendar text-warning" />
              Calendar
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="javascript:void(0);"
              className={
                "nav-link " +
                (location.pathname.includes("/app/crm/") ? "active" : "")
              }
            >
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
            <a
              href="javascript:void(0);"
              className={
                "nav-link " +
                (location.pathname.includes("/app/acct/") ? "active" : "")
              }
            >
              <i className="zmdi zmdi-money text-everyday" />
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
        </ul>
      </div>
    );
  }
}

export default withRouter(HorizontalMenu);
