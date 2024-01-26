import React from 'react';
import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { BtnCreateTodo } from './BtnCreateTodo';
// import './App.css';

const defaultTodos=[
  {text:'Cortar cebotlla',completed:true},
  {text:'Tomar el curso',completed:false},
  {text:'Llorar con la Llorona',completed:false},
  {text:'Otro',completed:false},
  {text:'Nuevo',completed:true},
];

function App() {
  const [todos,setTodos]= React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  // console.log("los usuarios buscan todos de "+ searchValue);

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
    setTodos(newTodos);
  }

  const eliminarTodo = (text)=>{
    // console.log("Buscando->",text);    
    const newTodos = [...todos];
    const todoIndex= newTodos.findIndex(
        (todo)=> todo.text===text
      );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoCount completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        
       />

      <TodoList>
        
        {searchedTodos.map( todo=>{
          return <TodoItem  
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed}
                onComplete={ () => completarTodo(todo.text)}
                onDelete={ ()=>{ eliminarTodo(todo.text) }}
                
              />
        } )}        
      </TodoList>  

      <BtnCreateTodo/>    
    </>
  );
}

export default App;
