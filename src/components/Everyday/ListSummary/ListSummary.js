import React from "react";

const ListSummary = ({ children }) => {
  return (
    <ul className="list-inline d-flex align-content-center">{children}</ul>
  );
};

export default ListSummary;
