import { dealList, leadList } from "./DummyData";

const labels = ["Label One", "Label Two", "Label Three"];
const data = [10, 30, 20];
const data2 = [5, 13, 30];
const data3 = [20, 2, 5];
const datasets = [
  { label: "Prospecting", backgroundColor: "red", data: data },
  { label: "Negotiation", backgroundColor: "blue", data: data2 },
  { label: "Closed Won", backgroundColor: "green", data: data3 }
];

// Stacked Bar Chart
export const dealByOwner = { labels, datasets };

// Donut
export const dealByType = {
  labels,
  datasets: [{ data, backgroundColor: ["red", "green", "blue"] }]
};

// Pie
export const dealStage = {
  labels: ["primary", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["blue", "red", "green"]
    }
  ]
};

// Table
export const dealRecordsInStage = [
  { stageName: "Prospecting - 20%", count: 3, deals: dealList },
  { stageName: "Negotiating - 40%", count: 10, deals: [] }
];

// Bar Chart
export const leadSourceCreated = {
  labels: ["SEO", "Cold Call", "Google"],
  datasets: [
    {
      label: "Leads Created from Source",
      backgroundColor: "blue",
      data: [30, 20, 55]
    }
  ]
};

// radar chart
export const LeadStatus = {
  labels: ["SEO", "Cold Call", "Google", "Referral", "Employees Referral"],
  datasets: [
    {
      data: [300, 50, 100, 80, 10],
      backgroundColor: ["blue", "red", "green", "yellow", "purple"]
    }
  ]
};

export const leadCreatedBy = {
  labels: ["Admin", "ADmin2", "Admin3", "b", "c"],
  datasets: [
    {
      label: "Leads Created",
      backgroundColor: "blue",
      data: [20, 30, 10, 5, 5]
    }
  ]
};
