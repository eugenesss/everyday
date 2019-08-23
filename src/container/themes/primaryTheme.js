/**
 * App Light Theme
 */
import { createMuiTheme, fade } from "@material-ui/core/styles";
import AppConfig from "Constants/AppConfig";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: AppConfig.themeColors.primary
    },
    secondary: {
      main: AppConfig.themeColors.secondary
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Lato"
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: "15px"
      }
    },
    MuiStepIcon: {
      text: {
        fill: "#fff"
      }
    },
    MuiButton: {
      contained: {
        backgroundColor: "#ececec"
      }
    }
  },
  custom: {
    sideDrawerPaperHeight: "calc(100vh - 160px)",
    boxShadow: "0 1px 15px 1px rgba(69, 65, 78, 0.08)"
  }
});

export default theme;
