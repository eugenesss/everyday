import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Table } from "reactstrap";

function DealsByTypeChart(props) {
  const propsData = [
    {
      type: "Type Name",
      totalDeals: 3,
      color: "#FF6384",
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
    }
  ];
  const labels = propsData.map(dat => dat.type);
  const data = propsData.map(dat => dat.totalDeals);
  const backgroundColor = propsData.map(dat => dat.color);

  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor
      }
    ]
  };
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 align-self-center">
          <Doughnut height={70} data={chartData} options={options} />
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
              {propsData.map(type =>
                type.deals.map((deal, key) => (
                  <tr key={key}>
                    {key == 0 && (
                      <td rowSpan={type.totalDeals}>
                        <strong>{type.type}</strong>
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
export default DealsByTypeChart;
