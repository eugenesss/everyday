import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function PersonalInformation(props) {
  const {
    email,
    mobile,
    title,
    source,
    office,
    fax,
    address,
    description,
    ...others
  } = props;
  return (
    <FormInputLayout
      title="Personal Information"
      desc="Storing information of the Customer to better understand them."
      {...others}
    >
      <div className="row">
        <div className="col-5 d-block offset-md-1">
          {email}
          {mobile}
          {title}
        </div>
        <div className="col-5 d-block offset-md-1">
          {source}
          {office}
          {fax}
        </div>
      </div>
      <div className="row">
        <div className="col-11 offset-md-1">{address}</div>
      </div>
      <div className="row">
        <div className="col-11 offset-md-1">{description}</div>
      </div>
    </FormInputLayout>
  );
}

export { PersonalInformation };
