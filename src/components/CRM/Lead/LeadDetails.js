import React from "react";
import {
  DetailsLayout,
  SingleDetail
} from "Components/CRM/View/Layout/Details";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const LeadDetails = ({ lead }) => {
  return (
    <DetailsLayout title="Lead Details" bgColorClass="bg-danger">
      <SingleDetail title="Owner" value={lead.userInfo && lead.userInfo.name} />
      <SingleDetail title="Company" value={lead.companyName} />
      <SingleDetail title="Status" value={lead.statusInfo && lead.statusInfo.name} />
      <SingleDetail title="Interest" value={lead.interest} />
      <SingleDetail title="Source" value={lead.sourceInfo && lead.sourceInfo.name} />
      <SingleDetail
        title="Industry"
        value={lead.industryInfo && lead.industryInfo.name}
      />
      <SingleDetail title="Mobile" value={lead.baseContact.mobile} />
      <SingleDetail title="Email" value={lead.baseContact.email} />
      <SingleDetail title="Office" value={lead.baseContact.phone} />
      <SingleDetail title="Fax" value={lead.baseContact.fax} />
      <SingleDetail title="Title" value={lead.baseContact.title} />
      <SingleDetail title="" value={""} />
      <SingleDetail title="Website" value={lead.baseContact.website} />
      <SingleDetail title="" value={""} />
      <SingleDetail
        title="Modified By"
        value={
          <NameTimeStamp
            name={lead.updaterInfo && lead.updaterInfo.name}
            timeStamp={lead.updatedAt}
          />
        }
      />
      <SingleDetail
        title="Created By"
        value={
          <NameTimeStamp
            name={lead.creatorInfo && lead.creatorInfo.name}
            timeStamp={lead.createdAt}
          />
        }
      />
    </DetailsLayout>
  );
};

export default LeadDetails;
