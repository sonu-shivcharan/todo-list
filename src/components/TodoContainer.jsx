import React from "react";
import Todo from "./Todo";
function TodoContainer({ todos, deleteTodo}) {
  return (
    <div className="todo-container">
      {todos.map((todo, idx) => (<Todo todo={todo} key={todo} deleteTodo={deleteTodo} />))}
    </div>
  );
}

export default TodoContainer;
