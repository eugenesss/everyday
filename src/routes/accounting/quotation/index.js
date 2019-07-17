import React, { Component } from "react";
import { connect } from "react-redux";


// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// ListSummary
import ListSummary from "Components/Everyday/ListSummary/ListSummary";
import ShowListSummaryButton from "Components/Everyday/ListSummary/ShowListSummaryButton";

// List
import QuotationList from "Components/Accounting/Quotation/QuotationList";
import { newQuote } from "Helpers/url/accounting";

// Actions
import {
  changeQuotationView,
  toggleQuotationDropDown,
  toggleQuotationSummary,
  getAllQuotation,
  getQuotationSummary,
} from "Actions";

class acct_quotation extends Component {
  componentDidMount() {
    this.props.getAllQuotation();
    this.props.getQuotationSummary();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      loading,
      tableData
    } = this.props.quotationState.quotationList;
    const { showSummary, summary } = this.props.quotationState.quotationSummary;

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
          createLink={newQuote}
        />
        {showSummary && <ListSummary summary={summary} />}
        <QuotationList
          // edit
          title={nowShowing}
          action={action}
          loading={loading}
          tableData={tableData}
        />
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
    changeQuotationView,
    toggleQuotationDropDown,
    toggleQuotationSummary,
    getAllQuotation,
    getQuotationSummary,
  }
)(acct_quotation);
