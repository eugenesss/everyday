import React from "react";
import TabsHeader from "Components/Everyday/Tabs/TabsHeader";

const ViewSectionLayout = ({ title, bgColorClass, children }) => {
  return (
    <div className="mb-40">
      <TabsHeader title={title} customClasses={bgColorClass} />
      {children}
    </div>
  );
};

export default ViewSectionLayout;
