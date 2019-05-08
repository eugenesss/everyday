import React from "react";
import moment from "moment";

const CreatedBy = ({ createdBy, createdAt }) => {
  return (
    <React.Fragment>
      {createdBy}
      <br />
      <span style={{ fontSize: "10px", fontWeight: 300 }}>
        {moment(createdAt).format("MMMM Do YYYY, h:mma")}
      </span>
    </React.Fragment>
  );
};

export default CreatedBy;
