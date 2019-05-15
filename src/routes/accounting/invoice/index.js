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
import InvoiceList from "Components/Accounting/Invoice/InvoiceList";
import { Async_view_invoice } from "Components/AsyncComponent/AsyncComponent";

// Actions
import {
  changeInvoiceView,
  toggleInvoiceDropDown,
  toggleInvoiceSummary,
  getAllInvoice
} from "Actions";

class acct_invoice extends Component {
  constructor(props) {
    super(props);
    this.handleOpen = this.handleOpen.bind(this);
  }
  componentDidMount() {
    this.props.getAllInvoice();
  }
  handleOpen = invoiceId => () => {
    this.props.show("view_invoice", {
      viewInvoice: `This is a ${invoiceId} modal`
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
          handleOpen={this.handleOpen}
        />
        <Async_view_invoice />
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
    show,
    changeInvoiceView,
    toggleInvoiceDropDown,
    toggleInvoiceSummary,
    getAllInvoice
  }
)(acct_invoice);
