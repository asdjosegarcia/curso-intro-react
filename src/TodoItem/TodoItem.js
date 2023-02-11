import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >{/* si props.completed tiene algo agrega la clase "icon-check-active" */}
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >
        {props.text}{/* llama a el texto del objeto que guarda los TODOS */}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };