import React from 'react';
import ActionLock from 'material-ui/svg-icons/action/lock';
import muiThemeable from 'material-ui/styles/muiThemeable';
class LockIcon extends React.Component {
    render() {
        return(
            <ActionLock color={this.props.muiTheme.palette.secondary} />
        )
    }
}
        export default muiThemeable()(LockIcon)