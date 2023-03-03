import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoForm.css"


function TodoForm() {
    const[newTodoValue,setNewTodoValue]=React.useState('')
    const {
        addTodo,setOpenModal
    }=React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)//event.target.value extrae el valor del textarea
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault()//evita que la pagina se recarge
        addTodo(newTodoValue)//addTodo es la funcion de TodoContext que agrega un todo a el el array de todos
        setOpenModal(false);    
    }
    return (
        <form onSubmit={onSubmit} className='new-todo-form'>
            {/* {<label></label>} */}
            <textarea className="new-todo-textarea"
                value={newTodoValue}//el valor de newTodoValue pasa a value?
                onChange={onChange}//cuando detecta un cambio en el text area ejecuta la funcion onChange
                placeholder="Escribe tu nuevo Todo!"
            />
            <div className="button-container">
                <button className="new-todo-buttons new-todo-button__cancel" type="button" onClick={onCancel} >
                    Cancelar
                </button>
                <button className="new-todo-buttons new-todo-button__accept" type="submit" >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }