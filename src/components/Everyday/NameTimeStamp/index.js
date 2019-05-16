import React from "react";
import moment from "moment";

const NameTimeStamp = ({ name, timeStamp }) => {
  return (
    <React.Fragment>
      <span className="fs-12">
        <i>{name}</i>
      </span>
      <br />
      <span style={{ fontSize: "10px", fontWeight: 300 }}>
        {moment(timeStamp, "dd mm yyyy hh:mm").format("MMMM Do YYYY, h:mma")}
      </span>
    </React.Fragment>
  );
};

export default NameTimeStamp;
