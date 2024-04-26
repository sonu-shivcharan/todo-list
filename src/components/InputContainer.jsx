import React from "react";

function InputContainer({ inputVal, handleInput, addNewTodo }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputVal}
        onChange={handleInput}
        placeholder="Enter a task..."
      />
      <button onClick={addNewTodo}>+</button>
    </div>
  );
}

export default InputContainer;
