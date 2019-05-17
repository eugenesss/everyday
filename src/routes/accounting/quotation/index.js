import React, { Component } from "react";
import { connect } from "react-redux";
import { show } from "redux-modal";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// ListSummary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ListSummaryItem from "Components/Everyday/ListSummary/ListSummaryItem";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

// List
import QuotationList from "Components/Accounting/Quotation/QuotationList";
import { Async_view_quotation } from "Components/AsyncComponent/AsyncComponent";

// Actions
import {
  changeQuotationView,
  toggleQuotationDropDown,
  toggleQuotationSummary,
  getAllQuotation
} from "Actions";

class acct_quotation extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
  }
  componentDidMount() {
    this.props.getAllQuotation();
  }
  handleOpen = quotationId => () => {
    this.props.show("view_quotation", {
      viewQuotation: `This is a ${quotationId} modal`
    });
  };

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      showSummary,
      action,
      tableData,
      loading
    } = this.props.quotationState.quotationList;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Quotations</title>
          <meta name="description" content="Everyday Quotation Management" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.toggleQuotationDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeQuotationView}
              />
              <ShowListSummaryButton
                action={this.props.toggleQuotationSummary}
              />
            </div>
          }
          createLink="/acct/new/quotation"
        />
        {showSummary && (
          <ListSummary>
            <ListSummaryItem
              heading={"New Quotations"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Open Quotations"}
              number={"10"}
              positive={false}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Closed Quotations"}
              number={"10"}
              positive={true}
              percentage="20"
            />
          </ListSummary>
        )}
        <QuotationList
          title={nowShowing}
          action={action}
          tableData={tableData}
          loading={loading}
          handleOpen={this.handleOpen}
        />
        <Async_view_quotation />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ accountingState }) => {
  const { quotationState } = accountingState;
  return { quotationState };
};

export default connect(
  mapStateToProps,
  {
    show,
    changeQuotationView,
    toggleQuotationDropDown,
    toggleQuotationSummary,
    getAllQuotation
  }
)(acct_quotation);
