import React from "react";

class Post extends React.Component {
  componentWillUpdate() {
    console.log("update");
  }

  render() {
    const { location, match, history } = this.props;
    // location: 현재 페이지 주소 상태
    // match: 현재 주소 데이터 조회
    // history: 현재 라우트를 조작할 때 사
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