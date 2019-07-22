import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FullScreenDialog from "Components/Dialog/FullScreenDialog";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

// Content
import AccountSelection from "./Components/AccountSelection";

// Form
import ConvertLeadForm from "Components/Form/Lead/ConvertLeadForm";

// Actions
import { convertLead, handleConvertModal, getDealStage } from "Actions";

class ConvertLeadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dealDetails: {},
      accountToLink: null,
      newDeal: false
    };
    this.handleNewDeal = this.handleNewDeal.bind(this);
    this.handleConvertForm = this.handleConvertForm.bind(this);
    this.convertLead = this.convertLead.bind(this);
    this.handleAccountSelect = this.handleAccountSelect.bind(this);
  }
  componentDidMount() {
    this.props.getDealStage();
  }

  handleNewDeal() {
    this.setState({ newDeal: !this.state.newDeal });
  }

  handleConvertForm(field, value) {
    this.setState({
      ...this.state,
      dealDetails: { ...this.state.dealDetails, [field]: value }
    });
  }

  convertLead(id) {
    this.props.convertLead(
      id,
      this.state.dealDetails,
      this.state.accountToLink
    );
  }

  handleAccountSelect(event) {
    this.setState({ ...this.state, accountToLink: event.target.value });
  }

  isDisabled(dealDetails) {
    if (!this.state.newDeal) {
      return false;
    } else {
      if (
        dealDetails.amount &&
        dealDetails.name &&
        dealDetails.closingDate &&
        dealDetails.stageId
      ) {
        return false;
      } else {
        return true;
      }
    }
  }

  render() {
    const { lead } = this.props.leadToView;
    const { loading, show, data, count } = this.props.leadToConvert.modal;
    const { dealStage } = this.props;
    const { dealDetails } = this.state;
    return (
      <FullScreenDialog
        show={show}
        handleHide={this.props.handleConvertModal}
        title={
          <React.Fragment>
            Convert Lead{" "}
            <small className="fs-18">{`(${lead.name}, ${
              lead.companyName
            })`}</small>
          </React.Fragment>
        }
      >
        {loading && <RctSectionLoader />}
        <DialogContent className="p-30">
          <div className="row">
            <div className="col-6 offset-md-3">
              <AccountSelection
                name={lead.name}
                companyName={lead.companyName}
                count={count}
                data={data}
                handleChange={this.handleAccountSelect}
                accountToLink={this.state.accountToLink}
              />

              <div style={{ maxWidth: "350px" }}>
                <div className="mb-20">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.newDeal}
                        onChange={this.handleNewDeal}
                        color="primary"
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                      />
                    }
                    label={<p className="mb-0">Create new deal</p>}
                  />
                  {this.state.newDeal && (
                    <div className="my-10">
                      <ConvertLeadForm
                        handleChange={this.handleConvertForm}
                        dealStage={dealStage}
                        dealDetails={dealDetails}
                      />
                    </div>
                  )}
                </div>
                <DialogActions
                  style={{ justifyContent: "flex-start" }}
                  className="mx-0 mt-30 p-0"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.props.handleConvertModal}
                    className="text-white"
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => this.convertLead(lead.id)}
                    className="ml-20 btn-success text-white"
                    disabled={this.isDisabled(dealDetails)}
                  >
                    Convert
                  </Button>
                </DialogActions>
              </div>
            </div>
          </div>
        </DialogContent>
      </FullScreenDialog>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { leadState, crmField } = crmState;
  // leadToConvert
  const { leadToConvert, leadToView } = leadState;
  // crm fields
  const { dealStage } = crmField;
  return { leadToConvert, leadToView, dealStage };
};

export default connect(
  mapStateToProps,
  { convertLead, handleConvertModal, getDealStage }
)(ConvertLeadModal);
