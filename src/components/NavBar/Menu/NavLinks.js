// crm routes
import {
  leadListPage,
  customerListPage,
  accountListPage,
  dealListPage,
  teamListPage
} from "Helpers/url/crm";
// acct routes
import {
  quotePage,
  invoicePage,
  crednotePage,
  paymentPage
} from "Helpers/url/accounting";

export default [
  {
    url: "/app/homebase",
    baseUrl: "/app/homebase",
    name: "HomeBase",
    child_routes: []
  },
  {
    url: "/app/calendar",
    baseUrl: "/app/calendar",
    name: "Calendar",
    child_routes: []
  },
  {
    url: "/app/crm/leads",
    baseUrl: "/app/crm",
    name: "CRM",
    child_routes: [
      {
        title: "sidebar.leads",
        path: leadListPage
      },
      {
        title: "sidebar.customers",
        path: customerListPage
      },
      {
        title: "sidebar.accounts",
        path: accountListPage
      },
      {
        title: "sidebar.deals",
        path: dealListPage
      }
      // {
      //   title: "sidebar.teams",
      //   path: teamListPage
      // }
    ]
  },
  {
    url: "/app/acct/quotations",
    baseUrl: "/app/acct",
    name: "Accounting",
    child_routes: [
      {
        title: "sidebar.quotations",
        path: quotePage
      },
      {
        title: "sidebar.invoices",
        path: invoicePage
      },
      {
        title: "sidebar.payment",
        path: paymentPage
      },
      {
        title: "sidebar.credit_note",
        path: crednotePage
      }
    ]
  },
  {
    url: "/app/reports",
    baseUrl: "/app/reports",
    name: "Reports",
    child_routes: []
  }
];
