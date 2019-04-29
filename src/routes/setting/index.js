import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// async components
import {
  Async_setting_page_component,
  Async_setting_user_component
} from "Components/AsyncComponent/AsyncComponent";

export default class settingSwitcher extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="saas-dashboard">
        <Switch>
          {/* ------- /All Setting Page ------- */}
          <Route
            exact
            path={`${match.url}/`}
            component={Async_setting_page_component}
          />
          {/* ------- /User Management ------- */}
          <Route
            exact
            path={`${match.url}/user_management`}
            component={Async_setting_user_component}
          />

          {/* ------- /404 ------- */}
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}
