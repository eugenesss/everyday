import React, { Component } from "react";

// Sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "Util/IntlMessages";

class crm_new_lead extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Lead</title>
          <meta name="description" content="Everyday Leads Creation" />
        </Helmet>
        <PageTitleBar
          title={<IntlMessages id="sidebar.newLead" />}
          match={this.props.match}
          enableBreadCrumb={false}
        />
      </React.Fragment>
    );
  }
}

export default crm_new_lead;
