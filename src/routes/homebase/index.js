import React, { Component } from "react";

// sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import CalendarLayout from "Components/Widgets/Calendar/CalendarLayout";
import CrmSummary from "Components/Widgets/CrmSummary";
import UntouchedLeadsTable from "Components/Widgets/UntouchedLeadsTable";

export default class Homebase extends Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Homebase</title>
          <meta name="description" content="Everyday System" />
        </Helmet>
        {/* <PageTitleBar title="Homebase" match={match} /> */}

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
