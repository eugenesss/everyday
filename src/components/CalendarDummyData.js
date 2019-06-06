import { user1, user2, user3, user4 } from "./UserDummyData";

const event1 = {
  id: 1,
  title: "My Event All Day 1",
  start: new Date(2019, 4, 10, 6, 45, 0),
  end: new Date(2019, 4, 10, 8, 0, 0),
  owner: user2
}
const event2 = {
  id: 2,
  title: "Company Event All Day 1",
  start: new Date(2019, 4, 6, 9, 0, 0),
  end: new Date(2019, 4, 6, 10, 0, 0),
  owner: user4
}
const event3 = {
  id: 3,
  title: "My Event 2",
  start: new Date(2019, 4, 13, 5, 30, 0),
  end: new Date(2019, 4, 20, 9, 45, 0),
  owner: user2
}
const event4 = {
  id: 4,
  title: "Company Event 2",
  start: new Date(2019, 4, 7),
  end: new Date(2019, 4, 7),
  owner: user1,
}
const event5 = {
  id: 5,
  title: "Company Event 3",
  start: new Date(2019, 4, 14),
  end: new Date(2019, 4, 15),
  owner: user3
}
const event6 = {
  id: 6,
  title: "My Event 3",
  start: new Date(2019, 4, 26, 7, 0, 0),
  end: new Date(2019, 4, 26, 9, 0, 0),
  desc: "Big conference for important people",
  owner: user2
}

export var events = [event1, event2, event3, event4, event5, event6]