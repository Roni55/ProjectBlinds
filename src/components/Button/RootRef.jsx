import React from 'react';
import RootRef from '@material-ui/core/RootRef';

class MyComponent extends React.Component {
  constructor() {
    super();
    this.domRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.domRef.current); // DOM node
  }

  render() {
    return (
      <RootRef rootRef={this.domRef}>
        <SomeChildComponent />
      </RootRef>
    );
  }
}