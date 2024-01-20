import './TodoCount.css';

function TodoCount({total,completed}){
    return(
      <h1>
        Haz completado {completed} de {total} TODOS
      </h1>
    );
  }
  
  export{TodoCount}