import React from "react";
import FormInputLayout from "Components/Form/Components/Layout/FormInputLayout";

function ShippingInformation(props) {
  const { address, ...others } = props;
  return (
    <FormInputLayout
      title="Shipping Information"
      desc="The key fields to get you started with a new Account record."
      {...others}
    >
      <div className="row">
        <div className="col-11 offset-md-1">{address}</div>
      </div>
    </FormInputLayout>
  );
}

export { ShippingInformation };
