import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import {
  Async_acct_quotation_component,
  Async_acct_invoice_component,
  Async_acct_payment_component
} from "Components/AsyncComponent/AsyncComponent";

export default class crmSwitcher extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        {/* ------- /Quotations ------- */}
        <Route
          exact
          path={`${match.url}/quotations`}
          component={Async_acct_quotation_component}
        />

        {/* ------- /Invoice ------- */}
        <Route
          exact
          path={`${match.url}/invoices`}
          component={Async_acct_invoice_component}
        />

        {/* ------- /Payments ------- */}
        <Route
          exact
          path={`${match.url}/payments`}
          component={Async_acct_payment_component}
        />

        {/* ------- /404 ------- */}
        <Redirect to="/404" />
      </Switch>
    );
  }
}
