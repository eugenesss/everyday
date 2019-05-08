/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

// dashboard
export const AsyncHomebaseComponent = Loadable({
  loader: () => import("Routes/homebase"),
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

// crm_new
export const Async_crm_new_lead_component = Loadable({
  loader: () => import("Routes/crm/new/lead"),
  loading: () => <RctPageLoader />
});
export const Async_crm_new_customer_component = Loadable({
  loader: () => import("Routes/crm/new/customer"),
  loading: () => <RctPageLoader />
});
export const Async_crm_new_account_component = Loadable({
  loader: () => import("Routes/crm/new/account"),
  loading: () => <RctPageLoader />
});
export const Async_crm_new_deal_component = Loadable({
  loader: () => import("Routes/crm/new/deal"),
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
export const Async_acct_credit_note_component = Loadable({
  loader: () => import("Routes/accounting/credit_note"),
  loading: () => <RctPageLoader />
});

// accounting management new
export const Async_acct_new_quotation_component = Loadable({
  loader: () => import("Routes/accounting/new/quotation"),
  loading: () => <RctPageLoader />
});
export const Async_acct_new_invoice_component = Loadable({
  loader: () => import("Routes/accounting/new/invoice"),
  loading: () => <RctPageLoader />
});
export const Async_acct_new_credit_note_component = Loadable({
  loader: () => import("Routes/accounting/new/credit_note"),
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

// calendar
export const Async_calendar_component = Loadable({
  loader: () => import("Routes/calendar"),
  loading: () => <RctPageLoader />
})

// settings
export const Async_setting_page_component = Loadable({
  loader: () => import("Routes/setting/setting_page"),
  loading: () => <RctPageLoader />
});
export const Async_setting_user_component = Loadable({
  loader: () => import("Routes/setting/user"),
  loading: () => <RctPageLoader />
});
