import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDealStage, enqueueSnackbar } from "Actions";

//Components Req
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";

//Page Req
import DealStageContent from "./DealStageContent";
import DealStageIndicatorForm from "./DealStageIndicatorForm";

class SelectDealStage extends Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set()
  };
  getSteps() {
    return this.props.dealStage;
  }

  getStageID = step => {
    const stage = this.props.dealStage.find(stage => {
      if (stage.step == step) return stage;
    });
    return stage.id;
  };

  totalSteps = () => {
    return this.getSteps().length;
  };

  isCurrentStep() {
    if (this.props.deal.stage.step == this.state.activeStep) {
      return true;
    } else {
      return false;
    }
  }

  handleNext = () => {
    let activeStep;

    if (this.isLastStep()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      const steps = this.getSteps();
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({ activeStep });
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step
    });
  };

  handleComplete = () => {
    const activeStep = this.state.activeStep;
    //Update Deal
    this.props.updateDealStage(this.props.deal.id, this.getStageID(activeStep));
    //Set State
    const completed = new Set();
    for (let i = 0; i <= activeStep; i++) {
      completed.add(i);
    }
    this.setState({
      completed
    });
    this.props.enqueueSnackbar({
      message: "Deal Updated",
      options: {
        variant: "default",
        action: (
          <Button className="text-danger" size="small">
            DISMISS
          </Button>
        )
      }
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set()
    });
  };

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  handleCurrentStage = stage => {
    const completed = new Set();
    for (let i = 0; i <= stage; i++) {
      completed.add(i);
    }
    this.setState({ completed, activeStep: stage });
  };
  componentWillMount() {
    this.handleCurrentStage(this.props.deal.stage.step);
  }

  render() {
    const steps = this.getSteps();
    const { activeStep } = this.state;
    return (
      <div>
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((stage, index) => {
            const props = {};
            const buttonProps = {};
            return (
              <Step key={stage.name} {...props}>
                <StepButton
                  onClick={this.handleStep(index)}
                  completed={this.isStepComplete(index)}
                  {...buttonProps}
                >
                  <StepLabel>{`${stage.chance}% - ${stage.name}`}</StepLabel>
                </StepButton>
              </Step>
            );
          })}
        </Stepper>

        <div>
          <div className="row" style={{ padding: "2% 2%" }}>
            <div className="col-md-6">
              {" "}
              <DealStageIndicatorForm />
            </div>
            <div className="col-md-6">
              <DealStageContent
                step={activeStep}
                desc={steps[activeStep].description}
              />
            </div>
          </div>
          <div className="pl-40 mb-20">
            <Button
              variant="contained"
              color="secondary"
              className="text-white mr-10 mb-10"
              disabled={activeStep === 0}
              onClick={this.handleBack}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="text-white mr-10 mb-10"
              disabled={activeStep === 5}
              onClick={this.handleNext}
            >
              Next
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="text-white mb-10"
              disabled={this.isCurrentStep()}
              onClick={this.handleComplete}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ crmConstant }) => {
  const { dealStage } = crmConstant;
  return { dealStage };
};

export default connect(
  mapStateToProps,
  { updateDealStage, enqueueSnackbar }
)(SelectDealStage);
