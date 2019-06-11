import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import TabsWrapper from "Components/Everyday/Tabs/TabsWrapper";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import AccountingDetails from "Components/Accounting/View/AccountingDetails";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageErrorMessage from "Components/Everyday/Error/PageErrorMessage";

// Credit Note Tab
import ViewTemplate from "Components/Accounting/View/Templates/ViewTemplate";

// Invoice Credited Tab
import CreditedInvoices from "Components/Accounting/CreditNote/CreditedInvoices";

// Activity Log Tab
// import ActivityLog from "Components/Everyday/ActivityLog";

// Notes Tab
import NewNote from "Components/Form/Note/NewNote";
import DisplayAllNotes from "Components/Everyday/Notes/DisplayAllNotes";

// Actions
import { getSinglePayment, clearSinglePayment } from "Actions";

class acct_view_payment extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getSinglePayment(id);
  }

  componentWillUnmount() {
    this.props.clearSinglePayment();
  }

  render() {
    const { loading, payment } = this.props.paymentToView;
    return loading ? (
      <RctPageLoader />
    ) : payment ? (
      <React.Fragment>
        <Helmet>
          <title>Everyday | View Payment</title>
        </Helmet>
        <PageTitleBar title="View Payment" createLink="/acct/new/payment" />
        <div className="row">
          <div className="col-md-4">
            <RctCollapsibleCard>
              <AccountingDetails
                type="payment"
                accountID={payment.creditID}
                status={payment.status.name}
                account={payment.account && payment.account.name}
                sentDate={payment.sentOn}
                owner={payment.owner.name}
              />
            </RctCollapsibleCard>
          </div>
          <div className="col-md-8">
            <TabsWrapper>
              <div icon="zmdi-shopping-cart-plus text-success" label="PAYMENT">
                {/* <ViewTemplate /> */}
              </div>
              <div icon="zmdi-shopping-cart text-warning" label="INVOICE PAID">
                <CreditedInvoices />
              </div>
              {/* <div icon="zmdi-pizza text-info" label="ACTIVITY LOG">
                <ActivityLog />
              </div> */}
              <div icon="zmdi-assignment text-danger" label="NOTES">
                <div className="row">
                  <div className="col-md-5">
                    <NewNote /* onAddNote="function" */ />
                  </div>
                  <div className="col-md-7">
                    <DisplayAllNotes notes={payment.notes} />
                  </div>
                </div>
              </div>
            </TabsWrapper>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <PageErrorMessage
        heading="Not Found"
        message="This could be because of a network problem or the record might have been deleted"
      />
    );
  }
}

const mapStateToProps = ({ accountingState }) => {
  const { paymentState } = accountingState;
  const { paymentToView } = paymentState;
  return { paymentToView };
};

export default connect(
  mapStateToProps,
  { getSinglePayment, clearSinglePayment }
)(acct_view_payment);
