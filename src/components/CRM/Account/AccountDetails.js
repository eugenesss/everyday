import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const AccountDetails = ({ account }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Account Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value="ownerName" />
          <SingleDetail title="Industry" value="companyName" />
        </tr>
        <tr>
          <SingleDetail title="Office" value="status" />
          <SingleDetail title="Website" value="emailAddress" />
        </tr>
        <tr>
          <SingleDetail title="Fax" value="source" />
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

export default AccountDetails;
