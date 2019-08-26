import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function KeyInformation(props) {
  const { name, amount, closingDate, owner, account, stage, ...others } = props;
  return (
    <FormInputLayout
      title="Key Information"
      desc="The key fields to get you started with a new Deal record."
      {...others}
    >
      <div className="row">
        <div className="col-5 d-block offset-md-1">
          {name}
          {amount}
          {closingDate}
        </div>
        <div className="col-5 d-block offset-md-1">
          {owner}
          {account}
          {stage}
        </div>
      </div>
    </FormInputLayout>
  );
}

export { KeyInformation };
