import React, { Component } from "react";
import { connect } from "react-redux";

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
import InvoiceList from "Components/Accounting/Invoice/InvoiceList";

// Actions
import {
  changeInvoiceView,
  toggleInvoiceDropDown,
  toggleInvoiceSummary,
  getAllInvoice
} from "Actions";

class acct_invoice extends Component {
  componentDidMount() {
    this.props.getAllInvoice();
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
    } = this.props.invoiceState.invoiceList;

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
          createLink="/acct/new/invoice"
        />
        {showSummary && (
          <ListSummary>
            <ListSummaryItem
              heading={"New Invoices"}
              number={"10"}
              positive={true}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Open Invoices"}
              number={"10"}
              positive={false}
              percentage="20"
            />
            <ListSummaryItem
              heading={"Closed Invoices"}
              number={"10"}
              positive={true}
              percentage="20"
            />
          </ListSummary>
        )}
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
    getAllInvoice
  }
)(acct_invoice);
