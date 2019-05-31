import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import {
  Async_acct_quotation_component,
  Async_acct_invoice_component,
  Async_acct_credit_note_component,
  Async_acct_payment_component,
  Async_acct_new_quotation_component,
  Async_acct_new_invoice_component,
  Async_acct_new_credit_note_component,
  Async_acct_new_payment_component,
  Async_view_quotation,
  Async_view_invoice,
  Async_view_credit_note,
  Async_view_payment
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
            component={Async_view_quotation}
          />

          {/* ------- /Invoice ------- */}
          <Route
            exact
            path={`${match.url}/invoices`}
            component={Async_acct_invoice_component}
          />
          <Route
            path={`${match.url}/invoices/:id`}
            component={Async_view_invoice}
          />

          {/* ------- /Credit_Note ------- */}
          <Route
            exact
            path={`${match.url}/credit_note`}
            component={Async_acct_credit_note_component}
          />
          <Route
            path={`${match.url}/credit_note/:id`}
            component={Async_view_credit_note}
          />

          {/* ------- /Payment ------- */}
          <Route
            exact
            path={`${match.url}/payment`}
            component={Async_acct_payment_component}
          />
          <Route
            path={`${match.url}/payment/:id`}
            component={Async_view_payment}
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
          <Route
            path={`${match.url}/new/payment`}
            component={Async_acct_new_payment_component}
          />

          {/* ------- /404 ------- */}
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
