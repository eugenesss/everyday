import React from "react";
import moment from "moment";

const NameTimeStamp = ({ name, timeStamp }) => {
  return (
    <React.Fragment>
      {name}
      <br />
      <span style={{ fontSize: "10px", fontWeight: 300 }}>
        {moment(timeStamp, "dd mm yyyy hh:mm").format("MMMM Do YYYY, h:mma")}
      </span>
    </React.Fragment>
  );
};

export default NameTimeStamp;
