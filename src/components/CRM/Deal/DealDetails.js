import React from "react";
import { Link } from "react-router-dom";
import {
  DetailsLayout,
  SingleDetail
} from "Components/CRM/View/Layout/Details";
import NumberFormat from "react-number-format";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";
import { getTheDate } from "Helpers/helpers";

const DealDetails = ({ deal }) => {
  return (
    <DetailsLayout title="Deal Details" bgColorClass="bg-danger">
      <SingleDetail title="Owner" value={deal.userInfo && deal.userInfo.name} />
      <SingleDetail
        title="Amount"
        value={
          <NumberFormat
            value={deal.amount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        }
      />
      <SingleDetail title="Name" value={deal.name} />
      <SingleDetail title="Stage" value={deal.stage.name} />
      <SingleDetail title="Closing Date" value={getTheDate(deal.closingDate)} />
      <SingleDetail title="Source" value={deal.source && deal.source.name} />
      <SingleDetail
        title="Account"
        value={
          deal.accountInfo && (
            <Link to={`/app/crm/accounts/${deal.accountInfo.id}`}>
              {deal.accountInfo.name}
            </Link>
          )
        }
      />
      <SingleDetail title="Type" value={deal.type && deal.type.name} />
      <SingleDetail
        title="Customer"
        value={
          deal.customerInfo && (
            <Link to={`/app/crm/customers/${deal.customerInfo.id}`}>
              {deal.customerInfo.name}
            </Link>
          )
        }
      />
      <SingleDetail title="" value="" />
      <SingleDetail
        title="Modified By"
        value={
          <NameTimeStamp
            name={deal.updaterInfo && deal.updaterInfo.name}
            timeStamp={deal.updatedAt}
          />
        }
      />
      <SingleDetail
        title="Created By"
        value={
          <NameTimeStamp
            name={deal.creatorInfo && deal.creatorInfo.name}
            timeStamp={deal.createdAt}
          />
        }
      />
    </DetailsLayout>
  );
};

export default DealDetails;
