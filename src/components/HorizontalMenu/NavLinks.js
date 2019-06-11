// horizontal nav links
export default {
  crm: [
    {
      menu_title: "sidebar.leads",
      menu_icon: "zmdi zmdi-account-circle text-everyday-sec",
      path: "/app/crm/leads",
      child_routes: null
    },
    {
      menu_title: "sidebar.customers",
      menu_icon: "zmdi zmdi-accounts-outline text-everyday-sec",
      path: "/app/crm/customers",
      child_routes: null
    },
    {
      menu_title: "sidebar.accounts",
      menu_icon: "zmdi zmdi-city-alt text-everyday-sec",
      path: "/app/crm/accounts",
      child_routes: null
    },
    {
      menu_title: "sidebar.deals",
      menu_icon: "zmdi zmdi-case text-everyday-sec",
      path: "/app/crm/deals",
      child_routes: null
    }
  ],
  project: [
    {
      menu_title: "sidebar.dashboard",
      menu_icon: "zmdi zmdi-view-dashboard",

      child_routes: [
        {
          path: "/app/dashboard/ecommerce",
          menu_title: "sidebar.ecommerce"
        },
        {
          path: "/dashboard/crm/dashboard",
          menu_title: "sidebar.crm"
        },
        {
          path: "/horizontal/dashboard/saas",
          menu_title: "sidebar.saas"
        },
        {
          path: "/agency/dashboard/agency",
          menu_title: "sidebar.agency"
        },
        {
          path: "/boxed/dashboard/news",
          menu_title: "sidebar.news"
        }
      ]
    }
  ],
  account: [
    {
      menu_title: "sidebar.quotations",
      menu_icon: "zmdi zmdi-receipt text-success",
      path: "/app/acct/quotations",
      child_routes: null
    },
    {
      menu_title: "sidebar.invoices",
      menu_icon: "zmdi zmdi-shopping-cart text-success",
      path: "/app/acct/invoices",
      child_routes: null
    },
    {
      menu_title: "sidebar.payment",
      menu_icon: "zmdi zmdi-card text-success",
      path: "/app/acct/payment",
      child_routes: null
    },
    {
      menu_title: "sidebar.credit_note",
      menu_icon: "zmdi zmdi-store text-success",
      path: "/app/acct/credit_note",
      child_routes: null
    }
  ]
};
