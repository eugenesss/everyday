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
      menu_title: "Quotations",
      menu_icon: "zmdi zmdi-receipt text-success",
      child_routes: [
        {
          path: "/app/acct/quotations",
          menu_title: "View Quotations"
        },
        {
          path: "/app/acct/new/quotation",
          menu_title: "New Quotations"
        }
      ]
    },
    {
      menu_title: "Invoices",
      menu_icon: "zmdi zmdi-shopping-cart text-success",
      child_routes: [
        {
          path: "/app/acct/invoices",
          menu_title: "View Invoices"
        },
        {
          path: "/app/acct/new/invoice",
          menu_title: "New Invoices"
        }
      ]
    },
    {
      menu_title: "Credit Note",
      menu_icon: "zmdi zmdi-store text-success",
      child_routes: [
        {
          path: "/app/acct/credit_note",
          menu_title: "View Credit Note"
        },
        {
          path: "/app/new/credit_note",
          menu_title: "New Credit Note"
        }
      ]
    }
  ]
};
