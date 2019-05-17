import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";

const DescriptionDetails = ({ desc }) => {
  return (
    <div className="pb-10">
      <TabsHeader title="Description" />
      <DetailsTable>
        <tr>
          <SingleDetail left title="Description" value={desc} colSpan={5} />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default DescriptionDetails;
