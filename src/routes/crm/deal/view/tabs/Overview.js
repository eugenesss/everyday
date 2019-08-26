import React from "react";
import { connect } from "react-redux";
import BgCard from "Components/Everyday/BgCard";
import Comments from "Components/Widgets/Comments";

import { addNoteDeal } from "Actions";

function OverviewTab(props) {
  const { deal } = props;
  function addNote(note) {
    props.addNoteDeal(deal.id, note);
  }
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <BgCard>Deal Stage</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Comments comments={deal.notes} addComment={addNote} />
        </div>
        <div className="col">
          <BgCard>upcoming</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BgCard>history</BgCard>
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(
  null,
  { addNoteDeal }
)(OverviewTab);
