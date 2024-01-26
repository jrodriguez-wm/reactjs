import './TodoCount.css';

function TodoCount({total,completed}){
    return(
      <h1 className="TodoCount">
        Haz completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
  }
  
  export{TodoCount}