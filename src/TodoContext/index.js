import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext =React.createContext();

function TodoProvider({children}){

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
        <TodoContext.Provider value={{
            loading,error,
            completedTodos, totalTodos, searchValue,setSearchValue, searchedTodos,completarTodo,eliminarTodo
        }}>
            {children}
        </TodoContext.Provider>
    );
}


{/* <TodoContext.Consumer></TodoContext.Consumer> */}

export {TodoContext,TodoProvider};