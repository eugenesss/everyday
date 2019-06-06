import { roles, role1, role2, role3, role4, role5 } from "./RolesDummyData"
import { groups, group0, group1, group2, group3, group4, group5} from "./GroupsDummyData"

const hierarchy1 = {
  group: group1,
  role: role2,
  tier: 1
};
const hierarchy2 = {
  group: group1,
  role: role4,
  tier: 2
};
const hierarchy3 = {
  group: group2,
  role: role3,
  tier: 1
};
const hierarchy4 = {
  group: group2,
  role: role2,
  tier: 2
};
const hierarchy5 = {
  group: group2,
  role: role4,
  tier: 3
};
const hierarchy6 = {
  group: group3,
  role: role2,
  tier: 1
};
const hierarchy7 = {
  group: group3,
  role: role3,
  tier: 2
};
const hierarchy8 = {
  group: group3,
  role: role5,
  tier: 3
};
const hierarchy9 = {
  group: group4,
  role: role2,
  tier: 1
};
const hierarchy10 = {
  group: group4,
  role: role3,
  tier: 2
};
const hierarchy11 = {
  group: group5,
  role: role4,
  tier: 3
};
const hierarchy12 = {
  group: group0,
  role: role1,
  tier: 1
};
const hierarchy13 = {
  group: group0,
  role: role2,
  tier: 1
};
const hierarchy14 = {
  group: group0,
  role: role3,
  tier: 1
};
const hierarchy15 = {
  group: group0,
  role: role4,
  tier: 1
};
const hierarchy16 = {
  group: group0,
  role: role5,
  tier: 1
};

export var hierarchies = [hierarchy1, hierarchy2, hierarchy3, hierarchy4, hierarchy5, hierarchy6, hierarchy7, hierarchy8, hierarchy9, hierarchy10, hierarchy11, hierarchy12, hierarchy13, hierarchy14, hierarchy15, hierarchy16 ]

export const addHierarchy = (hierarchy) => {
  hierarchies.push(hierarchy)
  return (hierarchy)
}

export const deleteHierarchy = (roleID, groupID) => {
  var index = hierarchies.findIndex(hierarchy => hierarchy.role.id == roleID && hierarchy.group.id == groupID)
  var hierarchy = hierarchies[index]
  if (index > -1) {
    hierarchies.splice(index, 1);
  }
  return (hierarchy)
}

export const updateHierarchy = (selectedHierarchies) => {
  var indexes = []
  for (let i = 0; i < selectedHierarchies.length; i++) {
    indexes.push(hierarchies.findIndex(hierarchy => hierarchy.role.id == selectedHierarchies[i].role.id && hierarchy.group.id == selectedHierarchies[i].group.id))
  }
  // for (let i = 0; i < indexes.length; i++) {
  //   hierarchies.splice(indexes[i], 1)
  // }
  return hierarchies
}