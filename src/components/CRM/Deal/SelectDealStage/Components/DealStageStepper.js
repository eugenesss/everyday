import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";

const DealStageStepper = ({
  dealStage,
  activeStep,
  isStepComplete,
  onClickStep
}) => {
  return (
    <Stepper
      alternativeLabel
      nonLinear
      activeStep={activeStep}
      className="stepper-rtl"
    >
      {dealStage.map((stage, index) => {
        return (
          <Step key={index}>
            <StepButton
              onClick={() => onClickStep(index)}
              completed={isStepComplete(index)}
            >
              {`${stage.name} - ${stage.chance}%`}
            </StepButton>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default DealStageStepper;
