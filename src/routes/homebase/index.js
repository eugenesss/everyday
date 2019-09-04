import React, { Component } from "react";

// sub components
import { Helmet } from "react-helmet";

// Widgets
import CalendarLayout from "Components/Widgets/Calendar/CalendarLayout";
import CrmSummary from "Components/Widgets/CrmSummary";
import UntouchedLeadsTable from "Components/Widgets/UntouchedLeadsTable";

export default class Homebase extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Homebase</title>
          <meta name="description" content="Everyday System" />
        </Helmet>

        <CrmSummary />
        <div className="row">
          <div className="col-md-8">
            <UntouchedLeadsTable />
          </div>
          <div className="col-md-4">
            <CalendarLayout />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
