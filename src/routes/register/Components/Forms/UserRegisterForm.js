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
        <FormGroup row className="has-wrapper">
          <Label for="firstName" className="fs-13 text-right" sm={2}>
            First Name
          </Label>
          <Col sm={4}>
            <Input
              value={firstName}
              name="firstName"
              id="firstName"
              className="has-input input-md"
              placeholder="Your Good Name"
              bsSize="sm"
              onChange={e =>
                props.handleRegForm("firstName", e.target.value, "userInfo")
              }
            />
            <span className="has-icon" style={{ top: "8px" }}>
              <i className="ti-user" />
            </span>
          </Col>
          <Label for="lastName" className="fs-13 text-right" sm={2}>
            Last Name
          </Label>
          <Col sm={4}>
            <Input
              value={lastName}
              name="lastName"
              id="lastName"
              className="has-input input-md"
              placeholder="Your Last Name"
              bsSize="sm"
              onChange={e =>{
                props.handleRegForm("lastName", e.target.value, "userInfo")
              }}
            />
            <span className="has-icon" style={{ top: "8px" }}>
              <i className="ti-user" />
            </span>
          </Col>
          <Col sm={1} />
        </FormGroup>
        <FormGroup row className="has-wrapper">
          <Label for="lastName" className="fs-13 text-right" sm={2}>
            Email
          </Label>
          <Col sm={4}>
            <Input
              type="email"
              value={email}
              name="email"
              id="email"
              className="has-input input-md"
              placeholder="Email Address"
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
  
            <FormFeedback >Oh noes! You need to input a valid email addresss!</FormFeedback>
            <FormFeedback valid>Sweet! Great email you have there!</FormFeedback>
    
          </Col>
         

          <Label for="lastName" className="fs-13 text-right" sm={2}>
            Company Name
          </Label>
          <Col sm={4}>
            <Input
              value={name}
              name="companyName"
              id="companyName"
              className="has-input input-md"
              placeholder="Who do you work for?"
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
        </FormGroup>

        <FormGroup row className="has-wrapper">
          <Label for="lastName" className="fs-13 text-right" sm={2}>
            Password
          </Label>
          <Col sm={4}>
            <Input
              type="password"
              value={password}
              name="password"
              id="password"
              className="has-input input-md"
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
        </FormGroup>
        {password && (
          <FormGroup row className="has-wrapper">
            <Label for="lastName" className="fs-13 text-right" sm={2}>
              Re Enter Password
            </Label>
            <Col sm={4}>
              <Input
                type="password"
                defaultValue={repassword}
                name="repassword"
                id="rePassword"
                className="has-input input-md"
                placeholder="Re-enter Password"
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
          </FormGroup>
        )}
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