import React from "react";
import { Bar } from "react-chartjs-2";
import ChartConfig from "Constants/chart-config";
import { Table } from "reactstrap";

const sampleData = [
  {
    name: "User 1",
    totalDeals: 3,
    deals: [
      {
        name: "name",
        amount: 12000,
        closingDate: "date",
        userInfo: { name: "name", id: "id" },
        stage: { name: "stage", chance: 20 },
        accountInfo: { name: "account" }
      },
      {
        name: "name",
        amount: 12000,
        closingDate: "date",
        userInfo: { name: "name", id: "id" },
        stage: { name: "stage", chance: 20 },
        accountInfo: { name: "account" }
      },
      {
        name: "name",
        amount: 12000,
        closingDate: "date",
        userInfo: { name: "name", id: "id" },
        stage: { name: "stage", chance: 20 },
        accountInfo: { name: "account" }
      }
    ]
  },
  {
    name: "User 2",
    totalDeals: 2,
    deals: [
      {
        name: "name",
        amount: 12000,
        closingDate: "date",
        userInfo: { name: "name", id: "id" },
        stage: { name: "stage", chance: 20 },
        accountInfo: { name: "account" }
      },
      {
        name: "name",
        amount: 12000,
        closingDate: "date",
        userInfo: { name: "name", id: "id" },
        stage: { name: "stage", chance: 20 },
        accountInfo: { name: "account" }
      }
    ]
  }
];

function DealsByOwnerChart(props) {
  // mapping props
  const labels = sampleData.map(d => d.name);
  const data = sampleData.map(d => d.totalDeals);

  const chartData = {
    labels,
    datasets: [
      {
        backgroundColor: ChartConfig.color.info,
        data
      }
    ]
  };
  const options = {
    legend: {
      display: false
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
          ticks: {
            beginAtZero: true,
            min: 0
          },
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
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12">
          <Bar data={chartData} height={80} options={options} />
        </div>
      </div>

      <div className="row mt-30">
        <div className="col-12">
          <Table size="sm">
            <thead>
              <tr>
                <th>Type</th>
                <th>Deal Name</th>
                <th>Amount</th>
                <th>Closing Date</th>
                <th>Owner</th>
                <th>Stage</th>
                <th>Chance</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map(owner =>
                owner.deals.map((deal, key) => (
                  <tr key={key}>
                    {key == 0 && (
                      <td rowSpan={owner.totalDeals}>
                        <strong>{owner.name}</strong>
                      </td>
                    )}
                    <td>{deal.name}</td>
                    <td>{deal.amount}</td>
                    <td>{deal.closingDate}</td>
                    <td>{deal.userInfo.name}</td>
                    <td>{deal.stage.name}</td>
                    <td>{deal.stage.chance}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DealsByOwnerChart;
