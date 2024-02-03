import './BtnCreateTodo.css'

function BtnCreateTodo(){
    return(
      <button className="btnCreateTodo" onClick={(event)=>{
        console.log("le diste click");
        console.log(event.target);
      }}>+</button>
    );
  }
  

  export{BtnCreateTodo}