import React from "react";
import Loadable from "react-loadable";

// rct page loader
import RctPageLoader from "Components/RctPageLoader";

// accounting management

export const acct_new_credit_note_component = Loadable({
  loader: () => import("Routes/accounting/new/credit_note"),
  loading: () => <RctPageLoader />
});

export const acct_credit_note_component = Loadable({
  loader: () => import("Routes/accounting/credit_note"),
  loading: () => <RctPageLoader />
});

// accounting management view

export const view_credit_note = Loadable({
  loader: () => import("Routes/accounting/credit_note/view"),
  loading: () => <RctPageLoader />
});


// accounting management new




export const acct_payment_component = Loadable({
  loader: () => import("Routes/accounting/payment"),
  loading: () => <RctPageLoader />
});

export const view_payment = Loadable({
  loader: () => import("Routes/accounting/payment/view"),
  loading: () => <RctPageLoader />
});

export const acct_new_payment_component = Loadable({
  loader: () => import("Routes/accounting/payment/new"),
  loading: () => <RctPageLoader />
});





// invoice
export const view_invoice = Loadable({
  loader: () => import("Routes/accounting/invoice/view"),
  loading: () => <RctPageLoader />
});

export const acct_new_invoice_component = Loadable({
  loader: () => import("Routes/accounting/invoice/new"),
  loading: () => <RctPageLoader />
});

export const acct_invoice_component = Loadable({
  loader: () => import("Routes/accounting/invoice"),
  loading: () => <RctPageLoader />
});

export const acct_edit_invoice = Loadable({
  loader: () => import("Routes/accounting/invoice/edit"),
  loading: () => <RctPageLoader />
});



// quotation
export const acct_quotation_component = Loadable({
  loader: () => import("Routes/accounting/quotation"),
  loading: () => <RctPageLoader />
});

export const acct_new_quotation_component = Loadable({
  loader: () => import("Routes/accounting/quotation/new"),
  loading: () => <RctPageLoader />
});

export const acct_edit_quotation = Loadable({
  loader: () => import("Routes/accounting/quotation/edit"),
  loading: () => <RctPageLoader />
});

export const view_quotation = Loadable({
  loader: () => import("Routes/accounting/quotation/view"),
  loading: () => <RctPageLoader />
});