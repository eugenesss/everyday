import React from "react";
import BgCard from "Components/Everyday/BgCard";
import EventsTable from "Components/CRM/View/Events/EventsTable";

function crm_events_tab(props) {
  const { pastEvents, upcomingEvents } = props;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <BgCard fullBlock>
            <EventsTable title="Upcoming Events" tableData={upcomingEvents} />
          </BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <BgCard fullBlock>
            <EventsTable title="Past Events" tableData={pastEvents} />
          </BgCard>
        </div>
      </div>
    </React.Fragment>
  );
}

export default crm_events_tab;
