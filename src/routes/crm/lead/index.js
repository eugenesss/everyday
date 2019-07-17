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
import { changeLeadView, getAllLead, getLeadSummary } from "Actions";
import { leadNewPage, leadImportPage } from "Helpers/url/crm";

class crm_lead extends Component {
  state = {
    showSummary: false
  };

  componentDidMount() {
    this.props.getAllLead();
    this.props.getLeadSummary();
  }

  toggleSummary() {
    this.setState({ showSummary: !this.state.showSummary });
  }

  reload() {
    console.log("reload");
  }
  importLead() {
    this.props.history.push(leadImportPage);
  }

  render() {
    const {
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.leadList;
    const { summary } = this.props.leadSummary;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Leads</title>
          <meta name="description" content="Everyday Leads Generation" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              {/* <ListViewSelector
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeLeadView}
              /> */}
              <ShowListSummaryButton action={() => this.toggleSummary()} />
            </div>
          }
          createLink={leadNewPage}
          moreButton={
            <MoreButton>
              {{ handleOnClick: this.reload.bind(this), label: "Reload" }}
              {{
                handleOnClick: this.importLead.bind(this),
                label: "Import"
              }}
            </MoreButton>
          }
        />
        {this.state.showSummary && <ListSummary summary={summary} />}
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
    getAllLead,
    getLeadSummary
  }
)(crm_lead);
