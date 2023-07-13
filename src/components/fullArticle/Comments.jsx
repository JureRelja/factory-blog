import React from "react";

function Comments({ comments }) {
  const handleNewComment = (e) => {
    e.preventDefault();
  };

  return (
    <div className="comments-wrapper">
      <h3 className="heading mb-5">Comments</h3>
      <div className="comments p-0 m-0 mb-0">
        {comments.map((comment) => (
          <div className="comment " key={comment.id}>
            <img
              src={comment.userImage}
              alt={comment.userName}
              className="comment-user-img"
            />
            <div className="d-flex flex-column gap-1 ">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-start align-items-baseline gap-3">
                  <span className="comment-user-name">{comment.userName}</span>
                  <span className="meta-text-footer">
                    {comment.commentDate}
                  </span>
                </div>
                <button className="reply-button">Reply</button>
              </div>
              <p className="comment-content p-0 m-0">{comment.content}</p>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-start flex-column align-top gap-4">
          <h3 className="heading">Add Your Comment</h3>
          <div>
            <p className="p-0 m-0">
              Molestias ultricies, ante quam urna ut volutpat, egestas dolor
              dui, nec hac ultrices nulla non netus. Placerat vehicula donec non
              suscipit egestas, augue vel suspendisse. Et felis venenatis
              blandit sed est ultrices, adipiscing urna.
            </p>
          </div>
          <div>
            <form className="comment-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email Adress" />
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="Comment"
              ></textarea>

              <button
                className="post-comment-btn mt-3"
                onClick={handleNewComment}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
