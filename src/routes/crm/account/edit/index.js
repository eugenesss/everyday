import React, { Component } from "react";
import { connect } from "react-redux";

// Sub components
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from "Util/IntlMessages";

// Page Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import AccountForm from "Components/Form/Account/AccountForm";
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";

// Actions
import { editAccount, getSingleAccount } from "Actions";

class crm_new_account extends Component {
  componentDidMount() {
    var id = this.props.match.params.id;
    this.props.getSingleAccount(id);
  }
  render() {
    const { loading, account } = this.props.accountToView;
    return (
      <React.Fragment>
        <Helmet>
          <title>Everyday | Edit Account</title>
        </Helmet>
        {loading ? (
          <RctPageLoader />
        ) : (
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <RctCollapsibleCard
                heading={<IntlMessages id="sidebar.editAccount" />}
              >
                <AccountForm
                  edit={account}
                  handleSubmit={this.props.editAccount}
                />
              </RctCollapsibleCard>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { accountState } = crmState;
  const { accountToView } = accountState;
  return { accountToView };
};

export default connect(
  mapStateToProps,
  { editAccount, getSingleAccount }
)(crm_new_account);
