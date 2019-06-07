import {
  operation1, operation2, operation3, operation4, operation5, operation9, operation13, operation17,
  operation21, operation22, operation23, operation24, operation25, operation26, operation27, operation28, operation29, operation30, operation31, operation32
} from "./OperationsDummyData"

export const role1 = {
  id: 0,
  name: "Member",
  permissions: [
    operation1, operation5, operation9, operation13, operation17
  ]
};
export const role2 = {
  id: 1,
  name: "Director",
  permissions: [
    operation1, operation2, operation3, operation4, operation5, operation9, operation13, operation17,
    operation21, operation22, operation23, operation24, operation25, operation26, operation27, operation28, operation29, operation30, operation31, operation32
  ]
};
export const role3 = {
  id: 2,
  name: "Human Resource Manager",
  permissions: []
};
export const role4 = {
  id: 3,
  name: "Sales Manager",
  permissions: []
};
export const role5 = {
  id: 4,
  name: "Development Manager",
  // permissions: [operation1, operation4],
  permissions: [operation1]
};

export const roles = [ role2, role3, role4, role5, role1]

export const addRole = () => {
  var newRole = {}
  newRole.id = roles.length;
  newRole.name = "New Role";
  newRole.permissions = [];
  var member = roles.pop();
  roles.push(newRole);
  roles.push(member);
  return newRole;
};