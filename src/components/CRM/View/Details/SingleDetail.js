import React from "react";

const SingleDetail = ({ title, value, colSpan }) => {
  return (
    <React.Fragment>
      <td className="text-right">
        <strong>{title}</strong>
      </td>
      <td colSpan={colSpan}>{value}</td>
    </React.Fragment>
  );
};

export default SingleDetail;
