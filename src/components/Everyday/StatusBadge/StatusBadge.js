import React from "react";
import { Badge } from "reactstrap";

const StatusBadge = ({ name, color }) => {
  return (
    <Badge style={{ backgroundColor: color }} pill>
      {name}
    </Badge>
  );
};

export default StatusBadge;
