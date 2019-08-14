import React, { Component } from "react";
import { connect } from "react-redux";

// page req
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// List View
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";
import PaymentList from "Components/Accounting/Payment/PaymentList";

// Actions
import {
  changePaymentView,
  togglePaymentDropDown,
  getAllPayment
} from "Actions";

class acct_payment extends Component {
  componentDidMount() {
    this.props.getAllPayment();
  }

  render() {
    const {
      dropdownOpen,
      options,
      nowShowing,
      action,
      tableData,
      loading
    } = this.props.paymentState.paymentList;
    
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Payment</title>
          <meta name="description" content="Everyday Payment Management" />
        </Helmet>
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                dropdownOpen={dropdownOpen}
                toggle={this.props.togglePaymentDropDown}
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changePaymentView}
              />
            </div>
          }
          createLink="/acct/new/payment"
        />
        <PaymentList
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
  const { paymentState } = accountingState;
  return { paymentState };
};

export default connect(
  mapStateToProps,
  { changePaymentView, togglePaymentDropDown, getAllPayment }
)(acct_payment);
