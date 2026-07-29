import React, { useState } from "react";

/*
->Question: Create a Todo App where users can:
                Add Todo
                Edit Todo
                Save Todo
                Delete Todo
*/
const M_Editable_Todo_List = () => {
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);
//   console.log(todos);

  //function to add todo
  const addTodo = () => {
    if (!text.trim()) return;
    settodos([
      ...todos,
      {
        id: Date.now(),
        text,
        isEditing: false,
      },
    ]);
    settext("");
  };

  //making an particular todo editable:
  const toggleEdit = (id) => {
    settodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  //updating value of the todo
  const updateTodo = (id, newText) => {
    if (!newText.trim()) return;
    settodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  //deleting todo:
  const deleteTodo = (id) => {
    //   settodos(todos.filter(t=>t.id!==todo.id))
    //or
    settodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h2>Editable Todo List</h2>
      <label>
        Todo Name:
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
      </label>
      <button onClick={addTodo}>Add</button>

      <h3>Todos List:</h3>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo.id} style={{display:"flex",alignItems:"center",gap:10}}>
            {todo.isEditing ? (
              <input
                value={todo.text}
                onChange={(e) => updateTodo(todo.id, e.target.value)}
              />
            ) : (
              <span style={{fontSize:"1.5rem"}}>{todo.text}</span>
            )}

            <button onClick={() => toggleEdit(todo.id)}>
              {todo.isEditing ? "Save" : "Edit"}
            </button>
            {!todo.isEditing && <button onClick={() => deleteTodo(todo.id)}>Delete</button>}
          </div>
        ))
      ) : (
        <p>No Todos Available</p>
      )}
    </div>
  );
};

export default M_Editable_Todo_List;
