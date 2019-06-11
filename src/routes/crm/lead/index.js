import React, { Component } from "react";
import { connect } from "react-redux";

//Sub Components
import LeadList from "Components/CRM/Lead/LeadList";

//Page Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// ListSummary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

// Actions
import {
  changeLeadView,
  toggleLeadDropDown,
  toggleLeadSummary,
  getAllLead,
  getLeadSummary,
  getAllUsers
} from "Actions";

class crm_lead extends Component {
  componentDidMount() {
    this.props.getAllLead();
    this.props.getLeadSummary();
    this.props.getAllUsers();
  }

  reload() {
    console.log("reload");
  }
  massImportLeads() {
    console.log("massImportLeads");
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
          moreButton={
            <MoreButton>
              {{ handleOnClick: this.reload.bind(this), label: "Reload" }}
              {{
                handleOnClick: this.massImportLeads.bind(this),
                label: "Mass Import Leads (csv)"
              }}
            </MoreButton>
          }
        />
        {showSummary && <ListSummary summary={summary} />}
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
    getLeadSummary,
    getAllUsers
  }
)(crm_lead);
