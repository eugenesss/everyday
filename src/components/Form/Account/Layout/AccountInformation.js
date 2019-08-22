import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function AccountInformation(props) {
  const { office, website, fax, description, ...others } = props;
  return (
    <FormInputLayout
      title="Account Information"
      desc="The key fields to get you started with a new Account record."
      {...others}
    >
      <div className="row">
        <div className="col-5 d-block offset-md-1">
          {office}
          {website}
        </div>
        <div className="col-5 d-block offset-md-1">{fax}</div>
      </div>
      <div className="row">
        <div className="col-11 offset-md-1">{description}</div>
      </div>
    </FormInputLayout>
  );
}

export { AccountInformation };
