import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function LeadInformation(props) {
  const {
    email,
    title,
    interest,
    mobile,
    source,
    description,
    ...others
  } = props;
  return (
    <FormInputLayout
      title="Lead Information"
      desc="This information is used to contact leads and will be transferred to Customer on successful conversion."
      {...others}
    >
      <div className="row">
        <div className="col-5 d-block offset-md-1">
          {email}
          {title}
          {interest}
        </div>
        <div className="col-5 d-block offset-md-1">
          {mobile}
          {source}
        </div>
      </div>
      <div className="row">
        <div className="col-11 d-block offset-md-1">{description}</div>
      </div>
    </FormInputLayout>
  );
}

export { LeadInformation };
