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
                <NavLink to="/app/settings/" className="no-arrow">
                  Company Details
                </NavLink>
              </SettingList>
            </div>
            <div className="col-md-2">
              <SettingList type="User & Controls">
                <NavLink to="/app/settings/user" className="bg-white no-arrow">
                  Users
                </NavLink>
                <NavLink to="/app/settings/" className="no-arrow">
                  Roles & Permissions
                </NavLink>
              </SettingList>
            </div>
            <div className="col-md-2">
              <SettingList type="Accounting">
                <NavLink to="/app/settings/" className="bg-white no-arrow">
                  General
                </NavLink>
                <NavLink to="/app/settings/" className="no-arrow">
                  Quotation
                </NavLink>
                <NavLink to="/app/settings/" className="no-arrow">
                  Invoice
                </NavLink>
                <NavLink to="/app/settings/" className="no-arrow">
                  Credit Note
                </NavLink>
              </SettingList>
            </div>
            <div className="col-md-2">
              <SettingList type="Cron Job">
                <NavLink to="/app/settings/" className="bg-white no-arrow">
                  Lead Reminders
                </NavLink>
                <NavLink to="/app/settings/" className="no-arrow">
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
