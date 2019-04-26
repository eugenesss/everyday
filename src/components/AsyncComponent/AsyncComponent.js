/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

// dashboard
export const AsyncDashboardComponent = Loadable({
  loader: () => import("Routes/dashboard"),
  loading: () => <RctPageLoader />
});

// crm
export const Async_crm_lead_component = Loadable({
  loader: () => import("Routes/crm/lead"),
  loading: () => <RctPageLoader />
});
export const Async_crm_customer_component = Loadable({
  loader: () => import("Routes/crm/customer"),
  loading: () => <RctPageLoader />
});
export const Async_crm_account_component = Loadable({
  loader: () => import("Routes/crm/account"),
  loading: () => <RctPageLoader />
});
export const Async_crm_deal_component = Loadable({
  loader: () => import("Routes/crm/deal"),
  loading: () => <RctPageLoader />
});

// project management
export const Async_proj_component = Loadable({
  loader: () => import("Routes/project"),
  loading: () => <RctPageLoader />
});

// accounting management
export const Async_acct_quotation_component = Loadable({
  loader: () => import("Routes/accounting/quotation"),
  loading: () => <RctPageLoader />
});
export const Async_acct_invoice_component = Loadable({
  loader: () => import("Routes/accounting/invoice"),
  loading: () => <RctPageLoader />
});
export const Async_acct_payment_component = Loadable({
  loader: () => import("Routes/accounting/payment"),
  loading: () => <RctPageLoader />
});

// report
export const Async_report_component = Loadable({
  loader: () => import("Routes/report"),
  loading: () => <RctPageLoader />
});

// task
export const Async_task_component = Loadable({
  loader: () => import("Routes/task"),
  loading: () => <RctPageLoader />
});

// reminder
export const Async_reminder_component = Loadable({
  loader: () => import("Routes/reminder"),
  loading: () => <RctPageLoader />
});

// settings
export const Async_setting_page_component = Loadable({
  loader: () => import("Routes/setting/setting_page"),
  loading: () => <RctPageLoader />
});
export const Async_setting_user_component = Loadable({
  loader: () => import("Routes/setting/user"),
  loading: () => <RctPageLoader />
});
