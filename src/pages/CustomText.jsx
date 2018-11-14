import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Colors from 'material-ui/lib/styles/colors';
import MyTheme from './theme.js';
import AppBar from 'material-ui/lib/app-bar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

injectTapEventPlugin();

class CustomText extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages : [{id: 1, text: 'Hi'}, {id: 2, text: 'Hello'}, {id: 3, text: 'World'}, {id: 4, text: 'test'}]
		};
	}
	static childContextTypes = {
	  muiTheme: React.PropTypes.object,
	};
	getChildContext() {
	    return {
	        muiTheme: ThemeManager.getMuiTheme(MyTheme),
	    };
	}
	render() {

		var messageNodes = this.state.messages.map((message) => {
			return (<ListItem key={message.id} primaryText={message.text} />);
		});
		return (
		      <div>
		        <AppBar
		          title="Title"
		          iconClassNameRight="muidocs-icon-navigation-expand-more"
		        />
		        <List>{messageNodes}</List>
		      </div>
    		);
	}
}

App.childContextTypes = {
    muiTheme: React.PropTypes.object
};

export default CustomText;