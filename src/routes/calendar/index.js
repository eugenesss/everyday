import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import CalendarLayout from "Components/Calendar/CalendarLayout"

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={"saas-dashboard"}>
        <Helmet>
          <title>Everyday | Calendar</title>
          <meta name="description" content="Everyday System" />
        </Helmet>
        <CalendarLayout/>
      </div>
    );
  }
}

export default connect(
  null
)(Calendar);
