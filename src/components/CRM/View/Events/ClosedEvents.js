import React from "react";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";
import EventsTable from "./EventsTable";

const ClosedEvents = ({ events }) => {
  return (
    <ViewSectionLayout title="Closed Events" bgColorClass="bg-dark">
      <EventsTable tableData={events} />
    </ViewSectionLayout>
  );
};

export default ClosedEvents;
