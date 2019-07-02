//====================
// CRM ROUTES
//====================

/**
 * Lead Pages
 */
export const leadPage = "/app/crm/leads";
export const singleLead = id => {
  return `${leadPage}/${id}`;
};
export const newLead = leadPage + "/new";
export const editLead = leadPage + "/edit";
export const importLead = leadPage + "/import";

/**
 * Customer Pages
 */
export const customerPage = "/app/crm/customers";
export const singleCustomer = id => {
  return `${customerPage}/${id}`;
};
export const newCustomer = customerPage + "/new";
export const editCustomer = customerPage + "/edit";
export const importCustomer = customerPage + "/import";

/**
 * Account Pages
 */
export const accountPage = "/app/crm/accounts";
export const singleAccount = id => {
  return `${accountPage}/${id}`;
};
export const newAccount = accountPage + "/new";
export const editAccount = accountPage + "/edit";
export const importAccount = accountPage + "/import";

/**
 * Deal Pages
 */
export const dealPage = "/app/crm/deals";
export const singleDeal = id => {
  return `${dealPage}/${id}`;
};
export const newDeal = dealPage + "/new";
export const editDeal = dealPage + "/edit";
export const importDeal = dealPage + "/import";

/**
 * Team Pages
 */
export const teamPage = "/app/crm/teams";
