import React from "react";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import EventsTable from "./EventsTable";
import AddNewButton from "Components/Everyday/AddNewButton";

const UpcomingEvents = ({ events, handleNewEvent }) => {
  return (
    <ViewSectionLayout title="Upcoming Events" bgColorClass="bg-primary">
      <EventsTable tableData={events} action />
      <AddNewButton handleOnClick={handleNewEvent} label="+ New Event" />
    </ViewSectionLayout>
  );
};

export default UpcomingEvents;
