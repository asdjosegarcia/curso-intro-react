import React from 'react';    
import { TodoIcon } from './TodoIcon';//llamamos a el TodoIcon?

function CompleteIcon({ completed, onComplete }) { //recive las porpiedades complete y onComplete
  return (
    <TodoIcon //enviamos informacion a TodoIcon
      type="check" //nombre con el que se llama a los objetos dentro de TodoIcon.js
      color={completed ? '#38d43d' : 'gray'}//si completed es true=verde, false=gris
      onClick={onComplete} //cuando haga click ejecuta la funcion onComplete de App.js
    />
  );
}

export { CompleteIcon };