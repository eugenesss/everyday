import React from "react";
import Avatar from "Components/Everyday/Avatar";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import SctErrorMessage from "Components/Everyday/Error/SctErrorMessage";

const LeadCard = ({ lead, loading }) => {
  return (
    <div className="lazy-up">
      <div className="card b-0" style={{ minHeight: "150px" }}>
        {loading ? (
          <RctSectionLoader />
        ) : lead ? (
          <React.Fragment>
            <div className="media" style={{ padding: "1.5% 4%" }}>
              <div className="media-left mr-50 mt-10">
                <Avatar fullName="Admin Admin Test" size={100} />
              </div>
              <div className="media-body d-flex justify-content-between mlr-10">
                <div className="mt-15">
                  <h1 className="mb-5">admin admin</h1>
                  <p className="mb-0 d-block">
                    <span className="mr-1">companyName</span>
                  </p>
                  <p className="mb-5">
                    <span className="fs-12">Status</span>
                  </p>
                  <span className="d-block fs-14">Owner - owner.fullName</span>
                </div>
              </div>
            </div>
            <div className="w-100 py-10 text-white bg-secondary" />
          </React.Fragment>
        ) : (
          <SctErrorMessage heading="Error in retreiving lead detail." />
        )}
      </div>
    </div>
  );
};

export default LeadCard;
