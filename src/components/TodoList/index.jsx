import propTypes from "prop-types";
import "./style.css";

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      checked: propTypes.bool.isRequired,
    })
  ).isRequired,
  toggleCheck: propTypes.func.isRequired,
  removeTodo: propTypes.func.isRequired,
};

function TodoList({ todos, toggleCheck, removeTodo }) {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id}>
          <span className={`todoTitle ${todo.checked ? "checked" : ""}`}>
            {todo.title}
          </span>
          <div className="todoButtons">
            <button
              className="btn"
              onClick={() => toggleCheck && toggleCheck(todo)}
            >
              {todo.checked ? (
                <i className="bi bi-x-lg"></i>
              ) : (
                <i className="bi bi-check2-square"></i>
              )}
            </button>
            <button
              className="btn"
              onClick={() => removeTodo && removeTodo(todo)}
            >
              <i className="bi bi-trash-fill"></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
