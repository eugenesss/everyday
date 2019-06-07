import { store } from "Redux/store"

export const accessControlHelper = (action, match) => {
  var state = store.getState()
  //console.log(state)
  var me = state.usersState.me //AuthUser
  var roles = state.rolesState.roles
  if(!me.id || roles.length == 0) {
    return false
  } else {
    for (let i = 0; i < action.length; i++) {
      var act = action[i];
      if (act == "me") {
        if (me.id == match.params.id)
          return true
      } else if (act == "global"){
        return true
      } else {
        if (me.isSuperAdmin) {
          return true
        } else {
          if(me.role.length > 0) {
            for (let n = 0; n < me.role.length; n++) {
              var rol = roles.find( role => role.id === me.role[n].id );
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

