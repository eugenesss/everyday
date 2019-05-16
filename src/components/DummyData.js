const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id felis ut sapien finibus vestibulum. Ut eget faucibus ligula. Integer vitae vehicula est. Aenean id neque enim. Fusce tempus nibh at augue feugiat, at aliquet elit sollicitudin. Fusce tellus massa, sollicitudin sit amet malesuada nec, sagittis dignissim neque. Nunc lacinia placerat est, a euismod odio sagittis nec. Aenean rhoncus lorem eget felis tristique facilisis. Vivamus convallis, justo nec consectetur laoreet, felis ante euismod neque, sit amet condimentum dolor justo fringilla enim. Donec pulvinar nulla non malesuada sagittis.";

const shortText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id felis ut sapien finibus vestibulum. Ut eget faucibus ligula.";

const address = "1 Address St";
const address2 = "An Address Building";

export const user = {
  fullName: "Admin Test",
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

export const lead = {
  id: 1,
  fullName: "Testing Lead",
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
  address: address,
  address2: address2,
  city: "Singapore",
  state: "Singapore",
  zip: "654321",
  description: longText,
  upcomingEvents: [upcomingEvent, upcomingEvent, upcomingEvent, upcomingEvent],
  closedEvents: [closedEvent, closedEvent],
  notes: [note, note, note]
};

export const lead2 = {
  id: 2,
  fullName: "New Lead",
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
  address: address,
  address2: address2,
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
  fullName: "Customer One",
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
  address: address,
  address2: address2,
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
export const cust2 = {
  id: 2,
  fullName: "Customer Two",
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
  account: null,
  deals: null
};

export const leadList = [lead, lead2, lead2, lead, lead, lead];

export const customerList = [cust, cust2, cust, cust2];
