import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";

const AddressDetails = ({ address_1, address_2, city, state, zip }) => {
  return (
    <div className="pb-10">
      <TabsHeader title="Address Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Address" value={address_1} colSpan={5} />
        </tr>
        <tr>
          <SingleDetail title="Address 2" value={address_2} colSpan={5} />
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
