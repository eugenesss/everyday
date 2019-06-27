import React from "react";
import { Card, CardTitle } from "reactstrap";

const DealStageContent = ({ activeStep, dealStage }) => {
  return (
    <Card body color="primary" className="text-white align-self-center">
      <CardTitle className="p-10">
        <strong>Key Notes</strong>
      </CardTitle>
      <div className="p-10">
        {dealStage[activeStep] && dealStage[activeStep].description}
      </div>
    </Card>
  );
};

export default DealStageContent;
