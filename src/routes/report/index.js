import React, { Component } from "react";

// page req
import { Helmet } from "react-helmet";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

//Page Req
import ReportDrawer from "Components/Report/ReportDrawer";
import ReportViewComponent from "Components/Report/ReportViewComponent";

class ReportsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: "",
      nestedView: { sales: false, leads: false, deals: false },
      dateRange: { startDate: null, endDate: null, focusedInput: null }
    };
    this.handleNestedView = this.handleNestedView.bind(this);
    this.onSelectView = this.onSelectView.bind(this);
  }

  handleNestedView(view) {
    this.setState({
      ...this.state,
      nestedView: {
        ...this.state.nestedView,
        [view]: !this.state.nestedView[view]
      }
    });
  }

  onSelectView(view) {
    this.setState({
      ...this.state,
      activeView: view
    });
  }

  render() {
    const { nestedView, activeView } = this.state;
    return (
      <div className="todo-dashboard">
        <Helmet>
          <title>Everyday | Reports</title>
          <meta name="description" content="Everyday Informational Reports" />
        </Helmet>
        <div className="row">
          <div className="col-2" style={{ height: "calc(100vh - 160px)" }}>
            <ReportDrawer
              activeView={activeView}
              nestedView={nestedView}
              openNestedView={this.handleNestedView}
              changeReportView={this.onSelectView}
            />
          </div>
          <div className="col-10">
            <ReportViewComponent componentToRender={activeView} />
          </div>
        </div>
        <RctCollapsibleCard fullBlock />
      </div>
    );
  }
}

export default ReportsComponent;
