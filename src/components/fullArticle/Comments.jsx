import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadComments, newComment } from "../../store/commentsSlice.jsx";
import articles from "../../assets/dummyPosts.json";
import * as fs from "fs";

function Comments({ article }) {
  const dispatch = useDispatch();
  //Getting the comments from Redux state
  const comments = useSelector((state) => state.comments.comments);

  const commentsRef = useRef(null);

  //Copying the comments from json file to Redux state
  useEffect(() => {
    dispatch(
      loadComments({ articleID: article.id, comments: article.comments })
    );
  }, []);

  //Handling the new comment
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
      id: Math.floor(Math.random() * 100),
      userName: userName,
      commentDate: new Date().toISOString(),
      content: userComment,
      userImage: "/src/assets/dummyImages/avatarPlaceholder.jpg",
    };

    dispatch(newComment(newUserComment)); //Adding the new comment to Redux state

    setUserName("");
    setUserEmail("");
    setUserComment("");
    setCommentError(false);

    commentsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //Sorting the comments by date
  const arrayForSort = [...comments];

  const sortedComments = arrayForSort.sort((a, b) => {
    return new Date(b.commentDate) - new Date(a.commentDate);
  });

  return (
    <div className="comments-wrapper w-100">
      <h3 className="heading mb-5">Comments</h3>
      <div className="comments p-0 m-0 mb-0 w-100" ref={commentsRef}>
        {sortedComments.map((comment) => (
          <div className="comment w-100" key={comment.id}>
            <img
              src={comment.userImage}
              alt={comment.userName}
              className="comment-user-img"
            />
            <div className="d-flex flex-column gap-1 w-100">
              <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex justify-content-start align-items-baseline gap-3 w-100">
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
