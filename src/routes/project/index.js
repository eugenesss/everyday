import React, { Component } from "react";
import { connect } from "react-redux";

//Page Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class ProjectManagement extends Component {
  render() {
    return (
      <div className="data-table-wrapper">
        <Helmet>
          <title>Everyday | Project Management</title>
          <meta name="description" content="Everyday Leads Generation" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.proj" />}
          match={this.props.match}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(ProjectManagement);
