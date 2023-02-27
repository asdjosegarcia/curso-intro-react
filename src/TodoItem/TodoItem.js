import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  return (
    <li className="todo-item" >
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >{/* si props.completed tiene algo agrega la clase "icon-check-active" */}
        { props.completed&& "🗹" }{!props.completed&& "⛶"}
      </span>

      <p className={`todo-item__p ${props.completed && 'todo-item__p--complete'}`}  onClick={props.onComplete}>
        {props.text}{/* llama a el texto del objeto que guarda los TODOS */}
      </p>

      <span className="Icon Icon-delete"
      onClick={props.onDelete}
      >
        ✖
      </span>

      {/* 💯 🚫 ❌ ⛔ ✖  ✓ ✔  🗹 🗆 ⛶*/}

    </li>
  );
}

export { TodoItem };