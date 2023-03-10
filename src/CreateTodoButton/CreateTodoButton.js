import React from 'react';
import { NewTodoIcon } from '../TodoIcons/NewTodoIcon';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {//si tenemos declarada la funcion como arrowfunction, debemos llamarla {nombreVariable} y no como {()=>nombreVariable}
    props.setOpenModal(!props.openModal) //establece el openModal a el valor contrario con el que vino
    /* console.log(props.userIsNew); */
    if(props.newUserStatus){
      props.saveNewUser(false)
    }
    console.log(props.newUserStatus);

    
  }

  return (
    <button
      className={`create-todo-button ${props.newUserStatus && 'new-user-button'} `}
      onClick={onClickButton}
      
      >
      {/* <p className='create-todo-button__p'>+</p> */}
      <NewTodoIcon/>
    </button>
  );
}

export { CreateTodoButton };

/*  */