import React from "react";

const ListSummaryItem = ({ heading, number, positive, percentage }) => {
  return (
    <li className="list-inline-item col">
      <h4>{heading}</h4>
      <h2 className="font-2x">{number}</h2>
      <h4 className="fs-14">
        {console.log(positive)}
        {positive === 1 ? (
          <i className="ti-arrow-up mr-10 text-success" />
        ) : (
          <i className="ti-arrow-down mr-10 text-danger" />
        )}
        <span>{percentage && `${percentage}%`}</span>
      </h4>
    </li>
  );
};

export default ListSummaryItem;
