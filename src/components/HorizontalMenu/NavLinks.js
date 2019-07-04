// crm routes
import {
  leadPage,
  customerPage,
  accountPage,
  dealPage,
  teamPage
} from "Helpers/url/crm";
// acct routes
import {
  quotePage,
  invoicePage,
  crednotePage,
  paymentPage
} from "Helpers/url/accounting";

export default {
  crm: [
    {
      menu_title: "sidebar.leads",
      menu_icon: "zmdi zmdi-account-circle text-primary",
      path: leadPage
    },
    {
      menu_title: "sidebar.customers",
      menu_icon: "zmdi zmdi-accounts-outline text-primary",
      path: customerPage
    },
    {
      menu_title: "sidebar.accounts",
      menu_icon: "zmdi zmdi-city-alt text-primary",
      path: accountPage
    },
    {
      menu_title: "sidebar.deals",
      menu_icon: "zmdi zmdi-case text-primary",
      path: dealPage
    },
    {
      menu_title: "sidebar.teams",
      menu_icon: "zmdi zmdi-accounts-alt text-primary",
      path: teamPage
    }
  ],
  account: [
    {
      menu_title: "sidebar.quotations",
      menu_icon: "zmdi zmdi-receipt text-everyday",
      path: quotePage
    },
    {
      menu_title: "sidebar.invoices",
      menu_icon: "zmdi zmdi-shopping-cart text-everyday",
      path: invoicePage
    },
    {
      menu_title: "sidebar.payment",
      menu_icon: "zmdi zmdi-card text-everyday",
      path: paymentPage
    },
    {
      menu_title: "sidebar.credit_note",
      menu_icon: "zmdi zmdi-store text-everyday",
      path: crednotePage
    }
  ]
};
