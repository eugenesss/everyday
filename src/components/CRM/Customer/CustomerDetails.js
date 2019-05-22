import React from "react";
import { Link } from "react-router-dom";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const CustomerDetails = ({ customer }) => {
  return (
    <div className="pb-10">
      <TabsHeader title="Customer Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value={customer.owner.name} />
          <SingleDetail
            title="Account"
            value={
              customer.account && (
                <Link to={`/app/crm/accounts/${customer.account.id}`}>
                  {customer.account.name}
                </Link>
              )
            }
          />
        </tr>
        <tr>
          <SingleDetail
            title="Source"
            value={customer.source && customer.source.name}
          />
          <SingleDetail title="Email" value={customer.email} />
        </tr>
        <tr>
          <SingleDetail title="Mobile" value={customer.mobile} />
          <SingleDetail title="Job Title" value={customer.jobTitle} />
        </tr>
        <tr>
          <SingleDetail title="Office" value={customer.office} />
          <SingleDetail title="Fax" value={customer.fax} />
        </tr>
        <tr>
          <SingleDetail
            title="Modified By"
            value={
              <NameTimeStamp
                name={customer.modifiedBy.name}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
          <SingleDetail
            title="Created By"
            value={
              <NameTimeStamp
                name={customer.createdBy.name}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default CustomerDetails;
