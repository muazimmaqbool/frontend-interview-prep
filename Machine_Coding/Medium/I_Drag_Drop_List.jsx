import React, { useState } from "react";

//Question: Reorder a list using drag-and-drop.
const I_Drag_Drop_List = () => {
  const [items, setItems] = useState([
    "React",
    "Vue",
    "Angular",
    "Svelte",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
  ]);

  // Stores the index of the item currently being dragged.
  // Example: Dragging "Angular" => dragIndex = 2
  const [dragIndex, setdragIndex] = useState(null);

  // Runs when an item is dropped.
  const handleDrop = (dropIndex) => {
    //Create a copy of the items array. Never mutate React state directly.
    const updated = [...items];

    // Remove the dragged item from its original position.
    // Example:["React","Vue","Angular","Svelte"]
    // dragIndex = 2
    // updated.splice(2,1) => removed item = ["Angular"]
    // updated becomes: ["React","Vue","Svelte"]
    const [dragged] = updated.splice(dragIndex, 1); // Array destructuring extracts the removed item inside dragged

    // Insert the dragged item at the dropped position.
    // Example: dropIndex = 0
    // Result: ["Angular","React","Vue","Svelte"]
    updated.splice(dropIndex, 0, dragged);

    // Update state so React re-renders.
    setItems(updated);
  };
  return (
    <div>
      <h2>Drag & Drop List (HTML5)</h2>
      {items.map((item, index) => (
        <div
          key={index}
          // Makes this element draggable.
          draggable
          // Fires when dragging starts. Store which item's index is being dragged.
          onDragStart={() => setdragIndex(index)}
          // Prevent default to allow dropping. Without this, onDrop won't work.
          onDragOver={(e) => e.preventDefault()}
          // Fires when dragged item is dropped. Pass the target index.
          onDrop={() => handleDrop(index)}
          style={{
            padding: "14px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#f8f9fa",
            cursor: "grab",
            fontSize: "18px",
            fontWeight: "500",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            transition: "0.2s",
            userSelect: "none",
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default I_Drag_Drop_List;
