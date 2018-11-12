import React from "react";

class Post extends React.Component {
  componentWillUpdate() {
    console.log("update");
  }

  render() {
    const { location, match, history } = this.props;
    // location: 
    // match: 
    // history:
    return (
      <div>
        <h2>Post</h2>
        <p>Post page #{match.params.id}</p>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("unmount");
  }
}

export default Post;