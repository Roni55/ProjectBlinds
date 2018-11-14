import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from '@material-ui/core/Button';

//import withRoot from '../withRoot';

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#d32f2f'
        }
      },
});

const styles =  ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.light,
      boxShadow: '0 3px 5px 2px rgb(140,158,255) ',
      
    },
  });

function MaterialButton(props) {
    const {  theme ,styles} = props;
    return (
        <MuiThemeProvider theme={theme}>
            <Button
                onClick={this.someMethod}
                variant="raised"
                color="secondary" >
            </Button>
        </MuiThemeProvider>
    );
}

// export default MaterialButton;

//   MaterialButton.propTypes = {
//     theme: PropTypes.object.isRequired,
//   };
  
  export default withStyles(styles)(MaterialButton);