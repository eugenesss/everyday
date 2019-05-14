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

// crm_view
export const Async_crm_single_lead = Loadable({
  loader: () => import("Routes/crm/lead/view"),
  loading: () => <RctPageLoader />
});
export const Async_crm_single_customer = Loadable({
  loader: () => import("Routes/crm/customer/view"),
  loading: () => <RctPageLoader />
});
export const Async_crm_single_account = Loadable({
  loader: () => import("Routes/crm/account/view"),
  loading: () => <RctPageLoader />
});
export const Async_crm_single_deal = Loadable({
  loader: () => import("Routes/crm/deal/view"),
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

// accounting management view
export const Async_acct_single_quotation = Loadable({
  loader: () => import("Routes/accounting/quotation/view"),
  loading: () => <RctPageLoader />
});
export const Async_acct_single_invoice = Loadable({
  loader: () => import("Routes/accounting/invoice/view"),
  loading: () => <RctPageLoader />
});
export const Async_acct_single_credit_note = Loadable({
  loader: () => import("Routes/accounting/credit_note/view"),
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
});

// settings
// General
export const Async_setting_gen_companyDetails_component = Loadable({
  loader: () => import("Routes/setting/general/companyDetails"),
  loading: () => <RctPageLoader />
});
export const Async_setting_gen_myProfile_component = Loadable({
  loader: () => import("Routes/setting/general/myProfile"),
  loading: () => <RctPageLoader />
});
// User & Controls
export const Async_setting_user_users_component = Loadable({
  loader: () => import("Routes/setting/users-and-controls/users"),
  loading: () => <RctPageLoader />
});
export const Async_setting_user_rolesPermissions_component = Loadable({
  loader: () =>
    import("Routes/setting/users-and-controls/roles-and-permissions"),
  loading: () => <RctPageLoader />
});
// Accounting
export const Async_setting_acc_creditNote_component = Loadable({
  loader: () => import("Routes/setting/accounting/creditNote"),
  loading: () => <RctPageLoader />
});
export const Async_setting_acc_general_component = Loadable({
  loader: () => import("Routes/setting/accounting/general"),
  loading: () => <RctPageLoader />
});
export const Async_setting_acc_invoice_component = Loadable({
  loader: () => import("Routes/setting/accounting/invoice"),
  loading: () => <RctPageLoader />
});
export const Async_setting_acc_quotation_component = Loadable({
  loader: () => import("Routes/setting/accounting/quotation"),
  loading: () => <RctPageLoader />
});
// Cron Job
export const Async_setting_cron_leadReminders_component = Loadable({
  loader: () => import("Routes/setting/cronJob/LeadReminders"),
  loading: () => <RctPageLoader />
});
export const Async_setting_cron_quotationReminders_component = Loadable({
  loader: () => import("Routes/setting/cronJob/quotationReminders"),
  loading: () => <RctPageLoader />
});
