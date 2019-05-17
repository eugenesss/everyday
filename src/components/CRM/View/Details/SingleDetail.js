import React from "react";

const SingleDetail = ({ left, title, value, colSpan }) => {
  return (
    <React.Fragment>
      <td className={left ? "" : "text-right"}>
        <strong>{title}</strong>
      </td>
      <td colSpan={colSpan}>{value}</td>
    </React.Fragment>
  );
};

export default SingleDetail;
