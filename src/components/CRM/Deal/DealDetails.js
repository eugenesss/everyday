import React from "react";
import Moment from "moment";
import NumberFormat from "react-number-format";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";
import NameTimeStamp from "Components/Everyday/NameTimeStamp";

const DealDetails = ({ deal }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Deal Details" />
      <DetailsTable>
        <tr>
          <SingleDetail title="Owner" value={deal.owner.fullName} />
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
        </tr>
        <tr>
          <SingleDetail title="Name" value={deal.name} />
          <SingleDetail title="Stage" value={deal.stage.name} />
        </tr>
        <tr>
          <SingleDetail
            title="Closing Date"
            value={Moment(deal.closingDate).format("D MMMM YYYY")}
          />
          <SingleDetail
            title="Source"
            value={deal.source && deal.source.name}
          />
        </tr>
        <tr>
          <SingleDetail title="Account" value={deal.account.name} />
          <SingleDetail title="Type" value={deal.type && deal.type.name} />
        </tr>
        <tr>
          <SingleDetail
            title="Customer"
            value={deal.customer && deal.customer.fullName}
          />
        </tr>
        <tr>
          <SingleDetail
            title="Modified By"
            value={
              <NameTimeStamp
                name={deal.modifiedBy.fullName}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
          <SingleDetail
            title="Created By"
            value={
              <NameTimeStamp
                name={deal.createdBy.fullName}
                timeStamp="08-05-2019 09:30 "
              />
            }
          />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default DealDetails;
