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

// project management
export const Async_proj_component = Loadable({
  loader: () => import("Routes/project"),
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
export const Async_setting_user_groups_component = Loadable({
  loader: () => import("Routes/setting/users-and-controls/groups"),
  loading: () => <RctPageLoader />
});
// CRM
export const Async_setting_crm_team_component = Loadable({
  loader: () => import("Routes/setting/crm/team"),
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
  loader: () => import("Routes/setting/reminders/leadReminders"),
  loading: () => <RctPageLoader />
});
export const Async_setting_cron_quotationReminders_component = Loadable({
  loader: () => import("Routes/setting/reminders/quotationReminders"),
  loading: () => <RctPageLoader />
});

//Chat
export const Async_chat_component = Loadable({
  loader: () => import("Routes/chat"),
  loading: () => <RctPageLoader />
});

//User Profile
export const Async_user_profile_component = Loadable({
  loader: () => import("Routes/userProfile/view"),
  loading: () => <RctPageLoader />
});
