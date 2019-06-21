import React from "react";

const TabsHeader = ({ title, customClasses }) => {
  return (
    <div
      className={`align-items-center text-center py-10 text-white ${customClasses}`}
    >
      <h3 style={{ width: "100%", marginTop: "0px", marginBottom: "0px" }}>
        {title}
      </h3>
    </div>
  );
};

export default TabsHeader;
