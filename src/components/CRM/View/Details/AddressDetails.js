import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";

const AddressDetails = ({ contact }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Address Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Address" value="Address 1" colSpan={5} />
        </tr>
        <tr>
          <SingleDetail title="Address 2" value="Address 2" colSpan={5} />
        </tr>
        <tr>
          <SingleDetail title="City" value="source" />
          <SingleDetail title="State" value="jobTitle" />
          <SingleDetail title="Zip" value="jobTitle" />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default AddressDetails;
