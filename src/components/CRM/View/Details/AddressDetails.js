import React from "react";
import {
  DetailsLayout,
  SingleDetail,
  SingleDetailVariation
} from "Components/CRM/View/Layout/Details";

const AddressDetails = ({ addressDetails }) => {
  return (
    <DetailsLayout title="Address Details" bgColorClass="bg-secondary">
      <SingleDetail title="Address" value={addressDetails.address_1} fullCol />
      <SingleDetail
        title="Address 2"
        value={addressDetails.address_2}
        fullCol
      />
      <SingleDetailVariation
        title="City"
        value={addressDetails.city}
        colClassTitle="col"
        colClassValue="col"
      />
      <SingleDetailVariation
        title="State"
        value={addressDetails.state}
        colClassTitle="col"
        colClassValue="col"
      />
      <SingleDetailVariation
        title="Zip"
        value={addressDetails.zip}
        colClassTitle="col"
        colClassValue="col"
      />
    </DetailsLayout>
  );
};

export default AddressDetails;
