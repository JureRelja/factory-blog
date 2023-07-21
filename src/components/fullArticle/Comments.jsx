import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newComment } from "../../store/commentsSlice.jsx";

function Comments({ articleID }) {
  const dispatch = useDispatch();

  const allComments = useSelector((state) => state.comments);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userComment, setUserComment] = useState("");
  const [commentError, setCommentError] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserComment = (e) => {
    setUserComment(e.target.value);
  };

  const handleNewComment = (e) => {
    e.preventDefault();

    if (
      userName.trim() === "" ||
      userEmail.trim() === "" ||
      userComment.trim() === ""
    ) {
      setCommentError(true);
      return;
    }

    const newUserComment = {
      id: thisArticleComments.length + 1,
      userName: userName,
      userImage: "/src/assets/dummyImages/avatarPlaceholder.jpg",
      commentDate: new Date().toISOString(),
      content: userComment,
    };
    dispatch(newComment({ articleID: articleID, newComment: newUserComment }));
  };

  const thisArticleComments = allComments.find(
    (article) => article.articleID === parseInt(articleID)
  ).comments;

  const arrayForSort = [...thisArticleComments];

  const sortedComments = arrayForSort.sort((a, b) => {
    return new Date(b.commentDate) - new Date(a.commentDate);
  });

  return (
    <div className="comments-wrapper">
      <h3 className="heading mb-5">Comments</h3>
      <div className="comments p-0 m-0 mb-0">
        {sortedComments.map((comment) => (
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
                  <span className="comment-date">
                    {new Date(comment.commentDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                    })}
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
            <form className="comment-form" onSubmit={handleNewComment}>
              <input type="text" placeholder="Name" onChange={handleUserName} />
              <input
                type="email"
                placeholder="Email Adress"
                onChange={handleUserEmail}
              />
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="Comment"
                onChange={handleUserComment}
              ></textarea>

              <button className="post-comment-btn mt-3">Submit</button>
            </form>
            {commentError && <p>Please fill correctly all fields</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
