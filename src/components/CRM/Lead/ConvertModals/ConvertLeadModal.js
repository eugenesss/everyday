import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FullScreenDialog from "Components/Dialog/FullScreenDialog";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// Form
import ConvertLeadForm from "Components/Form/Lead/ConvertLeadForm";

// Actions
import { convertLead, handleConvertModal } from "Actions";

class ConvertLeadModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createDeal: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ createDeal: !this.state.createDeal });
  }

  isDisabled(dealDetails) {
    if (!this.state.createDeal) {
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
    const { loading, modal, dealDetails } = this.props.leadToConvert;
    return (
      <FullScreenDialog
        show={modal}
        handleHide={this.props.handleConvertModal}
        title={"Convert Lead"}
      >
        {loading && <RctSectionLoader />}
        <DialogContent style={{ padding: "10px 40px 24px" }}>
          <DialogTitle id="form-dialog-title" className="mb-20">
            Convert Lead <small>({`${lead.name}, ${lead.companyName}`})</small>
          </DialogTitle>
          <div style={{ paddingLeft: "24px" }}>
            <p>
              Create New Account: <strong>{`${lead.companyName}`}</strong>
            </p>
            <p>
              Create New Customer: <strong>{`${lead.name}`}</strong>
            </p>
            <hr />
          </div>
          <div style={{ paddingLeft: "24px", maxWidth: "350px" }}>
            <FormControlLabel
              className="mb-20"
              control={
                <Checkbox
                  checked={this.state.createDeal}
                  onChange={this.handleChange}
                  color="primary"
                />
              }
              label="Create new deal"
            />
            {this.state.createDeal && <ConvertLeadForm />}
          </div>
          <DialogActions
            style={{ justifyContent: "flex-start", paddingLeft: "20px" }}
            className="ml-0 mt-30"
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
              onClick={() => this.props.convertLead(lead.id)}
              className="ml-20 btn-success text-white"
              disabled={this.isDisabled(dealDetails)}
            >
              Convert
            </Button>
          </DialogActions>
        </DialogContent>
      </FullScreenDialog>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { leadState } = crmState;
  const { leadToConvert, leadToView } = leadState;
  return { leadToConvert, leadToView };
};

export default connect(
  mapStateToProps,
  { convertLead, handleConvertModal }
)(ConvertLeadModal);
