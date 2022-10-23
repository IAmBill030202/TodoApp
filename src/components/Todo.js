import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  /*Delete Todo:
    Click vào button delete của 1 todo, filter và set todo list lại bằng cách chọn các todo có key khác với todo vừa được click
    */
  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  /*Completed Todo:
    Click vào button complete của 1 todo, lấy id của todo đấy kiểm tra với id của state hiện tại, nếu giống nhau => trả về list todo và 
    completed todo tương ứng, hoặc ngược lại uncompleted todo tương ứng
    */
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
