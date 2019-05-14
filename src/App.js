/**
 * Main App
 */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";

//date moment - material ui
import moment from "moment";
//import MomentUtils from "@date-io/moment";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
// css
import "./lib/reactifyCss";

// react-dates
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";

// app component
import App from "./container/App";

import { configureStore } from "./redux/store";

const MainApp = () => (
  <Provider store={configureStore()}>
    <MuiPickersUtilsProvider utils={MomentUtils} moment={moment}>
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </MuiPickersUtilsProvider>
  </Provider>
);

export default MainApp;
