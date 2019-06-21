import React from "react";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import EventsTable from "./EventsTable";
import NewEventsButton from "./NewEventsButton";

const UpcomingEvents = ({ events, handleNewEvent }) => {
  return (
    <ViewSectionLayout title="Upcoming Events" bgColorClass="bg-primary">
      <EventsTable tableData={events} action />
      <NewEventsButton handleOnClick={handleNewEvent} />
    </ViewSectionLayout>
  );
};

export default UpcomingEvents;
