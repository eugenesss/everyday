/**
 * Horizontal App
 */
import React, { Component } from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// horizontal layout
import RctHorizontalLayout from "Components/RctHorizontalLayout";

// router service
import routerService from "../services/_routerService";
// redux action
import { getUserRights } from "Actions";

class RctHorizontalApp extends Component {
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
      <RctHorizontalLayout>
        {routerService &&
          routerService.map((route, key) => (
            <Route
              key={key}
              path={`${match.url}/${route.path}`}
              component={route.component}
            />
          ))}
      </RctHorizontalLayout>
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
  )(RctHorizontalApp)
);
