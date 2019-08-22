import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function KeyInformation(props) {
  const { name, industry, owner, ...others } = props;
  return (
    <FormInputLayout
      title="Key Information"
      desc="The key fields to get you started with a new Account record."
      {...others}
    >
      <div className="row">
        <div className="col-5 d-block offset-md-1">
          {name}
          {industry}
        </div>
        <div className="col-5 d-block offset-md-1">{owner}</div>
      </div>
    </FormInputLayout>
  );
}

export { KeyInformation };
