import React from "react";
import { withRouter } from "react-router-dom";
import { PeopleOutline } from "@material-ui/icons";
import {
  Wrapper,
  Contact,
  Info,
  KeyDetails
} from "Components/Everyday/Layout/View/ProfileCard";
import NumberFormat from "react-number-format";
import { singleAccount, singleCustomer } from "Helpers/crmURL";

function QuotationCard(props) {
  const { quotation } = props;

  return (
    <Wrapper>
      <Contact noAvatar name={"Invoice"} subHeading={`#${quotation.quoteID}`} />

      <div className="d-flex flex-column">
        <div>{`Version: ${quotation.version}`}</div>
        <div>{`State: ${quotation.state}`}</div>
      </div>

      <KeyDetails
        keyDetails={[
          {
            label: "Client",
            value: quotation.accountId && quotation.accountId.name
          },
          {
            label: "Owner",
            value: quotation.userInfo && quotation.userInfo.name
          }
        ]}
      />
    </Wrapper>
  );
}

export default QuotationCard;
