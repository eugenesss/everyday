// horizontal nav links
export default {
  crm: [
    {
      menu_title: "sidebar.leads",
      menu_icon: "zmdi zmdi-account-circle text-primary",
      path: "/app/crm/leads",
      child_routes: null
    },
    {
      menu_title: "sidebar.customers",
      menu_icon: "zmdi zmdi-accounts-outline text-primary",
      path: "/app/crm/customers",
      child_routes: null
    },
    {
      menu_title: "sidebar.accounts",
      menu_icon: "zmdi zmdi-city-alt text-primary",
      path: "/app/crm/accounts",
      child_routes: null
    },
    {
      menu_title: "sidebar.deals",
      menu_icon: "zmdi zmdi-case text-primary",
      path: "/app/crm/deals",
      child_routes: null
    },
    {
      menu_title: "sidebar.teams",
      menu_icon: "zmdi zmdi-accounts-alt text-primary",
      path: "/app/crm/team",
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
      menu_icon: "zmdi zmdi-receipt text-everyday",
      path: "/app/acct/quotations",
      child_routes: null
    },
    {
      menu_title: "sidebar.invoices",
      menu_icon: "zmdi zmdi-shopping-cart text-everyday",
      path: "/app/acct/invoices",
      child_routes: null
    },
    {
      menu_title: "sidebar.payment",
      menu_icon: "zmdi zmdi-card text-everyday",
      path: "/app/acct/payment",
      child_routes: null
    },
    {
      menu_title: "sidebar.credit_note",
      menu_icon: "zmdi zmdi-store text-everyday",
      path: "/app/acct/credit_note",
      child_routes: null
    }
  ]
};
