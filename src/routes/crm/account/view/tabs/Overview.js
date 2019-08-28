import React from "react";
import { connect } from "react-redux";
import BgCard from "Components/Everyday/BgCard";

// Widgets
import Comments from "Components/Widgets/Comments";
import RelatedCustomer from "Components/CRM/Account/RelatedCustomer";

import { addNoteAccount } from "Actions";

function AccountOverviewTab(props) {
  const { acct } = props;
  function addNote(note) {
    props.addNoteAccount(acct.id, note);
  }
  console.log(acct);
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <BgCard>Deals this month</BgCard>
        </div>
        <div className="col">
          <BgCard>Total Spent</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Comments comments={acct.notes} addComment={addNote} />
        </div>
        <div className="col">
          <BgCard>upcoming</BgCard>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <RelatedCustomer customers={acct.customers} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default connect(
  null,
  { addNoteAccount }
)(AccountOverviewTab);
