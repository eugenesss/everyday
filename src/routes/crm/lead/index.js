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

// Actions
import {
  changeLeadView,
  toggleLeadDropDown,
  toggleLeadSummary,
  getAllLead
} from "Actions";

class crm_lead extends Component {
  componentDidMount() {
    this.props.getAllLead();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      showSummary,
      action,
      tableData,
      loading
    } = this.props.leadState.leadList;
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
          <ListSummary>
            <ListSummaryItem
              heading={"New Lead"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Cold Lead"}
              number={"10"}
              positive={false}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Hot Lead"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Open Leads"}
              number={"10"}
              positive={true}
              percentage="20"
            />
          </ListSummary>
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

const mapStateToProps = ({ leadState }) => {
  return { leadState };
};

export default connect(
  mapStateToProps,
  {
    changeLeadView,
    toggleLeadDropDown,
    toggleLeadSummary,
    getAllLead
  }
)(crm_lead);
