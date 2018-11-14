import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from '@material-ui/core/Button';
const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#d32f2f'
        }
      },
});
function MaterialButton(props) {
    return (
        <MuiThemeProvider theme={theme}>
            <Button
                onClick={this.someMethod}
                variant="raised"
                color="secondary" >
        </Button>
        </MuiThemeProvider>
    ):
}