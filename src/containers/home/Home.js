import React from "react";
import CommentList from "../../components/comment-list/CommentList";
import CommentBox from "../../components/comment-box/CommentBox";

const Home = () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default Home;
