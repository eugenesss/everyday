import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { Col, Row, Form } from "reactstrap";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import Paper from '@material-ui/core/Paper';
// async components
import {
  Async_setting_gen_personalInformation_component,
  Async_setting_gen_companyDetails_component,
  Async_setting_user_users_component,
  Async_setting_user_rolesPermissions_component,
  Async_setting_acc_creditNote_component,
  Async_setting_acc_general_component,
  Async_setting_acc_invoice_component,
  Async_setting_acc_quotation_component,
  Async_setting_cron_leadReminders_component,
  Async_setting_cron_quotationReminders_component,
} from "Components/AsyncComponent/AsyncComponent";
import SettingsDirectory from "Components/Setting/SettingsDirectory"

const styles = theme => ({
  paper: {
    marginBottom: theme.spacing.unit * 2,
  }
});

class Settings extends Component {
  render() {
    const { match, classes } = this.props;
    if (location.pathname === "/app/settings") {
      return <Redirect to={"/app/settings/general/personal-information"} />;
    }
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
        <Row>
        <Col md={3}>
          <Paper className={classes.paper}>
            <SettingsDirectory/>
          </Paper>
        </Col>
          <Col md={9}>
            <Switch>
              {/* ------- General ------- */}
              <Route
                exact
                path={`${match.url}/general/personal-information`}
                component={ Async_setting_gen_personalInformation_component }
              />
              <Route
                exact
                path={`${match.url}/general/company-details`}
                component={ Async_setting_gen_companyDetails_component }
              />
              {/* ------- Roles & Permissions ------- */}
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
              {/* ------- Cron Job ------- */}
              <Route
                exact
                path={`${match.url}/cron-job/lead-reminders`}
                component={ Async_setting_cron_leadReminders_component }
              />
              <Route
                exact
                path={`${match.url}/cron-job/quotation-reminders`}
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
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  connect( null ) (
    withStyles(styles)
    (Settings)
  )
);
