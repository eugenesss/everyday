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

class crm_new_account extends Component {
  render() {
    const { loading } = this.props.accountForm;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | New Account</title>
          <meta name="description" content="Everyday Account Creation" />
        </Helmet>
        <RctCollapsibleCard heading={<IntlMessages id="sidebar.newAccount" />}>
          {loading && <RctSectionLoader />}
          <div className="row">
            <div className="col-md-11">
              <AccountForm />
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

export default connect(mapStateToProps)(crm_new_account);
