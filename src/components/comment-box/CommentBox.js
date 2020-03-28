import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../redux/comment-box/actions";
import { fetchComments } from "../../redux/fetch-comments/actions";

class CommentBox extends Component {
  state = {
    comment: ""
  };

  handleComment = ({ target }) => {
    this.setState({ comment: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { comment } = this.state;
    const { addComment } = this.props;
    addComment(comment);
    this.setState({ comment: "" });
  };

  render() {
    const { comment } = this.state;
    const { fetchComments } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Enter a comment</h4>
          <textarea onChange={this.handleComment} value={comment} />
          <div>
            <button>Submit</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={fetchComments}>
          Fetch comments
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: comm => dispatch(addComment(comm)),
  fetchComments: res => dispatch(fetchComments(res))
});

export default connect(null, mapDispatchToProps)(CommentBox);
