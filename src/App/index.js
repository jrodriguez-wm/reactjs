import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';
// import './App.css';

// localStorage.removeItem("todos_v1");

const defaultTodos=[
  {text:'Cortar cebotlla',completed:true},
  {text:'Tomar el curso',completed:false},
  {text:'Llorar con la Llorona',completed:false},
  {text:'Otro',completed:false},
  {text:'Nuevo',completed:true},
];

localStorage.setItem("todos_v1",JSON.stringify(defaultTodos))

function App() {
  // console.log(useLocalStorage.loading);

  const {
    item : todos,
    saveItem:saveTodos,
    loading,
    error,
    
  }= useLocalStorage("todos_v1",[]);
  const [searchValue, setSearchValue] = React.useState("");
  // console.log("los usuarios buscan todos de "+ searchValue);
  // console.log(test,loading,error);  

  const completedTodos = todos.filter(todo=> todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo)=>{
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  )

  const completarTodo = (text)=>{
    // console.log("Buscando->",text);    
    const newTodos = [...todos];
    const todoIndex= newTodos.findIndex(
        (todo)=> todo.text===text
      );
    newTodos[todoIndex].completed=true;
    // setTodos(newTodos);
    saveTodos(newTodos);
  }

  const eliminarTodo = (text)=>{
    // console.log("Buscando->",text);    
    const newTodos = [...todos];
    const todoIndex= newTodos.findIndex(
        (todo)=> todo.text===text
      );
    newTodos.splice(todoIndex,1);
    // setTodos(newTodos);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos ={completedTodos} 
      totalTodos ={totalTodos}
      searchValue ={searchValue}
      setSearchValue ={setSearchValue} 
      searchedTodos ={searchedTodos}
      completarTodo ={completarTodo}
      eliminarTodo ={eliminarTodo}
    />
  )
}

export default App;
