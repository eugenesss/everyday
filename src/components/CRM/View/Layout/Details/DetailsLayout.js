import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

const DetailsLayout = ({ title, bgColorClass, children }) => {
  return (
    <React.Fragment>
      <TabsHeader title={title} customClasses={bgColorClass} />
      <div className="my-20 row justify-content-md-center">
        <div className="col-lg-8">
          <div className="row mt-30 mb-15">{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { DetailsLayout };
