import React from "react";
import { Badge } from "reactstrap";

const DealTypeBadge = ({ type }) => {
  return (
    type && (
      <Badge className={type.bgColor} pill>
        {type.name}
      </Badge>
    )
  );
};

export default DealTypeBadge;
