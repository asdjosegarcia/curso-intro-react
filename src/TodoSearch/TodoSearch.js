/* import { render } from '@testing-library/react'; */
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';


function TodoSearch() {//las funciones tambien entran por aqui

  const { searchValue, setSearchValue } =React.useContext(TodoContext) //todoContext trae las variables que necesitamos
  

  const onSearchValueChange = (event) => {//funcion ejecutada al escribir en el input
    setSearchValue(event.target.value)//esta funcion que trajimos desde app.js, cambia el valor del estado,
    /* onchange nos entrega un evento con muuuucha informacion, event.target.value es el valor de lo que se esctibe en el input */
    
  }

  return (
    <input
      className="todo-search-input"
      placeholder="Buscar TODO"
    /*   value={searchValue}// comentado por que no se lo hace  */
      onChange={onSearchValueChange}/* si el valor cambia ejecuta la funcion */
    />
  );
}

export { TodoSearch };