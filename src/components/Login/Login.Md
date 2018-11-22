import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyLogin from "./components/MyLogin";
// <img src={logo} className="App-logo" alt="logo" />
import AuthService from "./components/AuthService";
import withAuth from "./components/withAuth";
const Auth = new AuthService();
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  history,
  withRouter
} from "react-router-dom";
import "./styles.css";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const Public = () => <h3> Public </h3>;
const Protected = () => <h3> Protected </h3>;

function UserProfile(props) {
  return (
    <div className="user-profile">
      <img src={props.userProfile.picture} />
      <p>{props.userProfile.name}</p>
    </div>
  );
}
class SubscriptionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      acceptedTerms: false,
      email: ""
    };
  }

  updateCheckbox(checked) {
    this.setState({
      acceptedTerms: checked
    });
  }

  updateEmail(value) {
    this.setState({
      email: value
    });
  }

  submit() {
    Login.login(() => history.push("/"));
    //   // ... use email and acceptedTerms in an ajax request or similar ...
  }

  render() {
    return (
      <form>
        <input
          type="email"
          onChange={event => {
            this.updateEmail(event.target.value);
          }}
          value={this.state.email}
        />
        <input
          type="checkbox"
          checked={this.state.acceptedTerms}
          onChange={event => {
            this.updateCheckbox(event.target.checked);
          }}
        />
        <button
          onClick={() => {
            this.login;
          }}
        >
          Submit
        </button>
      </form>
    );
  }
}

class Login extends Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  render() {
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <h2> You Must Log in to View this Page </h2>
        <button onClick={this.login}> Log in </button>
        <MyLogin />
      </div>
    );
  }
}

// class Login extends Component {
//   constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this);
//     this.handleFormSubmit = this.handleFormSubmit.bind(this);
//     //this.Auth = new AuthService();

//     this.state = {
//       redirectToReferrer: false
//     };
//   }

//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }));
//     });
//   };

//   handleFormSubmit(e) {
//     e.preventDefault();

//     this.Auth.login(this.state.username, this.state.password)
//       .then(res => {
//         this.props.history.replace("/");
//       })
//       .catch(err => {
//         alert(err);
//       });
//   }

//   // componentWillMount() {
//   //   if (this.Auth.loggedIn()) this.props.history.replace("/");
//   // }
//   render() {
//     const { redirectToReferrer } = this.state;
//     if (redirectToReferrer === true) {
//       return <Redirect to="/" />;
//     }
//     return (
//       <div className="center">
//         <div className="card">
//           <h1>Login</h1>
//           <form>
//             <input
//               className="form-item"
//               placeholder="Username goes here..."
//               name="username"
//               type="text"
//               onChange={this.handleChange}
//             />
//             <input
//               className="form-item"
//               placeholder="Password goes here..."
//               name="password"
//               type="password"
//               onChange={this.handleChange}
//             />

//             <button className="form-submit" onClick={this.login}>
//               {" "}
//               Log in{" "}
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   handleChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
// }

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated === true ? (
    <p className="App-intro">
      <h3>Please Sign Out</h3>
      <button
        type="button"
        className="form-submit"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
    <h3> You are not logged in </h3>
  )
);

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleLogout = this.handleLogout.bind(this);
  }
  // handleLogout() {
  //   Auth.logout();
  //   this.props.history.replace("/login");
  // }
  //     const { redirectToReferrer } = this.state;
  // if (redirectToReferrer === true) {
  //   return <Redirect to="/" />;
  // }

  render() {
    const { redirectToReferrer } = this.props;
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/public">Public Page </Link>
            </li>
            <li>
              <Link to="/protected">Protected Page </Link>
            </li>
          </ul>
          <div className="App">
            <div className="App-header">
              <h2>Welcome </h2>
            </div>
            <AuthButton />
          </div>
          <Route path="/public" component={Public} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}
// export default withAuth(App);
const rootElement = document.getElementById("root");
withAuth(ReactDOM.render(<App />, rootElement));
