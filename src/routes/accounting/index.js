import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import * as async from "Components/AsyncComponent/Accounting";
import * as url from "Helpers/url/accounting";

function acctSwitcher() {
  return (
    <div className="saas-dashboard">
      <Switch>
        {/* ------- /Quotations ------- */}
        <Route
          exact
          path={url.quotePage}
          component={async.acct_quotation_component}
        />
        <Route
          path={url.newQuote}
          component={async.acct_new_quotation_component}
        />
        <Route path={`${url.quotePage}/:id`} component={async.view_quotation} />

        {/* ------- /Invoice ------- */}
        <Route
          exact
          path={url.invoicePage}
          component={async.acct_invoice_component}
        />
        <Route
          path={url.newInvoice}
          component={async.acct_new_invoice_component}
        />
        <Route path={`${url.invoicePage}/:id`} component={async.view_invoice} />

        {/* ------- /Credit_Note ------- */}
        <Route
          exact
          path={url.crednotePage}
          component={async.acct_credit_note_component}
        />
        <Route
          path={url.newCredNote}
          component={async.acct_new_credit_note_component}
        />
        <Route
          path={`${url.crednotePage}/:id`}
          component={async.view_credit_note}
        />

        {/* ------- /Payment ------- */}
        <Route
          exact
          path={url.paymentPage}
          component={async.acct_payment_component}
        />
        <Route
          path={url.newPayment}
          component={async.acct_new_payment_component}
        />
        <Route path={`${url.paymentPage}/:id`} component={async.view_payment} />

        {/* ------- /404 ------- */}
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default acctSwitcher;
