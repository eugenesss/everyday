import React from "react";
import { connect } from "react-redux";
import BgCard from "Components/Everyday/BgCard";
import Comments from "Components/Widgets/Comments";

import { addNoteCustomer } from "Actions";

function OverviewTab(props) {
  const { cust } = props;
  function addNote(note) {
    props.addNoteCustomer(cust.id, note);
  }
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <BgCard>Number of deals</BgCard>
        </div>
        <div className="col">
          <BgCard>Total Spent</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Comments comments={cust.notes} addComment={addNote} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(
  null,
  { addNoteCustomer }
)(OverviewTab);
