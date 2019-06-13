import { store } from "Redux/store"

export const accessControlHelper = (action, match) => {
  var state = store.getState()
  var user = state.authUser.user
  var access = state.authUser.access

  var actions = []
  for (let i = 0; i < action.length; i++) {
    if(action[i] == "me")
      actions.push(action[i])
    else if (action[i] == "global")
      actions.push(action[i])
    else {
      actions.push(access.find(acc => { return `${acc.model}:${acc.method}` == action[i]}))
    }
  }

  if(user) {
    for (let i = 0; i < actions.length; i++) {
      var act = actions[i];
      if (act == "me") {
        if (user.id == match.params.id)
          return true
      } else if (act == "global"){
        return true
      } else {
        if (user.isSuperAdmin) {
          return true
        } else {
          if (access.includes(act))
            return true
        }
      }
    }
  }
  
  return false
}

