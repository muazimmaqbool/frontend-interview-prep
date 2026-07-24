import React from "react";

//Question: Render nested comments recursively.

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
    <div style={{ marginLeft: 20 }}>
      <p>{comment.text}</p>
      {comment.replies.map((reply) => (
        <Comment key={reply.id} comment={reply} />
      ))}
    </div>
  );
}
const J_Nested_Comments = () => {
  return (
    <div>
      <h2>Nested Comments</h2>
      {comments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </div>
  );
};

export default J_Nested_Comments;
