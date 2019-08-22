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
  getAllPayment,
  fetchAllPayment
} from "Actions";

import { newPayment } from "Helpers/url/accounting";

const data = [{
  accountId:  { id: "5d2fd4b4456a441037b9c352", name: "Shaking Company" },
  attn_toId:  { id: "5d2fd536456a441037b9c353", name: "Quacking James Johnson" },
  companyId: "5d2fd3d1456a441037b9c1f8",
  createdAt: "2019-08-08T08:40:23.009Z",
  date: "2019-08-08T08:40:04.986Z",
  description: "hello world",
  details: "Singapore Genesis Avenue 32\nSingapore Genesis Avenue 32\nSIngapore\nS549992",
  discount_rate: 0,
  discount_total: 0,
  dueDate: "2019-08-08T08:40:04.986Z",
  due_date: "2019-08-11T08:40:22.918Z",
  id: "5d4bdff713aaba62ca2860fa",
  latest: true,
  notes:  [],
  owner:  { id: "5d2fd3d1456a441037b9c1f9", name: "Shaking Legs William" },
  // quotationline: Array [ {…} ],
  quoteID: "I00037IN",
  reconcile: false,
  sentOn: "2019-08-08T08:40:04.986Z",
  sent_date: "2019-08-08T08:40:04.986Z",
  state: "Confirmed",
  subtotal: 100,
  tax_amount: 0,
  terms: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id felis ut sapien finibus vestibulum. Ut eget faucibus ligula. Integer vitae vehicula est. Aenean id neque enim. Fusce tempus nibh at augue feugiat, at aliquet elit sollicitudin. Fusce tellus massa, sollicitudin sit amet malesuada nec, sagittis dignissim neque. Nunc lacinia placerat est, a euismod odio sagittis nec. Aenean rhoncus lorem eget felis tristique facilisis. Vivamus convallis, justo nec consectetur laoreet, felis ante euismod neque, sit amet condimentum dolor justo fringilla enim. Donec pulvinar nulla non malesuada sagittis.",
  tnc: "",
  totalAmt: 100,
  updatedAt: "2019-08-08T08:52:14.376Z",
  userId: "5d2fd3d1456a441037b9c1f9",
  userInfo:  { id: "5d2fd3d1456a441037b9c1f9", name: "Shaking Legs William" },
  version: 1,
}]

class acct_payment extends Component {
  componentDidMount() {
    this.props.fetchAllPayment();
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
             {/* <ListViewSelector
               dropdownOpen={dropdownOpen}
               toggle={this.props.toggleInvoiceDropDown}
               options={options}
               nowShowing={nowShowing}
               onChangeValue={this.props.changeInvoiceView}
             />
             <ShowListSummaryButton action={this.props.toggleInvoiceSummary} /> */}
           </div>
         }
         createLink={newPayment}
       />
       {/* {showSummary && <ListSummary summary={summary} />} */}
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
  { changePaymentView, togglePaymentDropDown, fetchAllPayment }
)(acct_payment);
