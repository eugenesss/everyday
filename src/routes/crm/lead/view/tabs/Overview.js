import React from "react";
import { connect } from "react-redux";
import BgCard from "Components/Everyday/BgCard";

// Comments Widget
import Comments from "Components/Widgets/Comments";

// upcoming events (temp)
import ShowUpcoming from "Components/CRM/View/Events/ShowUpcoming";

import { addNoteLead } from "Actions";

function LeadOverviewTab(props) {
  const { lead } = props;

  function addNote(note) {
    props.addNoteLead(lead.id, note);
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-6">
          <Comments comments={lead.notes} addComment={addNote} />
        </div>
        <div className="col-6">
          <BgCard heading="Upcoming Events">
            <ShowUpcoming events={lead.events} />
          </BgCard>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect(
  null,
  { addNoteLead }
)(LeadOverviewTab);
