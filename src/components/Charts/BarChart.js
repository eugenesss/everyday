import React from "react";
import { Bar } from "react-chartjs-2";
import ChartConfig from "Constants/chart-config";

const options = {
  legend: {
    labels: {
      fontColor: ChartConfig.legendFontColor
    }
  },
  scales: {
    xAxes: [
      {
        stacked: true,
        gridLines: {
          color: ChartConfig.chartGridColor
        },
        ticks: {
          fontColor: ChartConfig.axesColor
        }
      }
    ],
    yAxes: [
      {
        stacked: true,
        gridLines: {
          color: ChartConfig.chartGridColor
        },
        ticks: {
          fontColor: ChartConfig.axesColor
        }
      }
    ]
  }
};
const BarChart = ({ data }) => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
