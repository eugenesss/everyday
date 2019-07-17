import React from "react";
import {
  DetailsLayout,
  SingleDetail
} from "Components/CRM/View/Layout/Details";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const AccountDetails = ({ account }) => {
  return (
    <DetailsLayout title="Account Details" bgColorClass="bg-danger">
      <SingleDetail
        title="Owner"
        value={account.userInfo && account.userInfo.name}
      />
      <SingleDetail title="Industry" value={account.industryInfo} />
      <SingleDetail title="Office" value={account.baseContact.phone} />
      <SingleDetail title="Website" value={account.baseContact.website} />
      <SingleDetail title="Fax" value={account.baseContact.fax} />
      <SingleDetail title="" value="" />
      <SingleDetail
        title="Modified By"
        value={
          <NameTimeStamp
            name={account.updaterInfo && account.updaterInfo.name}
            timeStamp={account.updatedAt}
          />
        }
      />
      <SingleDetail
        title="Created By"
        value={
          <NameTimeStamp
            name={account.creatorInfo && account.creatorInfo.name}
            timeStamp={account.createdAt}
          />
        }
      />
    </DetailsLayout>
  );
};

export default AccountDetails;
