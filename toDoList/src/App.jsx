import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchInput, setSearchInput] = useState("")


  function searchInputChange(v){
    setSearchInput(v);
  }

  function addTodo(task) {
    setTodos([...todos, { task, highlighted: false }]);
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, todoIndex) => todoIndex !== index));
  }

  function highlightTodo(task) {

    setTodos(
      todos.map((todo) =>
        todo.task === task ? { ...todo, highlighted: !todo.highlighted } : todo
      )
    );

    
  }

  

  return (
    <>
      <Header addTodo={addTodo} searchInput={searchInput} setSearchInput={searchInputChange}/>
      <List
        todos={todos}
        deleteTodo={deleteTodo}
        highlightTodo={highlightTodo}
        searchInput={searchInput}
      />
    </>
  );
}

export default App;
