/**
 * App Config File
 */
const AppConfig = {
  appLogo: require("Assets/img/appLogo_orig_light.png"), // App Logo
  brandName: "Everyday", // Brand Name
  navCollapsed: false, // Sidebar collapse
  darkMode: false, // Dark Mode
  boxLayout: false, // Box Layout
  rtlLayout: false, // RTL Layout
  miniSidebar: false, // Mini Sidebar
  enableSidebarBackgroundImage: true, // Enable Sidebar Background Image
  isDarkSidenav: true, // Set true to dark sidebar
  enableThemeOptions: false, // Enable Theme Options
  locale: {
    languageId: "english",
    locale: "en",
    name: "English",
    icon: "en"
  },
  //enableUserTour: process.env.NODE_ENV === "production" ? true : false, // Enable / Disable User Tour
  copyRightText: "Everyday © All Rights Reserved.", // Copy Right Text
  // light theme colors
  themeColors: {
    primary: "#1482AF",
    secondary: "#FAC257",
    success: "#61CE61",
    danger: "#D15D5D",
    warning: "#E5AA4A",
    info: "#125B96",
    dark: "#677180",
    default: "#FAFAFA",
    greyLighten: "#A5A7B2",
    grey: "#677080",
    white: "#FFFFFF",
    purple: "#896BD6",
    yellow: "#D46B08",
    accounting: "E46464"
  },
  // dark theme colors
  darkThemeColors: {
    darkBgColor: "#424242"
  }
};

export default AppConfig;
