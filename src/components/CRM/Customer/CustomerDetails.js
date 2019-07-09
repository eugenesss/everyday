import React from "react";
import { Link } from "react-router-dom";
import {
  DetailsLayout,
  SingleDetail
} from "Components/CRM/View/Layout/Details";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

import { singleAccount } from "Helpers/url/crm";

const CustomerDetails = ({ customer }) => {
  return (
    <DetailsLayout title="Customer Details" bgColorClass="bg-danger">
      <SingleDetail
        title="Owner"
        value={customer.userInfo && customer.userInfo.name}
      />
      <SingleDetail
        title="Account"
        value={
          customer.accountInfo && (
            <Link to={singleAccount(customer.accountInfo.id)}>
              {customer.accountInfo.name}
            </Link>
          )
        }
      />
      <SingleDetail
        title="Source"
        value={customer.source && customer.source.name}
      />
      <SingleDetail title="Mobile" value={customer.baseContact.mobile} />
      <SingleDetail title="Email" value={customer.baseContact.email} />
      <SingleDetail title="Office" value={customer.baseContact.phone} />
      <SingleDetail title="Fax" value={customer.baseContact.fax} />
      <SingleDetail title="Job Title" value={customer.baseContact.title} />
      <SingleDetail
        title="Modified By"
        value={
          <NameTimeStamp
            name={customer.updaterInfo && customer.updaterInfo.name}
            timeStamp={customer.updatedAt}
          />
        }
      />
      <SingleDetail
        title="Created By"
        value={
          <NameTimeStamp
            name={customer.creatorInfo && customer.creatorInfo.name}
            timeStamp={customer.createdAt}
          />
        }
      />
    </DetailsLayout>
  );
};

export default CustomerDetails;
