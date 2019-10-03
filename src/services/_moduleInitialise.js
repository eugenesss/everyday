/**
 * Initialise Modules
 */

import {
  AsyncHomebaseComponent,
  Async_report_component,
  Async_calendar_component
} from "Components/AsyncComponent/AsyncComponent";
import crm from "Routes/crm";
import Accounting from "Routes/accounting";
import Setting from "Routes/setting";

export default [
  {
    path: "homebase",
    component: AsyncHomebaseComponent
  },
  {
    path: "crm",
    component: crm
  },
  {
    path: "acct",
    component: Accounting
  },
  {
    path: "reports",
    component: Async_report_component
  },
  {
    path: "calendar",
    component: Async_calendar_component
  },
  {
    path: "settings",
    component: Setting
  }
];
