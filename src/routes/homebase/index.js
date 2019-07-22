import React, { Component } from "react";

// sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import CalendarLayout from "Components/Widgets/Calendar/CalendarLayout";
import CrmSummary from "Components/Widgets/CrmSummary";

export default class Homebase extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="saas-dashboard">
        <Helmet>
          <title>Everyday | Homebase</title>
          <meta name="description" content="Everyday System" />
        </Helmet>
        <PageTitleBar title="Homebase" match={match} />

        <div style={{ padding: 21 }}>
          <CrmSummary />
          <div className="row">
            <div className="col-8">
              <div className="rct-block">Untouched Leads</div>
            </div>
            <div className="col-4">
              <CalendarLayout />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
