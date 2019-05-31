export const group0 = {
  id: 0,
  name: "Global",
}
export const group1 = {
  id: 1,
  name: "Sales Team 1",
};
export const group2 = {
  id: 2,
  name: "Sales Team 2",
};
export const group3 = {
  id: 3,
  name: "Marketing Team 1",
};
export const group4 = {
  id: 4,
  name: "Marketing Team 2",
};
export const group5 = {
  id: 5,
  name: "Backend Team",
};
export const groups = [ group1, group2, group3, group4, group5, group0]

export const addGroup = () => {
  var newGroup = {}
  newGroup.id = groups.length;
  newGroup.name = "New Group";
  var global = groups.pop();
  groups.push(newGroup);
  groups.push(global);
  return newGroup;
};
