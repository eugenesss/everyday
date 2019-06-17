import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Col, Row, Form } from "reactstrap";


import { withRouter } from "react-router-dom";

import { Helmet } from "react-helmet";
// async components
import {
  Async_setting_gen_myProfile_component,
  Async_setting_gen_companyDetails_component,
  Async_setting_user_users_component,
  Async_setting_user_rolesPermissions_component,
  Async_setting_user_groups_component,
  Async_setting_acc_creditNote_component,
  Async_setting_acc_general_component,
  Async_setting_acc_invoice_component,
  Async_setting_acc_quotation_component,
  Async_setting_cron_leadReminders_component,
  Async_setting_cron_quotationReminders_component,
} from "Components/AsyncComponent/AsyncComponent";
import SettingsDirectory from "Components/Setting/SettingsDirectory"

import { getAllUsers, getAllRoles, getAllGroups } from "Actions"

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  displayBlock: {
    display: "block"
  },
});

class Settings extends Component {
  componentWillMount() {
    this.props.getAllUsers();
    this.props.getAllRoles();
    this.props.getAllGroups();
  }

  render() {
    const { match, classes } = this.props;
    if (location.pathname === "/app/settings") {
      return <Redirect to={"/app/settings/general/my-profile"} />;
    }
    return (
      <div className="saas-dashboard">
        <Helmet>
          <title>Everyday | System Settings</title>
          <meta name="description" content="Everyday System" />
        </Helmet>
        <Row>
          <Col md={2} className={classes.displayBlock}>
            <SettingsDirectory/>
          </Col>
          <Col md={10} className={classes.displayBlock}>
            <Switch>
              {/* ------- General ------- */}
              <Route
                exact
                path={`${match.url}/general/my-profile`}
                component={ Async_setting_gen_myProfile_component }
              />
              <Route
                exact
                path={`${match.url}/general/company-details`}
                component={ Async_setting_gen_companyDetails_component }
              />
              {/* ------- Users and Controls ------- */}
              <Route
                exact
                path={`${match.url}/users-and-controls/users`}
                component={ Async_setting_user_users_component }
              />
              <Route
                exact
                path={`${match.url}/users-and-controls/roles-and-permissions`}
                component={ Async_setting_user_rolesPermissions_component }
              />
              <Route
                exact
                path={`${match.url}/users-and-controls/groups`}
                component= { Async_setting_user_groups_component }
              />
              {/* ------- Accounting ------- */}
              <Route
                exact
                path={`${match.url}/accounting/credit-note`}
                component={ Async_setting_acc_creditNote_component }
              />
              <Route
                exact
                path={`${match.url}/accounting/general`}
                component={ Async_setting_acc_general_component }
              />
              <Route
                exact
                path={`${match.url}/accounting/invoice`}
                component={ Async_setting_acc_invoice_component }
              />
              <Route
                exact
                path={`${match.url}/accounting/quotation`}
                component={ Async_setting_acc_quotation_component }
              />
              {/* ------- Reminders ------- */}
              <Route
                exact
                path={`${match.url}/reminders/lead-reminders`}
                component={ Async_setting_cron_leadReminders_component }
              />
              <Route
                exact
                path={`${match.url}/reminders/quotation-reminders`}
                component={ Async_setting_cron_quotationReminders_component }
              />
              {/* ------- /404 ------- */}
              <Redirect to="/404" />
            </Switch>
          </Col>
        </Row>
      </div>
    );
  }
}

Settings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect( null, { getAllUsers, getAllRoles, getAllGroups } )
  (withStyles(styles)(Settings))
);
