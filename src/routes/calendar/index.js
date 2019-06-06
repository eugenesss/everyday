import React from "react";
import { Helmet } from "react-helmet";

import CalendarLayout from "Components/Calendar/CalendarLayout";

const Calendar = () => {
  return (
    <div className={"saas-dashboard"}>
      <Helmet>
        <title>Everyday | Calendar</title>
        <meta name="description" content="Everyday System" />
      </Helmet>
      <CalendarLayout />
    </div>
  );
};

export default Calendar;
