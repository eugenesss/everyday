import React from "react";
import { Badge } from "reactstrap";

const ActiveStatusBadge = ({ isActive }) => {
  return (
    <Badge className={isActive ? "bg-success" : "bg-danger"}>
      {isActive ? "Active" : "Inactive"}
    </Badge>
  );
};

export default ActiveStatusBadge;
