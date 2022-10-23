import React from "react";

const TodoForm = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  /* Handle input, mỗi khi element bị thay đổi (onChange) => lưu giá trị Input bằng setInputText của useState gọi ở components Main */
  const submitHandler = (e) => {
    e.preventDefault(); /*Mỗi khi click button sẽ không refresh lại page */
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
      /* set Todos list
      ...todos: Tất cả todo đã được submit ở lần trước,
       { text: inputText, completed: false, id: Math.random() * 1000 }: todos vừa được submit
      */
    ]);
    setInputText(""); /*Set input thành null sau mỗi lần submit*/
  };
  /*Mỗi khi select filter, nhận value của filter tương ứng */
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default TodoForm;
