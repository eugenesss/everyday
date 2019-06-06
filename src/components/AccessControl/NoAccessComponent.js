import React from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

const NoAccessComponent = () => {
  return (
    <RctCollapsibleCard>
      <div className={"text-center mt-50 mb-50"}>
        You do not have the required permissions to access this module.
      </div>
    </RctCollapsibleCard>
  );
};

export default NoAccessComponent;
