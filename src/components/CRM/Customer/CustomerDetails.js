import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const CustomerDetails = ({ customer }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Customer Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value="ownerName" />
          <SingleDetail title="Account" value="companyName" />
        </tr>
        <tr>
          <SingleDetail title="Source" value="status" />
          <SingleDetail title="Email" value="emailAddress" />
        </tr>
        <tr>
          <SingleDetail title="Mobile" value="source" />
          <SingleDetail title="Job Title" value="jobTitle" />
        </tr>
        <tr>
          <SingleDetail title="Office" value="office" />
          <SingleDetail title="Fax" value="fax" />
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

export default CustomerDetails;
