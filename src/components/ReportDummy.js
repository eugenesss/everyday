import { dealList } from "./DummyData";
import ChartConfig from "Constants/chart-config";

const labels = ["Label One", "Label Two", "Label Three"];
const data = [10, 30, 20];
const data2 = [5, 13, 30];
const data3 = [20, 2, 5];
const datasets = [
  {
    label: "Prospecting",
    backgroundColor: ChartConfig.color.primary,
    data: data
  },
  {
    label: "Negotiation",
    backgroundColor: ChartConfig.color.warning,
    data: data2
  },
  { label: "Closed Won", backgroundColor: ChartConfig.color.info, data: data3 }
];

// Stacked Bar Chart
// export const dealByOwner = { labels, datasets };
export const dealsByOwner = [
  { name: "User 1", totalDeals: 20 },
  { name: "User 2", totalDeals: 9 },
  { name: "User 3", totalDeals: 25 },
  { name: "User 4", totalDeals: 12 },
  { name: "User 5", totalDeals: 1 },
  { name: "User 6", totalDeals: 0 }
];

// Donut
export const dealByType = {
  labels,
  datasets: [
    {
      data,
      backgroundColor: [
        ChartConfig.color.primary,
        ChartConfig.color.warning,
        ChartConfig.color.info
      ]
    }
  ]
};

// Pie
export const dealStage = {
  labels: ["primary", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        ChartConfig.color.primary,
        ChartConfig.color.warning,
        ChartConfig.color.info
      ]
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
      backgroundColor: [
        ChartConfig.color.primary,
        ChartConfig.color.warning,
        ChartConfig.color.info
      ]
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
