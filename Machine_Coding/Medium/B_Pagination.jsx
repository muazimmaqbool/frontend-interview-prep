import React, { useState } from "react";

/*
->Question:
    Display 100 users.
        Show 10 users per page
        Previous button
        Next button
*/

//Creates 100 users:
const users = Array.from({ length: 100 }, (_, i) => `User ${i + 1}`);

const B_Pagination = () => {
  const [page, setpage] = useState(1);
  const pageSize = 10;
  const start = (page - 1) * pageSize; //This tells React where to begin.
  const current = users.slice(start, start + pageSize);

  //Extra we can calculate total pages in advance also:
  const totalPages=Math.ceil(users.length/pageSize)
  return (
    <div>
      <h2>Pagination In React</h2>
      <h4>Users:</h4>
      {current.map((u) => (
        <p style={{fontSize:"1.5rem"}} key={u}>{u}</p>
      ))}
      <button
        disabled={page === 1}
        onClick={() => setpage((p) => p - 1)}
      >
        Prev
      </button>

      <button
        disabled={page === totalPages}
        onClick={() => setpage((p) => p + 1)}
      >
        Next
      </button>
      <p>page {page} of {totalPages}</p>
    </div>
  );
};
/*
-> Explanation:
    1) const users = Array.from({ length: 100 }, (_, i) => `User ${i + 1}`);
      Array.from(): Creates an array from an object.

      array.from({ length: 5 }); Creates an array with 5 empty slots.
      The second argument is a callback:
          (_, i) => `User ${i + 1}`
          _ → current value (unused)
          i → index (0,1,2...)
            Output:
            [
              "User 1",
              "User 2",
              "User 3",
              ...
              "User 100"
            ]

    2) const start = (page - 1) * pageSize;
        This tells React where to begin.
        | Page | Formula  | Start Index |
        | ---- | -------- | ----------: |
        | 1    | (1-1)*10 |           0 |
        | 2    | (2-1)*10 |          10 |
        | 3    | (3-1)*10 |          20 |
        | 4    | (4-1)*10 |          30 |

    3) const current = users.slice(start, start + pageSize);
        slice(start, end):Returns elements from start to end-1
        returns elements at indices 0 through 9 (10 elements total).
        but const users = [
        "User 1",  // index 0
        "User 2",  // index 1
        "User 3",  // index 2
        ...
        "User 10", // index 9
        "User 11", // index 10
      ]; is like this so slice(0,10) is user 1 to user 10
*/  

export default B_Pagination;
