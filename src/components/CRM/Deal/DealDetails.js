import React from "react";
import NumberFormat from "react-number-format";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const DealDetails = ({ deal }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Deal Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value="ownerName" />
          <SingleDetail
            title="Amount"
            value={
              <NumberFormat
                value={10000}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            }
          />
        </tr>
        <tr>
          <SingleDetail title="Name" value="dealName" />
          <SingleDetail title="Stage" value="stage" />
        </tr>
        <tr>
          <SingleDetail title="Closing Date" value="source" />
          <SingleDetail title="Source" value="jobTitle" />
        </tr>
        <tr>
          <SingleDetail title="Account" value="office" />
          <SingleDetail title="Type" value="fax" />
        </tr>
        <tr>
          <SingleDetail title="Customer" value="office" />
        </tr>
        <tr>
          <SingleDetail
            title="Modified By"
            value={
              <NameTimeStamp name="admin admin" timeStamp="08-05-2019 09:30 " />
            }
          />
          <SingleDetail
            title="Created By"
            value={
              <NameTimeStamp name="admin admin" timeStamp="08-05-2019 09:30 " />
            }
          />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default DealDetails;
