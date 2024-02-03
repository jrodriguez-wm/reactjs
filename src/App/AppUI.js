import { TodoCount } from '../TodoCount';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { BtnCreateTodo } from '../BtnCreateTodo';

function AppUI({
  completedTodos, totalTodos, searchValue,setSearchValue, searchedTodos,completarTodo,eliminarTodo
}){
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

export{AppUI}