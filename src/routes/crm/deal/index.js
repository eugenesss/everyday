import React, { Component } from "react";
import { connect } from "react-redux";

//sub components
import DealList from "Components/CRM/Deal/DealList";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import MoreButton from "Components/PageTitleBar/MoreButton";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// List Summary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

// Actions
import { changeDealView, getAllDeal, getDealSummary } from "Actions";
import { newDeal } from "Helpers/url/crmRoutes";

class crm_deal extends Component {
  state = {
    showSummary: false
  };

  componentDidMount() {
    this.props.getAllDeal();
    this.props.getDealSummary();
  }

  toggleSummary() {
    this.setState({ showSummary: !this.state.showSummary });
  }

  reload() {
    console.log("reload");
  }
  massImportDeals() {
    console.log("massImportDeals");
  }

  render() {
    const {
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.dealState.dealList;
    const { summary } = this.props.dealState.dealSummary;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Deals</title>
          <meta name="description" content="Everyday Deals Management" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeDealView}
              />
              <ShowListSummaryButton action={() => this.toggleSummary()} />
            </div>
          }
          createLink={newDeal}
          moreButton={
            <MoreButton>
              {{ handleOnClick: this.reload.bind(this), label: "Reload" }}
              {{
                handleOnClick: this.massImportDeals.bind(this),
                label: "Mass Import Deals (csv)"
              }}
            </MoreButton>
          }
        />
        {this.state.showSummary && <ListSummary summary={summary} />}
        <DealList
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
  const { dealState } = crmState;
  return { dealState };
};

export default connect(
  mapStateToProps,
  {
    changeDealView,
    getAllDeal,
    getDealSummary
  }
)(crm_deal);
