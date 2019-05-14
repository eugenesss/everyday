import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import {
  Async_acct_quotation_component,
  Async_acct_invoice_component,
  Async_acct_credit_note_component,
  Async_acct_new_quotation_component,
  Async_acct_new_invoice_component,
  Async_acct_new_credit_note_component,
  Async_acct_single_quotation,
  Async_acct_single_invoice,
  Async_acct_single_credit_note
} from "Components/AsyncComponent/AsyncComponent";

export default class crmSwitcher extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="saas-dashboard">
        <Switch>
          {/* ------- /Quotations ------- */}
          <Route
            exact
            path={`${match.url}/quotations`}
            component={Async_acct_quotation_component}
          />
          <Route
            path={`${match.url}/quotations/:id`}
            component={Async_acct_single_quotation}
          />

          {/* ------- /Invoice ------- */}
          <Route
            exact
            path={`${match.url}/invoices`}
            component={Async_acct_invoice_component}
          />
          <Route
            path={`${match.url}/invoices/:id`}
            component={Async_acct_single_invoice}
          />

          {/* ------- /Payments ------- */}
          <Route
            exact
            path={`${match.url}/credit_note`}
            component={Async_acct_credit_note_component}
          />
          <Route
            path={`${match.url}/credit_note/:id`}
            component={Async_acct_single_credit_note}
          />

          {/* ------- /Create ------- */}
          <Route
            path={`${match.url}/new/quotation`}
            component={Async_acct_new_quotation_component}
          />
          <Route
            path={`${match.url}/new/invoice`}
            component={Async_acct_new_invoice_component}
          />
          <Route
            path={`${match.url}/new/credit_note`}
            component={Async_acct_new_credit_note_component}
          />

          {/* ------- /404 ------- */}
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
