import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem("todos"));
    return todosFromStorage ? todosFromStorage : [];
  });

  const createNewTodo = (value) => {
    setTodos((currentValue) => {
      const newTodosArray = [
        ...currentValue,
        {
          id: new Date().getTime(),
          title: value,
          checked: false,
        },
      ];

      localStorage.setItem("todos", JSON.stringify(newTodosArray));
      return newTodosArray;
    });
  };

  const toggleCheck = (todo) => {
    setTodos((currentTodos) => {
      const newTodosArray = currentTodos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !obj.checked } : obj
      );

      localStorage.setItem("todos", JSON.stringify(newTodosArray));
      return newTodosArray;
    });
  };

  const removeTodo = (todo) => {
    setTodos((currentTodos) => {
      const newTodosArray = currentTodos.filter((obj) => obj.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(newTodosArray));
      return newTodosArray;
    });
  };

  return (
    <div className="container">
      <header>
        <h1 className="title">Todo List</h1>
      </header>

      <main className="main">
        <section>
          <TodoInput createNewTodo={createNewTodo} />
        </section>
        <section>
          <TodoList
            todos={todos}
            toggleCheck={toggleCheck}
            removeTodo={removeTodo}
          />
          {/* <ul className="todoList">
            {todos.map((todo) => (
              <li key={todo.id}>
                <span className={`todoTitle ${todo.checked ? "checked" : ""}`}>
                  {todo.title}
                </span>
                <div className="todoButtons">
                  <button className="btn" onClick={() => toggleCheck(todo)}>
                    {todo.checked ? (
                      <i className="bi bi-x-lg"></i>
                    ) : (
                      <i className="bi bi-check2-square"></i>
                    )}
                  </button>
                  <button className="btn" onClick={() => removeTodo(todo)}>
                    <i className="bi bi-trash-fill"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul> */}
        </section>
      </main>
    </div>
  );
}
