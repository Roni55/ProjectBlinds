import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import React, { PureComponent } from 'react';

export default class Dashboard extends PureComponent {
  render() {
    return (
      <AppBar position="static">
        <div>
          <Button>
            <div>Button 1</div>
          </Button>
          <Button>
            <div>Button 2</div>
          </Button>
        </div>
      </AppBar>
    );
  }
}