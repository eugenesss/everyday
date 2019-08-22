import React from "react";
import DealList from "Components/CRM/Deal/DealList";

function DealsTab(props) {
  const { deals } = props;

  return (
    <div className="row">
      <div className="col">
        <DealList title="Related Deals" tableData={deals} />
      </div>
    </div>
  );
}

export default DealsTab;
