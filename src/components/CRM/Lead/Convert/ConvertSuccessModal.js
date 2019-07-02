import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

// Modal
import DialogRoot from "Components/Dialog/DialogRoot";

// Components
import ConvertedBlock from "./Components/ConvertedBlock";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import NumberFormat from "react-number-format";
import { leadPage } from "Helpers/url/crm";
// Actions
import { handleSuccessConvertModal } from "Actions";

class ConvertSuccessModal extends Component {
  closeModal() {
    this.props.handleSuccessConvertModal();
    this.props.history.push(leadPage);
  }
  render() {
    const {
      show,
      newDeal,
      newAcct,
      newCust
    } = this.props.leadToConvert.successMsg;
    return (
      <DialogRoot
        show={show}
        handleHide={() => this.closeModal()}
        size="xl"
        title="Lead Converted Successfully!"
        close
      >
        <div className="row">
          <div className="col-md-1" />
          <div className="col">
            <RctCollapsibleCard fullBlock>
              <ConvertedBlock
                bgColor="success"
                name={newCust.name}
                smallText={newCust.baseContact && newCust.baseContact.title}
                heading="New Customer"
              />
            </RctCollapsibleCard>
          </div>
          <div className="col">
            <RctCollapsibleCard fullBlock>
              <ConvertedBlock
                bgColor="secondary"
                name={newAcct.name}
                smallText={newAcct.industry && newAcct.industry.name}
                heading="New Account"
              />
            </RctCollapsibleCard>
          </div>
          {newDeal && (
            <div className="col">
              <RctCollapsibleCard fullBlock>
                <ConvertedBlock
                  bgColor="info"
                  name={newDeal.name}
                  smallText={
                    <NumberFormat
                      value={newDeal.amount}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  }
                  heading="New Deal"
                />
              </RctCollapsibleCard>
            </div>
          )}
          <div className="col-md-1" />
        </div>
      </DialogRoot>
    );
  }
}
const mapStateToProps = ({ crmState }) => {
  const { leadState } = crmState;
  const { leadToConvert } = leadState;
  return { leadToConvert };
};

export default withRouter(
  connect(
    mapStateToProps,
    { handleSuccessConvertModal }
  )(ConvertSuccessModal)
);
