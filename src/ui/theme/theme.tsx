import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000",
    },
    secondary: {
      main: "#00e676",
      light: "#66ffa6",
      dark: "#00b248",
    },
    error: {
      main: "#ff5252",
      light: "#ff867f",
      dark: "#c50e29",
    },
    text: {
      primary: "#008837",
      secondary: "#000000",
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
