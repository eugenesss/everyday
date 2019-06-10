import { store } from "Redux/store"

export const accessControlHelper = (action, match) => {
  var state = store.getState()

  var me = state.usersState.me //AuthUser
  var roles = state.rolesState.roles
  var operations = state.rolesState.operations

  var actions = []
  for (let i = 0; i < action.length; i++) {
    if(action[i] == "me")
      actions.push(action[i])
    else if (action[i] == "global")
      actions.push(action[i])
    else {
      actions.push(operations.find(op => { return `${op.name}:${op.operation}` == action[i]}))
    }
  }

  if(!me.id || roles.length == 0) {
    return false
  } else {
    for (let i = 0; i < actions.length; i++) {
      var act = actions[i];
      if (act == "me") {
        if (me.id == match.params.id)
          return true
      } else if (act == "global"){
        return true
      } else {
        if (me.isSuperAdmin) {
          return true
        } else {
          if(me.access.length > 0) {
            for (let n = 0; n < me.access.length; n++) {
              var rol = roles.find( role => role.id === me.access[n].role.id );
              if(rol)
                if (rol.permissions.includes(act))
                  return true
            }
          } else {
            var member = roles.find( role => role.name === "Member" );
            if(member)
              if (member.permissions.includes(act))
                return true
          }
        }
      }
    }
  }
  return false
}

