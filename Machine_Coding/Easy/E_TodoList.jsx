import React, { useState } from "react";

/*
Question:
    User can: Add todo, Delete todo
*/
const E_TodoList = () => {
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);

  const addTodo=()=>{
    //is text is empty after trimming then return means not adding empty todo
    if(!text.trim()) return;
    settodos([...todos,text])
    settext("")
  }

  const deleteTodo=(index)=>{
    settodos(todos.filter((_,i)=>i!==index))
  }
  return (
    <div>
      <h2>Todo List:</h2>

    {todos && todos.length>0 && todos.map((todo,index)=>(
        <div style={{display:"flex", gap:"10px",alignItems:"center"}} key={index}>
            <h3>{todo}</h3>
            <button  onClick={()=>deleteTodo(index)}>Delete</button>
        </div>
    ))}

      <label>
        Todo Name:
        <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
      </label>
      <button onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default E_TodoList;
