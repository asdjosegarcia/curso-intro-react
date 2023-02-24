import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton=()=>{//si tenemos declarada la funcion como arrowfunction, debemos llamarla {nombreVariable} y no como {()=>nombreVariable}
    props.setOpenModal(!props.openModal) //establece el openModal a el valor contrario con el que vino
  }
  return (
    <button 
    className="CreateTodoButton"
    onClick={onClickButton}
    >+</button>
  );
}

export { CreateTodoButton };