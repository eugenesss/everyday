import React from "react";
import { connect } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LoadingButton from "Components/Everyday/LoadingButton/LoadingButton";

// Form Components
import RegisterForm from "./Forms/UserRegisterForm";
import SelectPlanForm from "./Forms/SelectPlanForm";
import PaymentDetailForm from "./Forms/PaymentDetailForm";
import { Link } from "react-router-dom";

// Actions
import { registerUser } from "Actions";

function getSteps() {
  return ["Enter Your Details", "Select a Plan", "Payment Details"];
}

function getStepForm(step) {
  switch (step) {
    case 0:
      return <RegisterForm />;
    case 1:
      return <SelectPlanForm />;
    case 2:
      return <PaymentDetailForm />;
    default:
      return "Unknown step";
  }
}

class RegisterSteps extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const { loading, success } = this.props;
    return (
      <div>
        {!success ? (
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                  <StepContent>
                    <div className="px-20 py-40">{getStepForm(index)}</div>
                    <div>
                      {activeStep === steps.length - 1 && (
                        <React.Fragment>
                          <p className="text-muted">
                            By signing up you agree to Everyday
                            <sup style={{ fontSize: "8px" }}>TM</sup>
                          </p>
                          <p>
                            <Link to="/terms-condition" className="text-muted">
                              Terms of Service
                            </Link>
                          </p>
                        </React.Fragment>
                      )}
                      <Button
                        variant="contained"
                        className="btn-danger text-white mr-10 mb-10"
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                      {activeStep === steps.length - 1 ? (
                        <LoadingButton
                          onClickFunc={this.props.registerUser}
                          loading={loading}
                          color="success"
                          label="Finish"
                        />
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          className="text-white mr-10 mb-10"
                          onClick={this.handleNext}
                        >
                          Next
                        </Button>
                      )}
                    </div>
                  </StepContent>
                </Step>
              );
            })}
          </Stepper>
        ) : (
          <Paper square elevation={0} className="pl-40">
            <p>
              Registration Complete - Login <Link to="/login">here</Link>
            </p>
          </Paper>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { register } = authUser;
  const { loading, success } = register;
  return { loading, success };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(RegisterSteps);
