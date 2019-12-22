import { createMuiTheme } from "@material-ui/core/styles";

import DinProFont from "./fonts/DINPro-Regular.woff";

const dinpro = {
  fontFamily: "DINPro Regular",
  fontStyle: "normal",
  fontWeight: "normal",
  src: `
        local('DINPro Regular'),
        url(${DinProFont}) format('woff')
        `
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "DINPro Regular"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [dinpro]
      }
    }
  }
});

export default theme;
