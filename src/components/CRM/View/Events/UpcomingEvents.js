import React from "react";
import { EventsLayout, EventsTable } from "Components/CRM/View/Layout/Events";
import NewEventsButton from "./NewEventsButton";

const UpcomingEvents = ({ events, handleNewEvent }) => {
  return (
    <EventsLayout title="Upcoming Events" bgColorClass="bg-primary">
      <EventsTable tableData={events} action />
      <NewEventsButton handleOnClick={handleNewEvent} />
    </EventsLayout>
  );
};

export default UpcomingEvents;
