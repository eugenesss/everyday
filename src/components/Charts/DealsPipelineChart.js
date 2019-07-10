import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import ChartConfig from "Constants/chart-config";
import { Table } from "reactstrap";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

function DealsPipelineChart(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <HorizontalBar data={data} />
        </div>
      </div>
      <div className="row">
        <div className="col-12">table</div>
      </div>
    </React.Fragment>
  );
}

export default DealsPipelineChart;
