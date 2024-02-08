import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForms.css'

function TodoForm(){
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodo,setNewTodo]= React.useState("");

    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);
    };

    const onCancel =()=>{
        setOpenModal(false);
    }
    const onChange = (event)=>{
        setNewTodo(event.target.value);
    }


    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo todo</label>
            <textarea
             placeholder="Cortar cebolla"
             value={newTodo}
             onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    onClick={onCancel}
                    className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button 
                    type="submit"

                    className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
    );
}

export {TodoForm}