import React, { Component } from "react";
import { connect } from "react-redux";

//Components Req
import Button from "@material-ui/core/Button";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import DealStageStepper from "./Components/DealStageStepper";

import { dealStage } from "Components/DummyData";

//Page Req
import DealStageContent from "./Components/DealStageContent";
// import DealStageIndicatorForm from "./DealStageIndicatorForm";

import {
  onClickStep,
  setCurrentStep,
  onChangeStepState,
  submitNewStage
} from "Actions";

class SelectDealStage extends Component {
  state = {};

  componentWillMount() {
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
    const stage = dealStage.find(stage => {
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
            <div className="col-md-2">
              <div style={{ margin: "auto" }}>
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white mb-10"
                  disabled={this.isCurrentStep()}
                  onClick={this.handleComplete}
                >
                  Save New Stage
                </Button>
              </div>
            </div>
            <div className="col-md-10">
              <DealStageContent activeStep={activeStep} dealStage={dealStage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ crmState }) => {
  const { dealState } = crmState;
  const { dealStageStepper } = dealState.dealToView;
  return { dealStageStepper };
};

export default connect(
  mapStateToProps,
  { onClickStep, setCurrentStep, onChangeStepState, submitNewStage }
)(SelectDealStage);
