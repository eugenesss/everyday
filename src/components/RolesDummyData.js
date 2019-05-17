const role1 = {
  id: 0,
  name: "Member",
  permissions: ["User:read"]
};
const role2 = {
  if: 1,
  name: "Director",
  permissions: [
    "User:read",
    "User:create",
    "User:update",
    "User:delete",
    "Password:reset",
    "SuperAdmin:update",
    "Permissions:manage",
    "UserRole:update"
  ]
};
const role3 = {
  id: 2,
  name: "Human Resource Manager",
  permissions: ["User:read"]
};
const role4 = {
  id: 3,
  name: "Sales Manager",
  permissions: ["User:read"]
};
const role5 = {
  id: 4,
  name: "Development Manager",
  permissions: ["User:read"]
};

const crud1 = { id: 0, action: "User" };
const crud2 = { id: 1, action: "Lead" };
const crud3 = { id: 2, action: "Customer" };
const crud4 = { id: 3, action: "Account" };
const crud5 = { id: 4, action: "Deal" };

export const crud = [crud1, crud2, crud3, crud4, crud5]
export const roles = [role1, role2, role3, role4, role5]