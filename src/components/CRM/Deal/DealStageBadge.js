import React from "react";
import { Badge } from "reactstrap";

const DealStageBadge = ({ stage }) => {
  return (
    <Badge className={stage.color}>
      {stage.name} - {stage.chance}%
    </Badge>
  );
};

export default DealStageBadge;
