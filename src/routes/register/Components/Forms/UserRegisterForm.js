import React from "react";
import {
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormFeedback,
  FormText
} from "reactstrap";
// import { connect } from "react-redux";
// import { handleRegForm } from "Actions";



const RegisterForm = props => {

  const { userInfo, companyInfo, email, password, repassword } = props;
  const { firstName, lastName } = userInfo;
  const { name } = companyInfo;

  // console.log(firstName)
  // Parent Function to Handle Email Validation
  const {emailState, validateEmail, passwordState, validatePassword} = props;

  // Email Validation 
  // const emailValidator = (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email))

  return (
    <React.Fragment>
      <Form>
        <FormGroup row className="has-wrapper" style={{display:'flex', justifyContent:'center', marginBottom: '1rem'}}>

          <div>
            <Label for="firstName" className="mb-0 text-black fs-13 text-left" sm={12} style={{color: 'rgba(0,0,0,0.6)'}}>
              First name
            </Label>
            <Col sm={12} >
              <Input
                style={{border:'1px solid rgba(0,0,0,0.08)', borderRadius: 10}}
                value={firstName}
                name="firstName"
                id="firstName"
                className="has-input input-md mb-0 text-black"
                placeholder="Your first name"
                bsSize="sm"
                onChange={e =>
                  props.handleRegForm("firstName", e.target.value, "userInfo")
                }
              />
              <span className="has-icon" style={{ top: "8px" }}>
                <i className="ti-user" />
              </span>
            </Col>
          </div>

          <div>
            <Label for="lastName" className=" mb-0 text-black fs-13 text-left" sm={12} style={{color: 'rgba(0,0,0,0.6)'}}>
              Last name
            </Label>
            <Col sm={12}>
              <Input
                style={{border:'1px solid rgba(0,0,0,0.08)', borderRadius: 10}}
                value={lastName}
                name="lastName"
                id="lastName"
                className="has-input input-md mb-0 text-black"
                placeholder="Your last name"
                bsSize="sm"
                onChange={e =>{
                  props.handleRegForm("lastName", e.target.value, "userInfo")
                }}
              />
              <span className="has-icon" style={{ top: "8px" }}>
                <i className="ti-user" />
              </span>
            </Col>
          </div>


        </FormGroup>
        
        <FormGroup row className="has-wrapper" style={{display:'flex', justifyContent:'center', marginBottom: '1rem'}}>

          <div>
            <Label for="lastName" className="mb-0 text-black  fs-13 text-left" sm={12} style={{color: 'rgba(0,0,0,0.6)'}}>
              Email
            </Label>
            <Col sm={12}>
              <Input
                style={{border:'1px solid rgba(0,0,0,0.08)', borderRadius: 10}}
                type="email"
                value={email}
                name="email"
                id="email"
                className="has-input input-md mb-0 text-black"
                placeholder="Email address"
                bsSize="sm"
                onChange={e => {
                  props.handleRegForm("email", e.target.value)
                }}
                onBlur={() => validateEmail(email)}
                valid={ emailState === 'has-success' }
                invalid={ emailState === 'has-danger' }
              />
              <span className="has-icon" style={{ top: "8px" }}>
                <i className="ti-email" />
              </span>
    
              <FormFeedback>Need a valid email addresss!</FormFeedback>
              <FormFeedback valid>Tasty email you have there!</FormFeedback>
            </Col>
          </div>

          <div>
            <Label for="lastName" className="mb-0 text-black fs-13 text-left" sm={12} style={{color: 'rgba(0,0,0,0.6)'}}>
              Company name
            </Label>
            <Col sm={12}>
              <Input
                style={{border:'1px solid rgba(0,0,0,0.08)', borderRadius: 10}}
                value={name}
                name="companyName"
                id="companyName"
                className="has-input input-md mb-0 text-black"
                placeholder="Who do you work with?"
                bsSize="sm"
                onChange={e =>
                  props.handleRegForm("name", e.target.value, "companyInfo")
                }
              />
              <span className="has-icon" style={{ top: "8px" }}>
                <i className="ti-briefcase" />
              </span>
              {/* <FormText>Example help text that remains unchanged.</FormText> */}
            </Col>
          </div>
        </FormGroup>


        <FormGroup row className="has-wrapper" style={{display:'flex', justifyContent:'center', marginBottom: '1rem'}}>

          <div>
            <Label for="lastName" className="mb-0 text-black fs-13 text-left" sm={12} style={{color: 'rgba(0,0,0,0.6)'}}>
              Password
            </Label>
            <Col sm={12}>
              <Input
                style={{border:'1px solid rgba(0,0,0,0.08)', borderRadius: 10}}
                type="password"
                value={password}
                name="password"
                id="password"
                className="has-input input-md mb-0 text-black"
                placeholder="Password"
                bsSize="sm"
                onChange={e => {
                  props.handleRegForm("password", e.target.value)
                  validatePassword(e.target.value, repassword)
                }}
              />
              <span className="has-icon" style={{ top: "8px" }}>
                <i className="ti-lock" />
              </span>
            </Col>
          </div>

          <div>
            <Label for="lastName" className="mb-0 text-black fs-13 text-left" sm={12} style={{color: 'rgba(0,0,0,0.6)'}}>
              Retype password
            </Label>
            <Col sm={12} style={{}}>
              <Input
                style={{border:'1px solid rgba(0,0,0,0.08)', borderRadius: 10}}
                type="password"
                defaultValue={repassword}
                name="repassword"
                id="rePassword"
                className="has-input input-md mb-0 text-black"
                placeholder="Retype password"
                bsSize="sm"
                onChange={e => {
                  props.handleRegForm("repassword", e.target.value)
                  validatePassword(password, e.target.value)
                }}
                valid={ passwordState === 'has-success' }
                invalid={ passwordState === 'has-danger' }
              />
              <span className="has-icon" style={{ top: "8px" }}>
                <i className="ti-lock" />
              </span>
              <FormFeedback >Oh noes! The password needs to match</FormFeedback>
              <FormFeedback valid>Sweet! The password match!</FormFeedback>
            </Col>
          </div>
          
        </FormGroup>

       

      </Form>
    </React.Fragment>
  );
};


// const mapStateToProps = ({ authUser }) => {
//   const { register } = authUser;
//   const { userInfo, companyInfo, email, password, repassword } = register.form;
//   return { userInfo, companyInfo, email, password, repassword };
// };

// export default connect(
//   mapStateToProps,
//   { handleRegForm }
// )(RegisterForm);

export default RegisterForm