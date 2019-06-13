import React, { Component } from "react";
import { connect } from "react-redux";

//Components Req
import Button from "@material-ui/core/Button";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import DealStageStepper from "./Components/DealStageStepper";

// import { dealStage } from "Components/DummyData";

//Page Req
import DealStageContent from "./Components/DealStageContent";
import UpdateDealStageForm from "Components/Form/Deal/UpdateDealStageForm";

import {
  onClickStep,
  setCurrentStep,
  onChangeStepState,
  submitNewStage,
  getDealStage
} from "Actions";

class SelectDealStage extends Component {
  componentWillMount() {
    this.props.getDealStage();
    this.props.setCurrentStep(this.props.deal.stage.step);
  }

  isCurrentStep() {
    if (this.props.deal.stage.step == this.props.dealStageStepper.activeStep) {
      return true;
    } else {
      return false;
    }
  }

  getStageID = step => {
    const stage = this.props.dealStage.find(stage => {
      if (stage.step == step) return stage;
    });
    return stage.id;
  };

  handleComplete = () => {
    const step = this.props.dealStageStepper.activeStep;
    this.props.onChangeStepState();
    this.props.submitNewStage(this.props.deal.id, this.getStageID(step));
  };

  isStepComplete(step) {
    return this.props.dealStageStepper.completed.has(step);
  }

  render() {
    const { activeStep, loading } = this.props.dealStageStepper;
    const { dealStage } = this.props;
    return (
      <div>
        {loading && <RctSectionLoader />}
        <DealStageStepper
          dealStage={dealStage}
          activeStep={activeStep}
          isStepComplete={this.isStepComplete.bind(this)}
          onClickStep={this.props.onClickStep}
        />
        <div>
          <div className="row" style={{ padding: "2% 2%" }}>
            <div className="col-md-6">
              <div
                className="p-20"
                style={{ maxWidth: "60%", marginLeft: "30px" }}
              >
                <UpdateDealStageForm />
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white mb-10 mr-20"
                  disabled={this.isCurrentStep()}
                  onClick={this.handleComplete}
                >
                  Update Stage
                </Button>
              </div>
            </div>
            <div className="col-md-6">
              <DealStageContent activeStep={activeStep} dealStage={dealStage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { dealState, crmField } = crmState;
  const { dealStageStepper } = dealState.dealToView;
  const { dealStage } = crmField;
  return { dealStageStepper, dealStage };
};

export default connect(
  mapStateToProps,
  {
    onClickStep,
    setCurrentStep,
    onChangeStepState,
    submitNewStage,
    getDealStage
  }
)(SelectDealStage);
