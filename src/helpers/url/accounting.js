//====================
// ACCOUNTING ROUTES
//====================

/**
 * Quotation Pages
 */
export const quotePage = "/app/acct/quotations";
export const singleQuote = id => {return `${quotePage}/${id}`;};
export const newQuote = quotePage + "/new";
export const editQuote = id => `${quotePage}/${id}/edit`
export const importQuote = quotePage + "/import";

/**
 * Invoice Pages
 */
export const invoicePage = "/app/acct/invoices";
export const singleInvoice = id => {return `${invoicePage}/${id}`};
export const newInvoice = invoicePage + "/new";
export const editInvoice = id => `${invoicePage}/${id}/edit`
export const importInvoice = invoicePage + "/import";
/**
 * Credit Note Pages
 */
export const crednotePage = "/app/acct/credit_notes";
export const singleCredNote = id => {return `${crednotePage}/${id}`};
export const newCredNote = crednotePage + "/new";
export const editCredNote = crednotePage + "/edit";
export const importCredNote = crednotePage + "/import";
/**
 * Payment Pages
 */
export const paymentPage = "/app/acct/payments";
export const singlePayment = id => {return `${paymentPage}/${id}`};
export const newPayment = paymentPage + "/new";
export const editPayment = paymentPage + "/edit";
export const importPayment = paymentPage + "/import";



// export const leadListPage = "/app/crm/leads";
// export const singleLead = id => `${leadListPage}/${id}`;
// export const leadNewPage = leadListPage + "/new";
// export const leadEditPage = id => `${leadListPage}/${id}/edit`;
// export const leadImportPage = leadListPage + "/import";

/**
 * Quotation Pages
 */
// export const quotationPage = "/app/acct/quotations";
// export const singleQuotation = id => {
//   return `${quotationPage}/${id}`;
// };
// export const newQuotation = quotationPage + "/new";
// export const editQuotation = quotationPage + "/edit";
// export const importQuotation = quotationPage + "/import";

