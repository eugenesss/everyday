const user1 = {
  id: 0,
  name: "Eugene Sim",  
  contact: "+65-9338-0142",
  email: "eugene@ocdigitalnetwork.com",
  //password: "eugene123",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: true,
  isEmailVerified: true,
  role: ["Development Manager"]
  //role: [role[9]["id"]],
};
const user2 = {
  id: 1,
  name: "Jeng Lim",
  contact: "+65-8778-7074",
  email: "limjeng@ocdigitalnetwork.com",
  //password: "jeng123!@#",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: true,
  isEmailVerified: true,
  role: ["Development Member"],
};
const user3 = {
  id: 2,
  name: "Benny Ong",
  contact: "+65-9001-6292",
  email: "benny@ocdigitalnetwork.com",
  //password: "benny123!@#",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: true,
  isEmailVerified: true,
  role: ["Director"],
};
const user4 = {
  id: 3,
  name: "John Chang",
  contact: "+65-9010-7786",
  email: "john@ocdigitalnetwork.com",
  //password: "john123!@#",
  description:
    "Lorem ipsum dolor sit amet, omnis quando neglegentur cum an. Pro postulant concludaturque te, omnis conceptam nec et.",
  isSuperAdmin: true,
  isEmailVerified: true,
  role: ["Director", "Sales Manager"],
};

export var users = [user1, user2, user3, user4];

export const addUser = (newUser) => {
  newUser.id = users.length
  users.push(newUser)
  return newUser
}

