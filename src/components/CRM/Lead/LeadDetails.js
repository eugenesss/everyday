import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const LeadDetails = ({ lead }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Lead Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value="ownerName" />
          <SingleDetail title="Company" value="companyName" />
        </tr>
        <tr>
          <SingleDetail title="Status" value="status" />
          <SingleDetail title="Email" value="emailAddress" />
        </tr>
        <tr>
          <SingleDetail title="Source" value="source" />
          <SingleDetail title="Job Title" value="jobTitle" />
        </tr>
        <tr>
          <SingleDetail title="Mobile" value="1234-5678" />
        </tr>
        <tr>
          <SingleDetail title="Office" value="office" />
          <SingleDetail title="Fax" value="fax" />
        </tr>
        <tr>
          <SingleDetail title="Industry" value="indsx" />
          <SingleDetail title="Interest Level" value="interest" />
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

export default LeadDetails;
