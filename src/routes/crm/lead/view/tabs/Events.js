import React from "react";
import BgCard from "Components/Everyday/BgCard";

function LeadEventsTab(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <BgCard>Upcoming Events</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <BgCard>Past Events</BgCard>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LeadEventsTab;
