import React from "react";
import ViewSectionLayout from "Components/CRM/View/Layout/ViewSectionLayout";

const DetailsLayout = ({ title, bgColorClass, children }) => {
  return (
    <ViewSectionLayout title={title} bgColorClass={bgColorClass}>
      <div className="my-20 row justify-content-md-center">
        <div className="col-lg-8">
          <div className="row mt-30 mb-15">{children}</div>
        </div>
      </div>
    </ViewSectionLayout>
  );
};

export { DetailsLayout };
