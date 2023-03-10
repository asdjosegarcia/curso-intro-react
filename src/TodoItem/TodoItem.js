import React from 'react';
import { CompleteIcon } from '../TodoIcons/CompleteIcon';
import { DeleteIcon } from '../TodoIcons/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="todo-item" >

      {/* TodoItem(aqui)>CompleteIcon>TodoIcon  */}
      <CompleteIcon //llamamos a el componente CompleteIcon
        completed={props.completed} //recive la informacion (completado,no completado) para darle el color correspondiente al icono, desde AppUI.js que a su vez la recive de TodoContext.js
        onComplete={props.onComplete}//llama a la funcion onComplete de AppUI.js para marcar el todo como completado
      />

      <p className={`todo-item__p ${props.completed && 'todo-item__p--complete'}`}  onClick={props.onComplete}> 
        {props.text}{/* llama a el texto del objeto que guarda los TODOS */}
      </p>  

      <DeleteIcon
      onDelete={props.onDelete}
      clases={'icon-hover'}

      />
     {/*  <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        ✖
      </span> */}

      {/* 💯 🚫 ❌ ⛔ ✖  ✓ ✔  🗹 🗆 ⛶*/}

    </li>
  );
}

export { TodoItem };