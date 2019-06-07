import React, { Component } from "react";
import { connect } from "react-redux";

import { getAllRoles, getAllUsers } from "Actions";



class AccessControl extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(!this.props.me.id || this.props.roles.length == 0) {
      this.props.getAllRoles();
      this.props.getAllUsers();
    }
  }

  render() {
    const { children, action, roles, user, me, match, noAccessComponent } = this.props;
    if(!me.id || roles.length == 0) {
      return null
    } else {
      for (let i = 0; i < action.length; i++) {
        var act = action[i];
        if (act == "me") {
          if (me.id == match.params.id)
            return children
        } else if (act == "global"){
          return children
        } else {
          if (me.isSuperAdmin) {
            return children
          } else {
            if(me.role.length > 0) {
              for (let n = 0; n < me.role.length; n++) {
                var rol = roles.find( role => role.id === me.role[n].id );
                if(rol)
                  if (rol.permissions.includes(act))
                    return children
              }
            } else {
              var member = roles.find( role => role.name === "Member" );
              if(member)
                if (member.permissions.includes(act))
                  return children
            }
          }
        }
      }
    }
    if(noAccessComponent)
      return noAccessComponent
    else
      return null
  }
}

const mapStateToProps = ({ authUser, rolesState, usersState }) => {
  const { me } = usersState
  const { roles } = rolesState;
  const { user } = authUser;
  return { roles, user, me };
};

export default connect(
  mapStateToProps,
  { getAllRoles, getAllUsers }
)(AccessControl);


