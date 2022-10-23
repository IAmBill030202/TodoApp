//Làm theo Function components
import React from "react";
import { useState, useEffect } from "react";

/*import components as JSX  
  JSX: JavaScript XML, extended syntax of Javascript which help Devs write HTML in React
*/
/* Hiểu đơn giản khi m code với React là như này: cả trang web của m là 1 bức tranh lớn, mỗi components là 1 mảnh ghép trong bức tranh đấy,
nhiệm vụ của m là tạo components, ghép lại với nhau 1 cách hợp lí => Frontend hoàn chỉnh của web
*/
/* root mặc định khi import components là src, nếu để components ngoài folder src thì mặc định không nhận, phải config lại modules*/

/* Các ví dụ khác:
  const [count, setCount] = useState(0) 
  const [waifu, setWaifu] = useState("Rias Gremory")
  const [harem, setHarem] = useState({Rias Gremory, Akeno,...})
  */
/*useState hook:
  inputText: biến, có thể là bất cứ loại dữ liệu nào (int, string, obj, arr,..)
  setInputText: hàm để update giá trị inputText
  useState(""): "" là giá trị ban đầu, ví dụ useState("a") => giá trị mặc định ban đầu là a, giá trị này thay đổi sau mỗi lần update bằng setInputText
  => useState trả về 1 cặp giá trị dưới 1 mảng [inputText, setInputText]
  */
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
function Main() {
  /*mục đích useEffect để quản lý vòng đời của của một component và nó phục vụ chúng ta sử dụng 
  trong function component thay vì các lifecycle như trước đây trong class component.*/

  //useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect
  /*mỗi khi cập nhật lại status của todo list => chạy function filterHandler */
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  /*mỗi khi reload lại trang => chạy function getLocalTodos*/
  useEffect(() => {
    getLocalTodos();
  }, []);
  //Function filter
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  /*save todolist vào localstorage mỗi khi cập nhật status của todo list  */
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  /*get todolist từ localstorage mỗi khi reload lại page */
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="todo-app">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default Main;
