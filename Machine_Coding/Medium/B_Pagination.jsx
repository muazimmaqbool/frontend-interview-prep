import React, { useState } from "react";

/*
->Question:
    Display 100 users.
        Show 10 users per page
        Previous button
        Next button
*/

const users = Array.from({ length: 100 }, (_, i) => `User ${i + 1}`);
const B_Pagination = () => {
  const [page, setpage] = useState(1);
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const current = users.slice(start, start + pageSize);
  return (
    <div>
      <h2>Pagination In React</h2>
      <h4>Users:</h4>
      {current.map((u) => (
        <p key={u}>{u}</p>
      ))}
      <button
        disabled={page === 1}
        onClick={() => setpage((p) => p - 1)}
      >
        Prev
      </button>

      <button
        disabled={page === 10}
        onClick={() => setpage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default B_Pagination;
