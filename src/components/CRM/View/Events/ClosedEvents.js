import React from "react";
import { EventsLayout, EventsTable } from "Components/CRM/View/Layout/Events";

const ClosedEvents = ({ events }) => {
  return (
    <EventsLayout title="Closed Events" bgColorClass="bg-dark">
      <EventsTable tableData={events} />
    </EventsLayout>
  );
};

export default ClosedEvents;
