// routes
import {
  AsyncDashboardComponent,
  Async_proj_component,
  Async_report_component,
  Async_task_component,
  Async_reminder_component
} from "Components/AsyncComponent/AsyncComponent";
import Crm from "Routes/crm";
import Accounting from "Routes/accounting";
import Setting from "Routes/setting";

export default [
  {
    path: "dashboard",
    component: AsyncDashboardComponent
  },
  {
    path: "crm",
    component: Crm
  },
  {
    path: "proj",
    component: Async_proj_component
  },
  {
    path: "acct",
    component: Accounting
  },
  {
    path: "report",
    component: Async_report_component
  },
  {
    path: "task",
    component: Async_task_component
  },
  {
    path: "reminder",
    component: Async_reminder_component
  },
  {
    path: "settings",
    component: Setting
  }
];
