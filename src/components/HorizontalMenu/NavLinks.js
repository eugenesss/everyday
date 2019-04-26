// horizontal nav links
export default {
  crm: [
    {
      menu_title: "Leads",
      menu_icon: "zmdi zmdi-account-circle",
      child_routes: [
        {
          path: "/app/crm/leads",
          menu_title: "View All Leads"
        },
        {
          path: "/app/crm/new/leads",
          menu_title: "Create New Lead"
        }
      ]
    },
    {
      menu_title: "Customers",
      menu_icon: "zmdi zmdi-accounts-outline",
      child_routes: [
        {
          path: "/app/crm/customers",
          menu_title: "View All Customers"
        },
        {
          path: "/app/crm/new/customer",
          menu_title: "Create New Customer"
        }
      ]
    },
    {
      menu_title: "Accounts",
      menu_icon: "zmdi zmdi-city-alt",
      child_routes: [
        {
          path: "/app/crm/accounts",
          menu_title: "View All Accounts"
        },
        {
          path: "/app/crm/new/account",
          menu_title: "Create New Account"
        }
      ]
    },
    {
      menu_title: "Deals",
      menu_icon: "zmdi zmdi-case",
      child_routes: [
        {
          path: "/app/crm/deals",
          menu_title: "View All Deals"
        },
        {
          path: "/app/crm/new/deal",
          menu_title: "Create New Deal"
        }
      ]
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
      menu_icon: "zmdi zmdi-receipt",
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
      menu_icon: "zmdi zmdi-shopping-cart",
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
      menu_title: "Payments",
      menu_icon: "zmdi zmdi-store",
      child_routes: [
        {
          path: "/app/acct/payments",
          menu_title: "View Payments"
        },
        {
          path: "/app/new/payment",
          menu_title: "New Payments"
        }
      ]
    }
  ]
};
