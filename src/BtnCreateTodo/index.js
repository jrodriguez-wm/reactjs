import './BtnCreateTodo.css'

function BtnCreateTodo({setOpenModal}){
    return(
      <button className="btnCreateTodo" onClick={
        ()=>{
          setOpenModal(state => !state);
        }
    }>+</button>
    );
  }
  

  export{BtnCreateTodo}