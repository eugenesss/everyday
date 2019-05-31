import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FullScreenDialog from "Components/Dialog/FullScreenDialog";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Form
import ConvertLeadForm from "Components/Form/Lead/ConvertLeadForm";

// Actions
import { convertLead, handleConvertModal } from "Actions";

class ConvertLeadModal extends Component {
  render() {
    const { lead } = this.props.leadToView;
    const { loading, modal } = this.props.leadToConvert;
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
          <div style={{ paddingLeft: "24px", maxWidth: "300px" }}>
            <ConvertLeadForm />
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
              //disabled={showDeal && this.isDealEmpty()}
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
