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
import InvoiceList from "Components/Accounting/Invoice/InvoiceList";
import { newInvoice } from "Helpers/url/accounting";

// Actions
import {
  changeInvoiceView,
  toggleInvoiceDropDown,
  toggleInvoiceSummary,
  getAllInvoice,
  getInvoiceSummary
} from "Actions";

class acct_invoice extends Component {

  componentDidMount() {
    this.props.getAllInvoice();
    this.props.getInvoiceSummary();
  }


  render() {
  
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.invoiceState.invoiceList;


    const { showSummary, summary } = this.props.invoiceState.invoiceSummary;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Invoices</title>
          <meta name="description" content="Everyday Invoice Management" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.toggleInvoiceDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeInvoiceView}
              />
              <ShowListSummaryButton action={this.props.toggleInvoiceSummary} />
            </div>
          }
          createLink={newInvoice}
        />
        {showSummary && <ListSummary summary={summary} />}
        <InvoiceList
          title={nowShowing}
          action={action}
          tableData={tableData}
          loading={loading}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ accountingState }) => {
  const { invoiceState } = accountingState;
  return { invoiceState };
};

export default connect(
  mapStateToProps,
  {
    changeInvoiceView,
    toggleInvoiceDropDown,
    toggleInvoiceSummary,
    getAllInvoice,
    getInvoiceSummary
  }
)(acct_invoice);
