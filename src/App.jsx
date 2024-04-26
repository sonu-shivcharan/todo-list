import { useState } from "react";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";
import "./index.css";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodo] = useState([]);
  function handleInput(e) {
    setInputVal(e.target.value);
  }
  function addNewTodo() {
    if (inputVal != "") {
      setTodo([...todos, inputVal]);
      setInputVal("");
    }
  }
  function deleteTodo(currTodo){
    let updated = todos.filter((todo)=>todo!=currTodo)
    setTodo(updated)

  }
  return (
    <>
      <h1>Todo List</h1>
      <InputContainer
        inputVal={inputVal}
        handleInput={handleInput}
        addNewTodo={addNewTodo}
      />
      <TodoContainer todos={todos} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
