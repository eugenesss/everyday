import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import SettingList from "./components/settingList";

class system_settings extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="saas-dashboard">
        <Helmet>
          <title>Everyday | System Settings</title>
          <meta name="description" content="Everyday System" />
        </Helmet>
        <PageTitleBar
          title="System Settings"
          match={match}
          enableBreadCrumb={false}
        />
        <RctCollapsibleCard customClasses="py-30" fullBlock>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-2">
              <SettingList type="General">
                <NavLink to="/app/settings/" className="bg-white no-arrow">
                  Personal Information
                </NavLink>
<<<<<<< HEAD
                <NavLink to="/app/settings/" className="fs-15 no-arrow">
=======
                <NavLink to="/app/settings/" className="no-arrow">
>>>>>>> 578bc0c661dc68f119cd5a35dd939655f22046f2
                  Company Details
                </NavLink>
              </SettingList>
            </div>
            <div className="col-md-2">
              <SettingList type="User & Controls">
                <NavLink to="/app/settings/user" className="bg-white no-arrow">
                  Users
                </NavLink>
<<<<<<< HEAD
                <NavLink to="/app/settings/" className="fs-15 no-arrow">
=======
                <NavLink to="/app/settings/" className="no-arrow">
>>>>>>> 578bc0c661dc68f119cd5a35dd939655f22046f2
                  Roles & Permissions
                </NavLink>
              </SettingList>
            </div>
            <div className="col-md-2">
              <SettingList type="Accounting">
                <NavLink to="/app/settings/" className="bg-white no-arrow">
                  General
                </NavLink>
<<<<<<< HEAD
                <NavLink to="/app/settings/" className="fs-15 no-arrow">
                  Quotation
                </NavLink>
                <NavLink to="/app/settings/" className="fs-15 no-arrow">
                  Invoice
                </NavLink>
                <NavLink to="/app/settings/" className="fs-15 no-arrow">
=======
                <NavLink to="/app/settings/" className="no-arrow">
                  Quotation
                </NavLink>
                <NavLink to="/app/settings/" className="no-arrow">
                  Invoice
                </NavLink>
                <NavLink to="/app/settings/" className="no-arrow">
>>>>>>> 578bc0c661dc68f119cd5a35dd939655f22046f2
                  Credit Note
                </NavLink>
              </SettingList>
            </div>
            <div className="col-md-2">
              <SettingList type="Cron Job">
                <NavLink to="/app/settings/" className="bg-white no-arrow">
                  Lead Reminders
                </NavLink>
<<<<<<< HEAD
                <NavLink to="/app/settings/" className="fs-15 no-arrow">
=======
                <NavLink to="/app/settings/" className="no-arrow">
>>>>>>> 578bc0c661dc68f119cd5a35dd939655f22046f2
                  Quotation
                </NavLink>
              </SettingList>
            </div>
          </div>
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default system_settings;
