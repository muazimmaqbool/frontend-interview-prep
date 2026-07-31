import React, { useState } from "react";

/*
Question: Display employee data.
        Requirements:
            1. Sort by Name.
            2. Sort by Age.
            3. Toggle Ascending / Descending order.
*/

const data = [
  { id: 1, name: "ABC", age: 18 },
  { id: 2, name: "DEF", age: 20 },
  { id: 3, name: "GHI", age: 15 },
  { id: 4, name: "JKL", age: 8 },
  { id: 5, name: "MNO", age: 31 },
  { id: 6, name: "PQR", age: 31 },
];

const O_Sortable_Table = () => {
  const [users, setUsers] = useState(data);
  const [order, setOrder] = useState("asc");

  const sortBy = (field) => {
    // Create a copy to avoid mutating state directly.
    const sorted = [...users].sort((a, b) => {
      // String sorting (name).
      if (typeof a[field] === "string") {
        // Ascending Order: Alice, Bob, John, Mike
        // localeCompare():
        // Returns:
        // -1 => a comes before b
        //  0 => equal
        //  1 => a comes after b
        return order === "asc"
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      }

      // Number sorting (age).
      // Ascending Order: 22, 28, 35
      // If result is negative:
      // 22 - 35 = -13 then 22 comes before 35
      return order === "asc" ? a[field] - b[field] : b[field] - a[field];
    });

    setUsers(sorted);
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sortable Table</h2>

      {/* buttons */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => sortBy("name")}
          style={{
            padding: "8px 14px",
            cursor: "pointer",
          }}
        >
          Sort By Name
        </button>

        <button
          onClick={() => sortBy("age")}
          style={{
            padding: "8px 14px",
            cursor: "pointer",
          }}
        >
          Sort By Age
        </button>

        <button
          onClick={() => setOrder((prev) => (prev === "asc" ? "desc" : "asc"))}
          style={{
            padding: "8px 14px",
            cursor: "pointer",
            background: order === "asc" ? "#22c55e" : "#ef4444",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Order: {order.toUpperCase()}
        </button>
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                background: "#f4f4f4",
              }}
            >
              Name
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                background: "#f4f4f4",
              }}
            >
              Age
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                {user.name}
              </td>

              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                {user.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default O_Sortable_Table;
