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

//Chat
export const Async_chat_component = Loadable({
  loader: () => import("Routes/chat"),
  loading: () => <RctPageLoader />
});
