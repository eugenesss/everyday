import React from "react";
import PricingBlock from "Components/Widgets/PricingBlock";
import Radio from "@material-ui/core/Radio";

// import { connect } from "react-redux";
// import { handleRegForm } from "Actions";

const SelectPlanForm = props => {
  const { priceplan, handleRegForm } = props;
  return (
    <div className="price-list mb-0">
      <div className="row row-eq-height mb-30">
        <PricingBlock
          planType="free"
          type="Basic"
          color="primary"
          description="Secure file sharing and collaboration. Ideal for small teams."
          price="Free"
          users={1}
          features={[
            "100 GB secure storage",
            "2 GB file upload",
            "Minimum 3 users, max 10 users"
          ]}
          radioButton={
            <Radio
              checked={priceplan == "free"}
              onChange={() => {
                handleRegForm("priceplan", "free");
                props.validatePlate("free");
              }}
              value="d"
              color="primary"
              name="radio-button-demo"
              inputProps={{ "aria-label": "D" }}
            />
          }
        />
        <PricingBlock
          planType="premium"
          type="Pro"
          color="everyday-sec"
          description="More power & personalization"
          price={30}
          users={1}
          features={[
            "Unlimited storage",
            "5 GB file upload",
            "Minimum 3 users, max 10 users"
          ]}
          radioButton={
            <Radio
              checked={priceplan == "pro"}
              onChange={() => {
                handleRegForm("priceplan", "pro");
                props.validatePlate("pro");
              }}
              value="d"
              color="secondary"
              name="radio-button-demo"
              inputProps={{ "aria-label": "D" }}
            />
          }
        />
      </div>
    </div>
  );
};
// const mapStateToProps = ({ authUser }) => {
//   const { register } = authUser;
//   const { priceplan } = register.form;
//   return { priceplan };
// };

// export default connect(
//   mapStateToProps,
//   { handleRegForm }
// )(SelectPlanForm);

export default SelectPlanForm;
