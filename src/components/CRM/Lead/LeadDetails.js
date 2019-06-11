import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

import LeadInterestLevel from "./LeadInterestLevel";

const LeadDetails = ({ lead }) => {
  return (
    <div className="pb-10">
      <TabsHeader title="Lead Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value={lead.owner && lead.owner.name} />
          <SingleDetail title="Company" value={lead.companyName} />
        </tr>
        <tr>
          <SingleDetail
            title="Status"
            value={lead.status && lead.status.name}
          />
          <SingleDetail
            title="Interest Level"
            value={<LeadInterestLevel interest={lead.interest} />}
          />
        </tr>
        <tr>
          <SingleDetail
            title="Source"
            value={lead.source && lead.source.name}
          />
          <SingleDetail
            title="Industry"
            value={lead.industry && lead.industry.name}
          />
        </tr>
        <tr>
          <SingleDetail title="Mobile" value={lead.baseContact.mobile} />
          <SingleDetail title="Email" value={lead.baseContact.email} />
        </tr>
        <tr>
          <SingleDetail title="Office" value={lead.baseContact.phone} />
          <SingleDetail title="Fax" value={lead.baseContact.fax} />
        </tr>
        <tr>
          <SingleDetail title="Job Title" value={lead.baseContact.title} />
        </tr>
        <tr>
          <SingleDetail title="Website" value={lead.baseContact.website} />
        </tr>
        <tr>
          <SingleDetail
            title="Modified By"
            value={
              <NameTimeStamp
                name={lead.modifiedBy && lead.modifiedBy.name}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
          <SingleDetail
            title="Created By"
            value={
              <NameTimeStamp
                name={lead.createdBy && lead.createdBy.name}
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
