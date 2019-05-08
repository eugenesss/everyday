import React from "react";

const ListSummary = ({ children }) => {
  return (
    <div className="px-10 py-10">
      <ul className="list-inline d-flex align-content-center">{children}</ul>
    </div>
  );
};

export default ListSummary;
