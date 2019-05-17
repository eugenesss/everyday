import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import {
  Async_user_profile_component
} from "Components/AsyncComponent/AsyncComponent";

export default class crmSwitcher extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="saas-dashboard">
        <Switch>
          <Route
            exact
            path={`${match.url}/:id`}
            component={Async_user_profile_component}
          />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
