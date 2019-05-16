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
          <SingleDetail title="Owner" value={account.owner.fullName} />
          <SingleDetail
            title="Industry"
            value={account.industry && account.industry.name}
          />
        </tr>
        <tr>
          <SingleDetail title="Office" value={account.office} />
          <SingleDetail title="Website" value={account.website} />
        </tr>
        <tr>
          <SingleDetail title="Fax" value={account.fax} />
        </tr>
        <tr>
          <SingleDetail
            title="Modified By"
            value={
              <NameTimeStamp
                name={account.modifiedBy.fullName}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
          <SingleDetail
            title="Created By"
            value={
              <NameTimeStamp
                name={account.createdBy.fullName}
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
