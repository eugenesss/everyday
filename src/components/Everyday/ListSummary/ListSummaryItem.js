import React from "react";

const ListSummaryItem = ({ heading, number, positive, percentage }) => {
  return (
    <li className="list-inline-item col">
      <h4>{heading}</h4>
      <h2 className="title">{number}</h2>
      <h4>
        {positive ? (
          <i className="ti-arrow-up mr-10 text-success" />
        ) : (
          <i className="ti-arrow-down mr-10 text-danger" />
        )}
        <span>{percentage}%</span>
      </h4>
    </li>
  );
};

export default ListSummaryItem;
