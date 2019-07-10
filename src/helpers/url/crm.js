//====================
// CRM ROUTES
//====================

/**
 * Lead Pages
 */
export const leadListPage = "/app/crm/leads";
export const singleLead = id => `${leadListPage}/${id}`;
export const leadNewPage = leadListPage + "/new";
export const leadEditPage = id => `${leadListPage}/${id}/edit`;
export const leadImportPage = leadListPage + "/import";

/**
 * Customer Pages
 */
export const customerListPage = "/app/crm/customers";
export const singleCustomer = id => `${customerListPage}/${id}`;
export const customerNewPage = customerListPage + "/new";
export const customerEditPage = id => `${customerListPage}/${id}/edit`;
export const customerImportPage = customerListPage + "/import";

/**
 * Account Pages
 */
export const accountListPage = "/app/crm/accounts";
export const singleAccount = id => `${accountListPage}/${id}`;
export const accountNewPage = accountListPage + "/new";
export const accountEditPage = id => `${accountListPage}/${id}/edit`;
export const accountImportPage = accountListPage + "/import";

/**
 * Deal Pages
 */
export const dealListPage = "/app/crm/deals";
export const singleDeal = id => `${dealListPage}/${id}`;
export const dealNewPage = dealListPage + "/new";
export const dealEditPage = id => `${dealListPage}/${id}/edit`;
export const dealImportPage = dealListPage + "/import";

/**
 * Team Pages
 */
<<<<<<< HEAD
export const teamPage = "/app/crm/teams";


/**
 * Quotation Pages
 */
// export const quotationPage = "/app/acct/quotations";
// export const singleQuotation = id => {
//   return `${quotationPage}/${id}`;
// };
// export const newQuotation = quotationPage + "/new";
// export const editQuotation = quotationPage + "/edit";
=======
export const teamListPage = "/app/crm/teams";
>>>>>>> f5f1919908c0e80c23e889e685e218290644720f
