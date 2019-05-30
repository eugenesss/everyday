const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id felis ut sapien finibus vestibulum. Ut eget faucibus ligula. Integer vitae vehicula est. Aenean id neque enim. Fusce tempus nibh at augue feugiat, at aliquet elit sollicitudin. Fusce tellus massa, sollicitudin sit amet malesuada nec, sagittis dignissim neque. Nunc lacinia placerat est, a euismod odio sagittis nec. Aenean rhoncus lorem eget felis tristique facilisis. Vivamus convallis, justo nec consectetur laoreet, felis ante euismod neque, sit amet condimentum dolor justo fringilla enim. Donec pulvinar nulla non malesuada sagittis.";

const shortText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id felis ut sapien finibus vestibulum. Ut eget faucibus ligula.";

const address_1 = "1 Phonecall St";
const address_2 = "An YanSang Building";

export const user = {
  id: 1,
  name: "Admin Test",
  role: "Admin",
  email: "admin@admin.com"
};

const upcomingEvent = {
  subject: "Open Event",
  type: "Event",
  status: { name: "Not Started", color: "" },
  dueDate: "2018/04/06",
  owner: user,
  createdAt: 1330192800000,
  createdBy: user,
  modifiedAt: 1330192800000,
  modifiedBy: user
};
const closedEvent = {
  subject: "Closed Event",
  type: "Event",
  status: { name: "Completed", color: "" },
  dueDate: "2017/04/06",
  owner: user,
  createdAt: 1330192800000,
  createdBy: user,
  modifiedAt: 1360192800000,
  modifiedBy: user
};

const note = {
  title: "Note One",
  content: shortText,
  createdAt: 1330192800000,
  createdBy: user
};

export const interestLevel = [
  { id: 1, name: "Rare", level: 20 },
  { id: 2, name: "Medium Rare", level: 40 },
  { id: 3, name: "Medium", level: 60 },
  { id: 4, name: "Well Done", level: 100 }
];

export const lead = {
  id: 1,
  name: "Testing Lead",
  status: { name: "Contacted", color: "#00d014" },
  companyName: "Company One",
  source: { name: "Google", color: "" },
  mobile: "1234-5678",
  office: null,
  fax: null,
  email: "lead@one.com",
  jobTitle: "Go Getter",
  industry: { name: "Accounting" },
  interest: 20,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  address_1: address_1,
  address_2: address_2,
  city: "Singapore",
  state: "Singapore",
  zip: "654321",
  description: longText,
  upcomingEvents: [upcomingEvent, upcomingEvent, upcomingEvent, upcomingEvent],
  closedEvents: [closedEvent, closedEvent],
  notes: [note, note, note]
};

export const leadStatus = [
  { id: 1, name: "Contacted" },
  { id: 2, name: "Not Contacted" }
];

export const lead2 = {
  id: 2,
  name: "New Lead",
  status: { name: "Not Contacted", color: "#d00000" },
  companyName: "Detriot City",
  source: { name: "SEO", color: "" },
  mobile: "1234-5678",
  office: null,
  fax: null,
  email: "lead@two.com",
  jobTitle: null,
  industry: null,
  interest: 60,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  address_1: address_1,
  address_2: address_2,
  city: "Singapore",
  state: "Singapore",
  zip: "654321",
  description: longText,
  upcomingEvents: [upcomingEvent, upcomingEvent, upcomingEvent, upcomingEvent],
  closedEvents: null,
  notes: [note, note, note]
};

export const cust = {
  id: 1,
  name: "Customer One",
  mobile: "1234-5678",
  office: null,
  source: { name: "SEO", color: "" },
  fax: null,
  email: "customer@one.com",
  jobTitle: null,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  address_1: address_1,
  address_2: address_2,
  city: "Singapore",
  state: "Singapore",
  zip: "654321",
  description: longText,
  upcomingEvents: [upcomingEvent, upcomingEvent, upcomingEvent, upcomingEvent],
  closedEvents: null,
  notes: [note, note, note],
  account: null,
  deals: null
};

export const account = {
  id: 1,
  name: "Account One",
  industry: { name: "Accounting", color: "" },
  website: "www.accountOne.com",
  office: "1234 5678",
  fax: null,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  address_1: address_1,
  address_2: address_2,
  city: "Singapore",
  state: "Singapore",
  zip: "654321",
  description: longText,
  customers: [cust],
  deals: null,
  upcomingEvents: [upcomingEvent, upcomingEvent, upcomingEvent, upcomingEvent],
  closedEvents: null,
  notes: [note, note, note]
};
export const account2 = {
  id: 1,
  name: "Account Two",
  industry: { name: "Accounting", color: "" },
  website: "www.accountOne.com",
  office: "1234 5678",
  fax: null,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  address_1: address_1,
  address_2: address_2,
  city: "Singapore",
  state: "Singapore",
  zip: "654321",
  description: longText,
  customers: [cust],
  deals: null,
  upcomingEvents: [upcomingEvent, upcomingEvent, upcomingEvent, upcomingEvent],
  closedEvents: null,
  notes: [note, note, note]
};

export const cust2 = {
  id: 2,
  name: "Customer Two",
  mobile: "1234-5678",
  office: null,
  source: null,
  fax: null,
  email: "customer@two.com",
  jobTitle: "Snake Eater",
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  description: longText,
  upcomingEvents: [upcomingEvent, upcomingEvent, upcomingEvent, upcomingEvent],
  closedEvents: null,
  notes: null,
  account: account,
  deals: null
};

const stage1 = {
  id: 1,
  name: "Prospecting",
  chance: 10,
  step: 0,
  end: false,
  description:
    "This stage refers to any initial calls, conversations or emails with a potential lead."
};
const stage2 = {
  id: 2,
  name: "Qualification",
  chance: 25,
  step: 1,
  invoice: false,
  quotation: false,
  end: false,
  description: "This stage refers to a confirmed meeting with the lead."
};
const stage3 = {
  id: 3,
  name: "Proposal",
  chance: 50,
  step: 2,
  invoice: false,
  quotation: true,
  end: false,
  description:
    "This stage refers to any discussion on budget, proposal or issue of quotations."
};
const stage4 = {
  id: 4,
  name: "Negotiation",
  chance: 70,
  step: 3,
  invoice: false,
  quotation: false,
  end: false,
  description:
    "This stage refers to any form of further negotiation portraying some form of buying signal after initial proposal stage."
};
const stage5 = {
  id: 5,
  name: "Buying Signal",
  chance: 90,
  step: 4,
  invoice: false,
  quotation: false,
  end: false,
  description:
    "This stage refers to strong buying signals from the client Eg. Verbal agreement."
};
const stage6 = {
  id: 6,
  name: "Closed Won",
  chance: 100,
  step: 5,
  invoice: true,
  quotation: false,
  end: true,
  description: "This stage refers to a successful signed sales order."
};
const stage7 = {
  id: 7,
  name: "Closed Lost",
  chance: 0,
  step: 6,
  invoice: false,
  quotation: false,
  end: true,
  description: "Client has declined the sales order."
};

const dealHistory = {
  stageName: "Prospecting",
  amount: 1000,
  chance: 10,
  closingDate: new Date(),
  duration: 10,
  createdAt: 1330192800000,
  createdBy: user
};

export const dealType = [
  { id: 1, name: "New Business" },
  { id: 2, name: "Upsells" }
];

export const source = [
  { id: 1, name: "Cold Call" },
  { id: 2, name: "Referral" },
  { id: 3, name: "Google" },
  { id: 4, name: "SEO" }
];
export const industry = [
  { id: 1, name: "Fashion" },
  { id: 2, name: "Advertising" }
];

export const deal = {
  id: 1,
  name: "Deal One",
  stage: stage3,
  type: { name: "New Business" },
  source: { name: "Cold Call" },
  amount: 20000,
  closingDate: new Date(),
  account: account,
  customer: cust2,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  description: longText,
  upcomingEvents: [upcomingEvent, upcomingEvent],
  closedEvents: null,
  notes: [note, note],
  history: [dealHistory, dealHistory]
};

export const dealList = [deal, deal, deal];

export const dealStage = [
  stage1,
  stage2,
  stage3,
  stage4,
  stage5,
  stage6,
  stage7
];
export const leadList = [lead, lead2, lead2, lead, lead, lead];
export const customerList = [cust, cust2, cust, cust2];
export const accountList = [account, account2, account];

const products = [
  {
    id: 1,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  },
  {
    id: 2,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  },
  {
    id: 3,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  },
  {
    id: 4,
    qty: 1,
    name: "iPhone 5 32GB White & Silver (GSM) Unlocked",
    price: 749,
    total: 749
  }
];

export const quote = {
  id: 1,
  quoteID: "QUOT-100001",
  status: { name: "Unsent" },
  account: null,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  products: null,
  shipping: null,
  tax: null,
  discount: null,
  totalAmt: 10000,
  netAmt: 9000,
  sentOn: 1330192800000,
  expireOn: 1830192800000,
  billingaddress_1: {
    billTo: "Bill Man",
    unit: null,
    address_1: address_1,
    address_2: address_2,
    country: "Singapore",
    zip: "654321",
    email: "customer@invoice.com",
    phone: "1234-4566"
  },
  shippingaddress_1: {
    shipTo: "Ship Man",
    unit: "02-12",
    address_1: address_1,
    address_2: address_2,
    country: "Singapore",
    zip: "654321",
    email: "customer@invoice.com",
    phone: "1234-4566"
  },
  terms: longText,
  notes: null
};

export const invoice = {
  id: 1,
  invoiceID: "INV-100001",
  status: { name: "Paid" },
  account: null,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  products: null,
  shipping: null,
  tax: null,
  discount: null,
  totalAmt: 10000,
  netAmt: 9000,
  sentOn: 1330192800000,
  expireOn: 1830192800000,
  billingAddress: {
    billTo: "Bill Man",
    unit: null,
    address_1: address_1,
    address_2: address_2,
    country: "Singapore",
    zip: "654321",
    email: "customer@invoice.com",
    phone: "1234-4566"
  },
  shippingAddress: {
    shipTo: "Ship Man",
    unit: "02-12",
    address_1: address_1,
    address_2: address_2,
    country: "Singapore",
    zip: "654321",
    email: "customer@invoice.com",
    phone: "1234-4566"
  },
  terms: longText,
  notes: [note, note, note]
};

export const creditNote = {
  id: 1,
  creditID: "CN-100001",
  status: { name: "Closed" },
  account: null,
  owner: user,
  createdBy: user,
  createdAt: 1330192800000,
  modifiedBy: user,
  modifiedAt: 1330192800000,
  amtToCredit: 10000,
  amtCredited: 1000,
  amtRemaining: 9000,
  creditedInvoice: null,
  sentOn: 1330192800000,
  expireOn: 1830192800000,
  notes: [note, note, note]
};

export const quoteList = [quote, quote, quote, quote];
export const invoiceList = [invoice, invoice, invoice];
export const creditNoteList = [creditNote, creditNote, creditNote, creditNote];

// List Summary
export const leadSummary = [
  {
    summaryName: "Total Cold Leads",
    number: 20,
    color: "#a2dbff"
  },
  {
    summaryName: "Total Hot Leads",
    number: 15,
    color: "#ff8585"
  },
  { summaryName: "New Leads", number: 2, color: "#a7ff85" },
  { summaryName: "Open Leads", number: 8 }
];
export const custSummary = [
  {
    summaryName: "Total Customers",
    number: 20,
    color: "#ffd685"
  },
  {
    summaryName: "Active Customers",
    number: 15,
    color: "#a7ff85"
  },
  {
    summaryName: "Inactive Customers",
    number: 12,
    color: "#a2dbff"
  },
  { summaryName: "Open Leads", number: 8 }
];
