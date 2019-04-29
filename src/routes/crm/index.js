import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import {
  Async_crm_lead_component,
  Async_crm_customer_component,
  Async_crm_account_component,
  Async_crm_deal_component,
  Async_crm_new_lead_component,
  Async_crm_new_customer_component,
  Async_crm_new_account_component,
  Async_crm_new_deal_component
} from "Components/AsyncComponent/AsyncComponent";

export default class crmSwitcher extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="saas-dashboard">
        <Switch>
          {/* ------- /Leads ------- */}
          <Route
            exact
            path={`${match.url}/leads`}
            component={Async_crm_lead_component}
          />

          {/* ------- /Customers ------- */}
          <Route
            exact
            path={`${match.url}/customers`}
            component={Async_crm_customer_component}
          />

          {/* ------- /Accounts ------- */}
          <Route
            exact
            path={`${match.url}/accounts`}
            component={Async_crm_account_component}
          />

          {/* ------- /Deals ------- */}
          <Route
            exact
            path={`${match.url}/deals`}
            component={Async_crm_deal_component}
          />

          {/* ------- /Create ------- */}
          <Route
            path={`${match.url}/new/lead`}
            component={Async_crm_new_lead_component}
          />
          <Route
            path={`${match.url}/new/customer`}
            component={Async_crm_new_customer_component}
          />
          <Route
            path={`${match.url}/new/account`}
            component={Async_crm_new_account_component}
          />
          <Route
            path={`${match.url}/new/deal`}
            component={Async_crm_new_deal_component}
          />

          {/* ------- /404 ------- */}
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
