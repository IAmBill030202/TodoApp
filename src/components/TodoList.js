import React from "react";
//import components
import Todo from "./Todo";
/*Mỗi todo trong todo list có 1 key duy nhất, dùng Map để list ra danh sách todo */
const TodoList = ({ setTodos, todos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
