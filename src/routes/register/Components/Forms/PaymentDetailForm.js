import React from "react";
import { connect } from "react-redux";
import MaskedInput from "react-text-mask";
import { Form, FormGroup, Label, Col, Input } from "reactstrap";
import { handleRegForm } from "Actions";

function CreditCardMask(props) {
  return (
    <MaskedInput
      {...props}
      guide={false}
      keepCharPositions={true}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        "-",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        "-",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        "-",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholder="xxxx - xxxx - xxxx - xxxx"
      showMask={false}
    />
  );
}
function CVCmask(props) {
  return (
    <MaskedInput
      {...props}
      className="form-control"
      guide={true}
      keepCharPositions={true}
      mask={[/\d/, /\d/, /\d/]}
      placeholder="123"
      showMask={false}
    />
  );
}
function CCexpiryMask(props) {
  return (
    <MaskedInput
      {...props}
      className="form-control"
      guide={true}
      keepCharPositions={true}
      mask={[/[0-1]/, /[0-9]/, "/", /\d/, /\d/]}
      placeholder="01/12"
      showMask={false}
    />
  );
}

const PaymentDetailForm = props => {
  const { handleRegForm, paymentInfo } = props;
  return (
    <Form>
      <FormGroup row className="has-wrapper">
        <Label for="payment_name" className="fs-13 text-right" sm={2}>
          Name on Card
        </Label>
        <Col sm={4}>
          <Input
            value={paymentInfo.payment_name}
            name="payment_name"
            id="payment_name"
            className="has-input input-md"
            bsSize="sm"
            onChange={e =>
              handleRegForm("payment_name", e.target.value, "paymentInfo")
            }
          />
          <span className="has-icon" style={{ top: "6px" }}>
            <i className="ti-user" />
          </span>
        </Col>
        <Col sm={6} />
      </FormGroup>
      <FormGroup row className="has-wrapper">
        <Label for="payment_no" className="fs-13 text-right" sm={2}>
          Credit Card Number
        </Label>
        <Col sm={4}>
          <Input
            value={paymentInfo.payment_no}
            name="payment_no"
            id="payment_no"
            className="has-input input-md"
            bsSize="sm"
            tag={CreditCardMask}
            onChange={e =>
              handleRegForm("payment_no", e.target.value, "paymentInfo")
            }
          />
          <span className="has-icon" style={{ top: "6px" }}>
            <i className="ti-credit-card" />
          </span>
        </Col>
        <Col sm={6} />
      </FormGroup>
      <FormGroup row className="has-wrapper">
        <Label for="payment_expiry" className="fs-13 text-right" sm={2}>
          Valid To
        </Label>
        <Col sm={2}>
          <Input
            value={paymentInfo.payment_expiry}
            name="payment_expiry"
            id="payment_expiry"
            className="has-input input-md"
            bsSize="sm"
            tag={CCexpiryMask}
            onChange={e =>
              handleRegForm("payment_expiry", e.target.value, "paymentInfo")
            }
          />
          <span className="has-icon" style={{ top: "6px" }}>
            <i className="ti-calendar" />
          </span>
        </Col>
        <Label for="payment_code" className="fs-13 text-right" sm={1}>
          CVC
        </Label>
        <Col sm={1}>
          <Input
            value={paymentInfo.payment_code}
            name="payment_code"
            id="payment_code"
            className="input-md"
            bsSize="sm"
            tag={CVCmask}
            onChange={e =>
              handleRegForm("payment_code", e.target.value, "paymentInfo")
            }
          />
        </Col>
      </FormGroup>
    </Form>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { register } = authUser;
  const { paymentInfo } = register.form;
  return { paymentInfo };
};

export default connect(
  mapStateToProps,
  { handleRegForm }
)(PaymentDetailForm);
