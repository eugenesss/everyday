import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";

const AddressDetails = ({ address, address2, city, state, zip }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Address Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Address" value={address} colSpan={5} />
        </tr>
        <tr>
          <SingleDetail title="Address 2" value={address2} colSpan={5} />
        </tr>
        <tr>
          <SingleDetail title="City" value={city} />
          <SingleDetail title="State" value={state} />
          <SingleDetail title="Zip" value={zip} />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default AddressDetails;
