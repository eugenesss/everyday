import React from "react";
import { Card, CardTitle } from "reactstrap";

const DealStageContent = ({ activeStep, dealStage }) => {
  return (
    <Card body outline color="info">
      <CardTitle className="p-10">
        <strong>Remarks</strong>
      </CardTitle>
      <div className="p-10">{dealStage[activeStep]["description"]}</div>
    </Card>
  );
};

export default DealStageContent;
