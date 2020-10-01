import React, { useState, useEffect } from 'react';
import './App.css';
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  //use effect
  useEffect(() => {getLocalTodos()}, []);
  useEffect(() => {filterHandler(); saveLocalTodos()},[todos, status]);


  //function 
  const filterHandler = () => {
    switch(status) {
      case 'completed' : 
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted' :
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default : 
        setFilterTodos(todos);
        break;
    }
  }

  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      console.log(localTodo);
      setTodos(localTodo);  
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Anshul's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filterTodos={filterTodos}
      />
    </div>
  );
}

export default App;
