import React from 'react';
import { TodoCount } from '../TodoCount';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { BtnCreateTodo } from '../BtnCreateTodo';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {TodosEmpty} from '../TodosEmpty';
import {TodoForm} from '../TodoForm' 
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completarTodo,
    eliminarTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
    return (
    <>
      <TodoCount />
      <TodoSearch/>
        <TodoList>
        {loading && <> <TodosLoading/> <TodosLoading/> <TodosLoading/> </> }
        {error &&  <TodosError/>}
        { (!loading && searchedTodos.length===0) &&  <TodosEmpty/>}
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

      <BtnCreateTodo
        setOpenModal={setOpenModal}/>    

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </>
  );
}

export{AppUI}