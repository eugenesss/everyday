import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// horizontal layout
import AppContainer from "./layoutContainer";

// Init Modules
import moduleInit from "Services/_moduleInitialise";

// redux action
import { getUserRights } from "Actions";

class HorizontalContainer extends Component {
  componentDidMount() {
    if (!this.props.access || this.props.access.length == 0) {
      //load access rights from server
      this.props.getUserRights();
    }
  }

  render() {
    const { match, location } = this.props;
    if (location.pathname === "/") {
      return <Redirect to={"/app/homebase"} />;
    }

    return (
      <AppContainer>
        {moduleInit &&
          moduleInit.map((route, key) => (
            <Route
              key={key}
              path={`${match.url}/${route.path}`}
              component={route.component}
            />
          ))}
      </AppContainer>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  const { loggedInUser, loading, error } = authUser;
  const { access } = loggedInUser;
  return { loading, error, access };
};
export default withRouter(
  connect(
    mapStateToProps,
    {
      getUserRights
    }
  )(HorizontalContainer)
);
