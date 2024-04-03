import { useState } from "react";
import propTypes from "prop-types";
import "./style.css";

TodoInput.propTypes = {
  createNewTodo: propTypes.func.isRequired,
};

function TodoInput({ createNewTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleClick = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    } else if (event.key === "Escape") {
      resetInput();
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim().length > 0) {
      if (createNewTodo) {
        createNewTodo(inputValue);
        resetInput();
      }
    } else {
      alert("Por favor, digite uma tarefa válida!");
    }
  };

  const resetInput = () => {
    setInputValue("");
  };

  return (
    <>
      <input
        type="text"
        className="newTodo"
        placeholder="Digite uma nova tarefa!"
        value={inputValue}
        onChange={(ev) => setInputValue(ev.target.value)}
        onKeyDown={handleClick}
      />
    </>
  );
}

export default TodoInput;
