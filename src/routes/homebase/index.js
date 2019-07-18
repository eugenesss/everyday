import React, { Component } from "react";

// sub components
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

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
        <div className="row">
          <div className="col-3">
            <div className="rct-block">rct-block</div>
          </div>
          <div className="col-3">
            <div className="rct-block">rct-block</div>
          </div>
          <div className="col-3">
            <div className="rct-block">rct-block</div>
          </div>
          <div className="col-3">
            <div className="rct-block">rct-block</div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="rct-block">Untouched Leads</div>
          </div>
          <div className="col-4">
            <div className="rct-block">upcoming events</div>
          </div>
        </div>
      </div>
    );
  }
}
