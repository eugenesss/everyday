import React from "react";
import { Pie } from "react-chartjs-2";
import ChartConfig from "Constants/chart-config";

const options = {
  legend: {
    labels: {
      fontColor: ChartConfig.legendFontColor
    }
  }
};

const PieChart = ({ data }) => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
