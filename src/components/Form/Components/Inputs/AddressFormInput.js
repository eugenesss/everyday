import React from "react";
import FormInput from "Components/Form/Components/FormInput";

const AddressFormInput = ({
  handleChange,
  address_1,
  address_2,
  city,
  state,
  zip
}) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-11">
          <FormInput
            label="Address 1"
            value={address_1}
            handleChange={e => handleChange("address_1", e.target.value)}
          />
        </div>
        <div className="col-11">
          <FormInput
            label="Address 2"
            value={address_2}
            handleChange={e => handleChange("address_2", e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <FormInput
            label="City"
            value={city}
            handleChange={e => handleChange("city", e.target.value)}
          />
        </div>
        <div className="col-5 offset-md-1">
          <FormInput
            label="Zip"
            value={zip}
            handleChange={e => handleChange("zip", e.target.value)}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddressFormInput;
