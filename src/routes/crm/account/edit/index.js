import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import AccountForm from "Components/Form/Account/AccountForm";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Actions
import { submitEditAccount } from "Actions";

class crm_new_account extends Component {
  render() {
    const { loading } = this.props.accountForm;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Edit Account</title>
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.editAccount" />}>
          {loading && <RctSectionLoader />}
          <div className="row">
            <div className="col-md-11">
              <AccountForm edit handleSubmit={this.props.submitEditAccount} />
            </div>
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { accountState } = crmState;
  const { accountForm } = accountState;
  return { accountForm };
};

export default connect(
  mapStateToProps,
  { submitEditAccount }
)(crm_new_account);
