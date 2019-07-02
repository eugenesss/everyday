import React from "react";
import { connect } from "react-redux";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LoadingButton from "Components/Everyday/LoadingButton/LoadingButton";
import StepButton from '@material-ui/core/StepButton';


// Form Components
import RegisterForm from "./Forms/UserRegisterForm";
import SelectPlanForm from "./Forms/SelectPlanForm";
import PaymentDetailForm from "./Forms/PaymentDetailForm";
import { Link } from "react-router-dom";

// Actions
import { registerUser, handleRegForm, handleRegErrorForm, resetSuccess} from "Actions";


import {EmailValidator, PasswordValidator, StepperZeroValidator, CheckCreditCard} from "./Validation/Validation"

function getSteps() { return ["Enter Your Details", "Select a Plan", "Payment Details"]}



// function getStepForm(step) {
//   switch (step) {
//     case 0:
//       return <RegisterForm />;
//     case 1:
//       return <SelectPlanForm />;
//     case 2:
//       return <PaymentDetailForm />;
//     default:
//       return "Unknown step";
//   }
// }



class RegisterSteps extends React.Component {

  // Set up state for validation
  state = {
    activeStep: 0,
    emailState: '',
    passwordState: '',
    planState: '',
    creditState: {
      payment_name: '',
      payment_no: '',
      payment_expiry: '',
      payment_code : ''
    }
  };



  handleNext = (next) => {

    let state = {...this.state}
    
    if (next) {
      switch (state.activeStep) {

        case 0:
            const [result, info] = StepperZeroValidator(this.props, state.emailState, state.passwordState) 
          
            if (result) {
              this.setState({activeStep: state.activeStep + 1})
            } else {
              this.props.handleRegErrorForm(info)
            }
          
          break
        
        case 1:
            state.planState !== "" ? this.setState({ activeStep: this.state.activeStep + 1}) : (
              this.props.handleRegErrorForm('Please tick the one of the plans')
            )
          break

        case 2:
            this.validateCard()
          break


        default:break
      }

    } else {
      
      switch (next) {

        case 0:
            this.setState({activeStep: 0})
          break
        
        case 1:
            const [result, info] = StepperZeroValidator(this.props, state.emailState, state.passwordState) 
          
            if (result) {
              this.setState({activeStep: 1})
            } else {
              this.props.handleRegErrorForm(info)
            }
          break
        case 2:

            const [results, infos] = StepperZeroValidator(this.props, state.emailState, state.passwordState) 
          
            if (results) {
              state.planState !== "" ? this.setState({ activeStep: 2}) : (
                this.props.handleRegErrorForm('Please tick one of the plans')
              )

            } else {
              this.props.handleRegErrorForm(infos)
            }
          
          break
        default:break
      }

    }

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


  /**
   * Validation of Email | Password before submitting
   */
  validateEmail= (e) =>{ this.setState({ emailState:  EmailValidator(e)})}
  validatePassword = (password, repassword) => { this.setState({ passwordState:  PasswordValidator(password, repassword)})} 

  /**
   * Validation of Plan before submitting
   */
  validatePlate = (e) => {this.setState({planState: e})}

  /**
   * Validation of Credit Cards
   */
  validateCard = () => {
    const [result, info] = CheckCreditCard(this.props.paymentInfo)
    if (result) {
      console.log(this.state)
      this.props.registerUser()
    } else {
      this.props.handleRegErrorForm(info)
    }
  } 


  componentWillUnmount() {
    this.props.resetSuccess()
  }




  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const { loading, success } = this.props;
    let StepperPage = null
    switch (this.state.activeStep) {
      case 0:
     
        // Implement Email | Password Validation
        StepperPage = (
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <RegisterForm
                validateEmail = {(e) => this.validateEmail(e)}
                emailState={this.state.emailState}
                validatePassword = {(password, repassword) => this.validatePassword(password, repassword)}
                passwordState={this.state.passwordState}
                {...this.props}
              />
              <Button
                variant="contained"
                color="primary"
                className="text-white mr-10 mb-10"
                onClick={this.handleNext}
              >
                Next
              </Button>
          </div>
        )
          break
      case 1:
        StepperPage = (
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <SelectPlanForm
              validatePlate={(e) => this.validatePlate(e)}
              {...this.props}
            />

            <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
              <Button
                  variant="contained"
                  className="btn-danger text-white mr-10 mb-10"
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                >
                  Back
                </Button>
              <Button
                variant="contained"
                color="primary"
                className="text-white mr-10 mb-10"
                onClick={this.handleNext}
              >
                Next
              </Button>
            </div>

          </div>
         
        )
          break
      case 2:
        StepperPage = (
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <PaymentDetailForm 
                {...this.props}
              />

              <div style={{marginBottom: 15, marginTop: 15}}>
                  By signing up, you agree to Everday's Term of Service*  
              </div>

              <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <Button
                    variant="contained"
                    className="btn-danger text-white mr-10 mb-10"
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                  >
                    Back
                  </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="text-white mr-10 mb-10"
                  onClick={this.handleNext}
                >
                  Next
                </Button>
              </div>
          </div>
        )
          break
      default:
          "Unknown step";
        break 
    }

    // change success to normal for development
    return (
      <div>
        {!success ? (

          <div>
              <Stepper alternativeLabel nonLinear activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const buttonProps = {};
              
                return (
                  <Step key={label} {...stepProps}>
                    <StepButton
                      onClick={() => this.handleNext(index)}
                      // onClick={() => console.log(index)}

                      // completed={isStepComplete(index)}
                      // {...buttonProps}
                    >
                      {label}
                    </StepButton>
                  </Step>
                );
              })}
            </Stepper>
          
            <div style={{display:'flex', width: '100%', justifyContent:'center', alignItems:'center'}}>
              {StepperPage}
            </div>

            
          </div>
          
          
        
          // <Stepper nonLinear activeStep={activeStep}>
          //   {steps.map((label, index) => {
          //     return (
          //       <Step key={label}>
          //         <StepLabel>{label}</StepLabel>
          //         <StepContent>
                    
          //           {/* <div className="px-20 py-40">{getStepForm(index)}</div> */}
                  
          //           <div className="px-20 py-40">{StepperPage}</div>
                    
          //           <div>
          //             {activeStep === steps.length - 1 && (
          //               <React.Fragment>
          //                 <p className="text-muted">
          //                   By signing up you agree to Everyday
          //                   <sup style={{ fontSize: "8px" }}>TM</sup>
          //                 </p>
          //                 <p>
          //                   <Link to="/terms-condition" className="text-muted">
          //                     Terms of Service
          //                   </Link>
          //                 </p>
          //               </React.Fragment>
          //             )}
          //             <Button
          //               variant="contained"
          //               className="btn-danger text-white mr-10 mb-10"
          //               disabled={activeStep === 0}
          //               onClick={this.handleBack}
          //             >
          //               Back
          //             </Button>
          //             {activeStep === steps.length - 1 ? (
          //               <LoadingButton
          //                 onClickFunc={() => this.validateCard()}
          //                 loading={loading}
          //                 color="success"
          //                 label="Finish"
          //               />
          //             ) : (

          //               <Button
          //                 variant="contained"
          //                 color="primary"
          //                 className="text-white mr-10 mb-10"
          //                 onClick={this.handleNext}
          //               >
          //                 Next
          //               </Button>

          //             )}
          //           </div>
          //         </StepContent>
          //       </Step>
          //     );
          //   })}
          // </Stepper>


        ) : (
          <Paper square elevation={0} className="pl-40">

            <div style={{display:'flex', flex: 1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
              <h1>A verification link has been sent to your email account</h1>
              <p>Please click on the link that has just been sent to your email account to verify your email and continue the registeration process.</p>
              {/* <p>Registration Complete - Login <Link to="/login">here</Link></p> */}
            </div>
       
          </Paper>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { register } = authUser;
  const { loading, success } = register;
  // return { loading, success };

  const { userInfo, companyInfo, email, password, repassword, priceplan, paymentInfo} = register.form;

  return { 
    /*
    * Validating Sign up Process
    */
    loading, success,
    /*
    * User Register Form
    */
    userInfo, companyInfo, email, password, repassword,
    /*
    * Select Plan Form
    */
    priceplan,
    /*
    * Payment Detail Form
    */
    paymentInfo
  };
};

export default connect(
  mapStateToProps,
  { registerUser, handleRegForm, handleRegErrorForm, resetSuccess}
)(RegisterSteps);

