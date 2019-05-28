import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartConfig from "Constants/chart-config";

const options = {
  legend: {
    labels: {
      fontColor: ChartConfig.legendFontColor
    }
  }
};

const DonutChart = ({ data }) => {
  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
