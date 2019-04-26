import React, { Component } from "react";

// page title bar
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

export default class Dashboard extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="saas-dashboard">
        <PageTitleBar title="Dashboard" match={match} />
      </div>
    );
  }
}
