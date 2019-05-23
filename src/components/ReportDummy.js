import { dealList } from "./DummyData";

const labels = ["Label One", "Label Two", "Label Three"];
const data = [10, 30, 20];
const data2 = [5, 13, 30];
const data3 = [20, 2, 5];
const datasets = [
  { label: "Prospecting", backgroundColor: "red", data: data },
  { label: "Negotiation", backgroundColor: "blue", data: data2 },
  { label: "Closed Won", backgroundColor: "green", data: data3 }
];

export const dealByOwner = { labels, datasets };

export const dealByType = {
  labels,
  datasets: [{ data, backgroundColor: ["red", "green", "blue"] }]
};

export const dealStage = {
  labels: ["primary", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["blue", "red", "green"]
    }
  ]
};

export const dealRecordsInStage = [
  { stageName: "Prospecting - 20%", count: 3, deals: dealList },
  { stageName: "Negotiating - 40%", count: 10, deals: [] }
];
