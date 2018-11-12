import React, { Component } from "react";
import { Post } from "../index";
import { Link, Route } from "react-router-dom";

class Posts extends Component {
  constructor(props) {
    super(props);
    // this.unblock = props.history.block();
  }

  componentWillUnmount() {
    // this.unblock(); // 
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h2>Posts list</h2>
        <ul>
          <li>
            <Link to={`${match.url}/1`}>post #1</Link>
          </li>
          <li>
            <Link to={`${match.url}/2`}>post #2</Link>
          </li>
          <li>
            <Link to={`${match.url}/3`}>post #3</Link>
          </li>
          <Route exact path={match.url} render={() => <p>select post</p>} />
          <Route exact path={`${match.url}/:id`} component={Post} />
        </ul>
      </div>
    );
  }
}

export default Posts;