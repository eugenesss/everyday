//====================
// ACCOUNTING ROUTES
//====================

/**
 * Quotation Pages
 */
export const quotePage = "/app/acct/quotations";
export const singleQuote = id => {
  return `${quotePage}/${id}`;
};
export const newQuote = quotePage + "/new";
export const editQuote = quotePage + "/edit";
export const importQuote = quotePage + "/import";

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




/**
 * Invoice Pages
 */
export const invoicePage = "/app/acct/invoices";
export const singleInvoice = id => {
  return `${invoicePage}/${id}`;
};
export const newInvoice = invoicePage + "/new";
export const editInvoice = invoicePage + "/edit";
export const importInvoice = invoicePage + "/import";
/**
 * Credit Note Pages
 */
export const crednotePage = "/app/acct/credit_notes";
export const singleCredNote = id => {
  return `${crednotePage}/${id}`;
};
export const newCredNote = crednotePage + "/new";
export const editCredNote = crednotePage + "/edit";
export const importCredNote = crednotePage + "/import";
/**
 * Payment Pages
 */
export const paymentPage = "/app/acct/payments";
export const singlePayment = id => {
  return `${paymentPage}/${id}`;
};
export const newPayment = paymentPage + "/new";
export const editPayment = paymentPage + "/edit";
export const importPayment = paymentPage + "/import";
