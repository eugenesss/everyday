import React from "react";
import BgCard from "Components/Everyday/BgCard";
import EventsTable from "Components/CRM/View/Events/EventsTable";

function LeadEventsTab(props) {
  const { lead } = props;
  const { pastEvents, upcomingEvents } = lead;
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

export default LeadEventsTab;
