import React from "react";

//Question: Render nested comments recursively.

// Sample nested comments data.
const comments = [
  {
    id: 1,
    text: "Parent",
    replies: [
      {
        id: 2,
        text: "Child",
        replies: [
          {
            id: 3,
            text: "Grand Child",
            replies: [],
          },
        ],
      },
    ],
  },
];

function Comment({ comment }) {
  return (
    <div
      style={{
        marginLeft: "20px", // Indent child comments
        marginTop: "10px",
        borderLeft: "2px solid #ccc",
        paddingLeft: "15px",
      }}
    >
      {/* Display current comment */}
      <div
        style={{
          background: "#f5f5f5",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        {comment.text}
      </div>
      {/* 
        Loop through all replies.
        If a reply has its own replies,
        the Comment component calls itself again.
      */}

      {comment.replies.map((reply) => (
        <Comment key={reply.id} comment={reply} />
      ))}
    </div>
  );
}
const J_Nested_Comments = () => {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "30px auto",
        fontFamily: "Arial",
      }}
    >
      <h2>Nested Comments</h2>
      {/* Render all top-level comments  */}
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
};

export default J_Nested_Comments;
