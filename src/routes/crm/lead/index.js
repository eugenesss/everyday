import React, { Component } from "react";
import { connect } from "react-redux";

//Sub Components
import LeadList from "Components/CRM/Lead/LeadList";

//Page Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// ListSummary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ListSummaryItem from "Components/Everyday/ListSummary/ListSummaryItem";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Actions
import {
  changeLeadView,
  toggleLeadDropDown,
  toggleLeadSummary,
  getAllLead,
  getLeadSummary
} from "Actions";

class crm_lead extends Component {
  componentDidMount() {
    this.props.getAllLead();
    this.props.getLeadSummary();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.leadList;
    const { showSummary, summary } = this.props.leadSummary;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Leads</title>
          <meta name="description" content="Everyday Leads Generation" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.toggleLeadDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeLeadView}
              />
              <ShowListSummaryButton action={this.props.toggleLeadSummary} />
            </div>
          }
          createLink="/crm/new/lead"
        />
        {showSummary && (
          <div className="col-md-8">
            <ListSummary>
              {summary &&
                summary.map((sum, key) => {
                  return (
                    <ListSummaryItem
                      key={key}
                      heading={sum.summaryType}
                      number={sum.number}
                      positive={sum.positive}
                      percentage={sum.difference}
                    />
                  );
                })}
            </ListSummary>
            {/* <RctSectionLoader /> */}
          </div>
        )}
        <LeadList
          title={nowShowing}
          action={action}
          tableData={tableData}
          loading={loading}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { leadState } = crmState;
  const { leadList, leadSummary } = leadState;
  return { leadList, leadSummary };
};

export default connect(
  mapStateToProps,
  {
    changeLeadView,
    toggleLeadDropDown,
    toggleLeadSummary,
    getAllLead,
    getLeadSummary
  }
)(crm_lead);
