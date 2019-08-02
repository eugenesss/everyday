/**
 * App Light Theme
 */
import { createMuiTheme } from "@material-ui/core/styles";
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
    }
  }
});

export default theme;
