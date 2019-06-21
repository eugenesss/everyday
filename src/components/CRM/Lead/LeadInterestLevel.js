import React from "react";
import { Progress } from "reactstrap";

const LeadInterestLevel = ({ interest }) => {
  function getBarColor(int) {
    var color = "";
    switch (int) {
      case 100:
        color = "success";
        break;
      case 80:
        color = "warning";
        break;
      case 60:
        color = "info";
        break;
      case 40:
        color = "danger";
        break;
      case 20:
        color = "danger";
        break;
      default:
        break;
    }
    return color;
  }
  return <Progress value={interest} color={getBarColor(interest)} />;
};

export default LeadInterestLevel;
