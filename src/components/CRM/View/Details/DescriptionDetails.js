import React from "react";
import DetailsHeader from "Components/CRM/View/Details/DetailsHeader";
import SingleDetail from "Components/CRM/View/Details/SingleDetail";
import DetailsTable from "Components/CRM/View/Details/DetailsTable";

const DescriptionDetails = ({ desc }) => {
  return (
    <div className="pb-10">
      <DetailsHeader title="Description" />
      <DetailsTable>
        <tr>
          <SingleDetail
            title="Description"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id felis ut sapien finibus vestibulum. Ut eget faucibus ligula. Integer vitae vehicula est. 
            Aenean id neque enim. Fusce tempus nibh at augue feugiat, at aliquet elit sollicitudin. Fusce tellus massa, sollicitudin sit amet malesuada nec, sagittis dignissim neque. Nunc lacinia placerat est, a euismod odio sagittis nec. Aenean rhoncus lorem eget felis tristique facilisis. Vivamus convallis, justo nec consectetur laoreet, felis ante euismod neque, sit amet condimentum dolor justo fringilla enim. Donec pulvinar nulla non malesuada sagittis. "
            colSpan={5}
          />
        </tr>
      </DetailsTable>
    </div>
  );
};

export default DescriptionDetails;
