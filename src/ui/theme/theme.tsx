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
    text: {
      primary: "#00b248",
      secondary: "#000000",
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
