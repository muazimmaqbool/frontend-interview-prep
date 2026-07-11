import React, { useState } from "react";

//Question: Filter a list while typing.

const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Grapes",
  "Orange",
  "Pineapple",
  "Strawberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
  "Cherry",
  "Peach",
  "Lemon",
  "Coconut",
  "Guava",
  "Pomegranate",
  "Blueberry",
  "Raspberry",
  "Blackberry",
];
const F_Search_Filter = () => {
  const [searchText, setsearchText] = useState("");
  const itemsFound = fruits.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase()),
  );
  return (
    <div>
      <h2>Search Filter</h2>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <h3>Search:</h3>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
      </div>
      <h3>Fruits found:</h3>
      {itemsFound.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default F_Search_Filter;
