import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import lightblue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
//	#96A1F8 #6970ad #96A1F8 #abb3f9 or indigo [A100]
// light: blue [200],
// main:  blue [500],
// dark:  blue [700],  A100


const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo [200],
      main:  '#8C9EFF' ,
      dark:  indigo [700],
    },
    secondary: {
      light: lightblue[300],
      main:  lightblue[500],
      dark:  lightblue[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
