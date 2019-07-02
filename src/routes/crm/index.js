import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import * as async from "Components/AsyncComponent/CRM";
import * as url from "Helpers/url/crm";

function crmSwitcher() {
  return (
    <div className="saas-dashboard">
      <Switch>
        {/* ------- /Leads ------- */}
        <Route exact path={url.leadPage} component={async.crm_lead_component} />
        <Route path={url.newLead} component={async.crm_new_lead_component} />
        <Route path={url.editLead} component={async.crm_edit_lead} />
        <Route path={url.importLead} component={async.crm_import_lead} />
        <Route path={`${url.leadPage}/:id`} component={async.crm_single_lead} />

        {/* ------- /Customers ------- */}
        <Route
          exact
          path={url.customerPage}
          component={async.crm_customer_component}
        />
        <Route
          path={url.newCustomer}
          component={async.crm_new_customer_component}
        />
        <Route path={url.editCustomer} component={async.crm_edit_customer} />
        <Route
          path={url.importCustomer}
          component={async.crm_import_customer}
        />
        <Route
          path={`${url.customerPage}/:id`}
          component={async.crm_single_customer}
        />

        {/* ------- /Accounts ------- */}
        <Route
          exact
          path={url.accountPage}
          component={async.crm_account_component}
        />
        <Route
          path={url.newAccount}
          component={async.crm_new_account_component}
        />
        <Route path={url.editAccount} component={async.crm_edit_account} />
        <Route path={url.importAccount} component={async.crm_import_account} />
        <Route
          path={`${url.accountPage}/:id`}
          component={async.crm_single_account}
        />

        {/* ------- /Deals ------- */}
        <Route exact path={url.dealPage} component={async.crm_deal_component} />
        <Route path={url.newDeal} component={async.crm_new_deal_component} />
        <Route exact path={url.editDeal} component={async.crm_edit_deal} />
        <Route path={url.importDeal} component={async.crm_import_deal} />
        <Route path={`${url.dealPage}/:id`} component={async.crm_single_deal} />

        {/* ------- /Team ------- */}
        <Route path={url.teamPage} component={async.crm_team_component} />

        {/* ------- /404 ------- */}
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default crmSwitcher;
