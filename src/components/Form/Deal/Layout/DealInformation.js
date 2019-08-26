import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function DealInformation(props) {
  const { source, customer, type, description, ...others } = props;
  return (
    <FormInputLayout
      title="Deal Information"
      desc="The key fields to get you started with a new Deal record."
      {...others}
    >
      <div className="row">
        <div className="col-5 d-block offset-md-1">
          {source}
          {customer}
        </div>
        <div className="col-5 d-block offset-md-1">{type}</div>
      </div>
      <div className="row">
        <div className="col-11 offset-md-1">{description}</div>
      </div>
    </FormInputLayout>
  );
}

export { DealInformation };
