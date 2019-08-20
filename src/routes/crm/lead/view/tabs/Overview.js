import React from "react";
import { connect } from "react-redux";
import BgCard from "Components/Everyday/BgCard";
import Comments from "Components/Widgets/Comments";

import { addNoteLead } from "Actions";

function LeadOverviewTab(props) {
  const { lead } = props;

  function addNote(note) {
    props.addNoteLead(lead.id, note);
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <BgCard>Number of follower ups</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Comments comments={lead.notes} addComment={addNote} />
        </div>
        <div className="col-6">
          <BgCard>Number of follow ups</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <BgCard>Number of follow ups</BgCard>
        </div>
      </div>
    </React.Fragment>
  );
}
export default connect(
  null,
  { addNoteLead }
)(LeadOverviewTab);
