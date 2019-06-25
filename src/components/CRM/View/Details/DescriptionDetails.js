import React from "react";

import {
  DetailsLayout,
  SingleDetail
} from "Components/CRM/View/Layout/Details";

const DescriptionDetails = ({ desc }) => {
  return (
    <DetailsLayout title="Description" bgColorClass="bg-primary">
      <SingleDetail
        title="Description"
        value={
          desc &&
          desc.split("\n").map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })
        }
        fullCol
      />
    </DetailsLayout>
  );
};

export default DescriptionDetails;
