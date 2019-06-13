import React, { Component } from "react";
import { connect } from "react-redux";

class AccessControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, action, user, access, match, noAccessComponent } = this.props;
    if(user) {
      for (let i = 0; i < action.length; i++) {
        var act = action[i];
        if (act == "me") {
          if (user.id == match.params.id)
            return children
        } else if (act == "global"){
          return children
        } else {
          if (user.isSuperAdmin) {
            return children
          } else {
            if (access.find(acc => { return `${acc.model}:${acc.method}` == action[i]}))
              return children
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

const mapStateToProps = ({ authUser }) => {
  const { user, access } = authUser;
  return { user, access };
};

export default connect(
  mapStateToProps,
)(AccessControl);


