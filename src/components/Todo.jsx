import React from "react";

function Todo({ todo,deleteTodo}) {
  return (
    <div className="todo" key={todo}>
      <p>{todo}</p>
      <div className="actions">
        <input type="checkbox" />
        <button onClick={()=>deleteTodo(todo)}>Delete</button>
      </div>
    </div>
  );
}

export default Todo;
