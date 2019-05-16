import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

import LeadInterestLevel from "./LeadInterestLevel";

const LeadDetails = ({ lead }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Lead Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value={lead.owner.fullName} />
          <SingleDetail title="Company" value={lead.companyName} />
        </tr>
        <tr>
          <SingleDetail title="Status" value={lead.status.name} />
          <SingleDetail title="Email" value={lead.email} />
        </tr>
        <tr>
          <SingleDetail
            title="Source"
            value={lead.source && lead.source.name}
          />
          <SingleDetail title="Job Title" value={lead.jobTitle} />
        </tr>
        <tr>
          <SingleDetail title="Mobile" value={lead.mobile} />
        </tr>
        <tr>
          <SingleDetail title="Office" value={lead.office} />
          <SingleDetail title="Fax" value={lead.fax} />
        </tr>
        <tr>
          <SingleDetail
            title="Industry"
            value={lead.industry && lead.industry.name}
          />
          <SingleDetail
            title="Interest Level"
            value={<LeadInterestLevel interest={lead.interest} />}
          />
        </tr>
        <tr>
          <SingleDetail
            title="Modified By"
            value={
              <NameTimeStamp
                name={lead.modifiedBy.fullName}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
          <SingleDetail
            title="Created By"
            value={
              <NameTimeStamp
                name={lead.createdBy.fullName}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default LeadDetails;
