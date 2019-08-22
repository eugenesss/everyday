import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function KeyInformation(props) {
  const { firstName, lastName, owner, account, ...others } = props;
  return (
    <FormInputLayout
      title="Key Information"
      desc="The key fields to get you started with a new Customer record."
      {...others}
    >
      <div className="row">
        <div className="col-5 d-block offset-md-1">
          {firstName}
          {lastName}
        </div>
        <div className="col-5 d-block offset-md-1">
          {owner}
          {account}
        </div>
      </div>
    </FormInputLayout>
  );
}

export { KeyInformation };
