import { role1, role2, role3, role4, role5 } from "./RolesDummyData";

 export const user1 = {
  id: 1,
  firstName: "Eugene",
  lastName: "Sim",
  name: "Eugene Sim",
  contact: "+65-9338-0142",
  email: "eugene@ocdigitalnetwork.com",
  //password: "eugene123",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: true,
  isEmailVerified: true,
  role: [role3]
};
export const user2 = {
  id: 2,
  name: "Jeng Lim",
  firstName: "Jeng",
  lastName: "Lim",
  contact: "+65-8778-7074",
  email: "limjeng@ocdigitalnetwork.com",
  //password: "jeng123!@#",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: false,
  isEmailVerified: true,
  role: [role5]
};
export const user3 = {
  id: 3,
  name: "Benny Ong",
  firstName: "Benny",
  lastName: "Ong",
  contact: "+65-9001-6292",
  email: "benny@ocdigitalnetwork.com",
  //password: "benny123!@#",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: true,
  isEmailVerified: true,
  role: [role3]
};
export const user4 = {
  id: 4,
  name: "John Chang",
  firstName: "John",
  lastName: "Chang",
  contact: "+65-9010-7786",
  email: "john@ocdigitalnetwork.com",
  //password: "john123!@#",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: true,
  isEmailVerified: true,
  role: [role4, role5]
};

export var users = [user1, user2, user3, user4];

export const addUser = newUser => {
  newUser.id = users.length + 1;
  newUser.name = newUser.firstName + " " + newUser.lastName;
  users.push(newUser);
  return newUser;
};
