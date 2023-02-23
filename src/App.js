import React from "react";
import Header from "./components/header/Header";
import TodoList from "./components/todolist/TodoList";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <p className="head">To Do App</p>
        <Header />
        <hr />
        <TodoList />
      </div> 
    </div>
  );
}

export default App;
