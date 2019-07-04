/**
 * Rct Theme Provider
 */
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";

// App locale
import AppLocale from "../lang";

// themes
import primaryTheme from "./themes/primaryTheme";

function RctThemeProvider(props) {
  const { locale, children } = props;
  const currentAppLocale = AppLocale[locale.locale];
  return (
    <MuiThemeProvider theme={primaryTheme}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <React.Fragment>{children}</React.Fragment>
      </IntlProvider>
    </MuiThemeProvider>
  );
}

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
};

export default connect(mapStateToProps)(RctThemeProvider);
