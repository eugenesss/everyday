import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const AccountDetails = ({ account }) => {
  return (
    <div className="pb-10">
      <TabsHeader title="Account Details" />
      <DetailsTable>
        <tr>
          <SingleDetail
            title="Owner"
            value={account.userInfo && account.userInfo.name}
          />
          <SingleDetail
            title="Industry"
            value={account.industry && account.industry.name}
          />
        </tr>
        <tr>
          <SingleDetail title="Office" value={account.baseContact.office} />
          <SingleDetail title="Website" value={account.baseContact.website} />
        </tr>
        <tr>
          <SingleDetail title="Fax" value={account.baseContact.fax} />
        </tr>
        <tr>
          <SingleDetail
            title="Modified By"
            value={
              <NameTimeStamp
                name={account.updaterInfo && account.updaterInfo.name}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
          <SingleDetail
            title="Created By"
            value={
              <NameTimeStamp
                name={account.creatorInfo && account.creatorInfo.name}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default AccountDetails;
