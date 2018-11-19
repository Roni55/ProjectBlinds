import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ReactRouter from "react-router";
import * as PropTypes from "prop-types";
import { Switch, Route, Redirect, Link  } from "react-router-dom";
import { Cases } from './../Cases';
import { SidePane } from './../SidePane';
import { withStyles, WithStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { withRouter } from "react-router-dom";
import Badge from 'material-ui/Badge';
import Grid from 'material-ui/Grid';
import { Theme } from 'material-ui/styles';
import SimpleLineIcons from '../../Shared/SimpleLineIcons'

interface IState {
    userName: string;
}

interface IProps {
    history?: any
}

const styles = (theme: Theme) => ({
    root: theme.typography.display1,
    badge: {
        right: '-28px',
        color: theme.palette.common.white,
    },
    imageStyle:{
        float: 'left',
        height: '40px',
        paddingTop: '10px'
    },
    myAccount: {
        float: 'right'
    },
    topMenuAccount: {
        marginLeft: '0.5em',
        cursor: 'pointer'
    }
});

type WithStyleProps = 'root' | 'badge' | 'imageStyle' | 'myAccount' | 'topMenuAccount';

class Menu extends React.Component<IProps & WithStyles<WithStyleProps>, IState> {
    constructor(props: IProps & WithStyles<WithStyleProps>) {
        super(props);
        this.state = {
            userName: localStorage.userName ? 'userName ' + localStorage.userName : ""
        }
    }
    componentDidMount() {
        this.setState({ userName: localStorage.userName ? localStorage.userName : "" })
    }
    logout(event: any) {
        localStorage.removeItem('token');
        window.location.href = "/"
    }

    handleChange = (event: any, value: any) => {
        this.props.history.push(value);
    };

    render() {
        const classes = this.props.classes;
        let route = '/' + this.props.history.location.pathname.split('/')[1];
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12} className={classes.root}>
                        <img src="/Features/Client/Menu/logo.png" alt="Logo" className={classes.imageStyle} />
                        <div className={this.props.classes.myAccount}>
                        <span><span className={this.props.classes.topMenuAccount}>MY ACCOUNT</span><span className={classes.topMenuAccount}><SimpleLineIcons iconName={'user'} />&#x25BE;</span></span>
                            <span onClick={this.logout} className={classes.topMenuAccount}><SimpleLineIcons iconName={'logout'} /></span>
                        </div>
                    </Grid>
                    <Grid item xs={12} >
                        <div className="route-list">
                            <Tabs
                                value={route}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                            >
                                <Tab label="Overview" value="/" />
                                <Tab label={<Badge classes={{ badge: classes.badge }} badgeContent={this.props.caseRenewalCount} color="primary">
                                    Renewals
                            </Badge>} value="/renewals" />
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(withRouter(Menu))
