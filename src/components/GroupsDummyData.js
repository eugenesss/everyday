import { roles, role1, role2, role3, role4, role5 } from "./RolesDummyData"

const group0 = {
  id: 0,
  name: "Global",
  roles: roles
}
const group1 = {
  id: 1,
  name: "Sales Team 1",
  roles: [role1, role4]
};
const group2 = {
  id: 2,
  name: "Sales Team 2",
  roles: [role1, role2, role4]
};
const group3 = {
  id: 3,
  name: "Marketing Team 1",
  roles: [role1, role3, role5]
};
const group4 = {
  id: 4,
  name: "Marketing Team 2",
  roles:[role1, role3]
};
const group5 = {
  id: 5,
  name: "Backend Team",
  roles: [role4]
};

export const groups = [ group1, group2, group3, group4, group5, group0]