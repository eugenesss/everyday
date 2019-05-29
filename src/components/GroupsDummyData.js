import { roles, role1, role2, role3, role4, role5 } from "./RolesDummyData"

const group0 = {
  id: 0,
  name: "Global",
}
const group1 = {
  id: 1,
  name: "Sales Team 1",
};
const group2 = {
  id: 2,
  name: "Sales Team 2",
};
const group3 = {
  id: 3,
  name: "Marketing Team 1",
};
const group4 = {
  id: 4,
  name: "Marketing Team 2",
};
const group5 = {
  id: 5,
  name: "Backend Team",
};

const hierarchy1 = {
  group: group1.id,
  role: role1.id,
  tier: 1
};
const hierarchy2 = {
  group: group1.id,
  role: role4.id,
  tier: 2
};
const hierarchy3 = {
  group: group2.id,
  role: role1.id,
  tier: 1
};
const hierarchy4 = {
  group: group2.id,
  role: role2.id,
  tier: 2
};
const hierarchy5 = {
  group: group2.id,
  role: role4.id,
  tier: 3
};
const hierarchy6 = {
  group: group3.id,
  role: role1.id,
  tier: 1
};
const hierarchy7 = {
  group: group3.id,
  role: role3.id,
  tier: 2
};
const hierarchy8 = {
  group: group3.id,
  role: role5.id,
  tier: 3
};
const hierarchy9 = {
  group: group4.id,
  role: role1.id,
  tier: 1
};
const hierarchy10 = {
  group: group4.id,
  role: role3.id,
  tier: 2
};
const hierarchy11 = {
  group: group5.id,
  role: role4.id,
  tier: 3
};

export const hierarchies = [hierarchy1, hierarchy2, hierarchy3, hierarchy4, hierarchy5, hierarchy6, hierarchy7, hierarchy8, hierarchy9, hierarchy10, hierarchy11]
export const groups = [ group1, group2, group3, group4, group5, group0]