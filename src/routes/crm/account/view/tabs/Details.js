import React from "react";
import BgCard from "Components/Everyday/BgCard";
import EditableInput from "Components/Everyday/Profile/Details/EditableInput";

import {
  KeyInformation,
  AccountInformation,
  ShippingInformation
} from "Components/Form/Account//Layout";

function AccountDetailsTab(props) {
  const { acct } = props;
  return (
    <BgCard fullBlock>
      <KeyInformation
        fullWidth
        name={<EditableInput label="Name" value={acct.baseContact.name} />}
        owner={<EditableInput label="Owner" value={acct.userInfo.name} />}
        industry={<EditableInput label="Industry" value={acct.industryInfo && acct.industryInfo.name} />}
      />
      <hr />
      <AccountInformation
        fullWidth
        office={<EditableInput label="Office" value={acct.baseContact.phone} />}
        website={<EditableInput label="Website" value={acct.baseContact.website} />}
        fax={<EditableInput label="Fax" value={acct.baseContact.fax} />}
        description={<EditableInput label="Description" value={acct.baseContact.info} />}
      />
      <hr />
      <ShippingInformation
        fullWidth
        address={<EditableInput label="Address" value={acct.fullAddress} />}
      />
    </BgCard>
  );
}

export default AccountDetailsTab;
