import React, { useState } from "react";

//Question: Reorder a list using drag-and-drop.
const I_Drag_Drop_List = () => {
  const [items, setItems] = useState(["React", "Vue", "Angular"]);

  const [dragIndex, setdragIndex] = useState(null);

  const handleDrop = (dropIndex) => {
    const updated = [...items];
    const [dragged] = updated.splice(dragIndex, 1);
    updated.splice(dropIndex, 0, dragged);
    setItems(updated);
  };
  return (
    <div>
      <h2>Drag & Drop List (HTML5)</h2>
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={() => setdragIndex(index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={()=>handleDrop(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default I_Drag_Drop_List;
