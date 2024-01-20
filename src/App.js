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
];

function App() {
  return (
    <>
      <TodoCount completed={8} total={10} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map( todo=>{
          return <TodoItem  key={todo.text} text={todo.text} completed={todo.completed}/>
        } )}        
      </TodoList>  

      <BtnCreateTodo/>    
    </>
  );
}

export default App;
