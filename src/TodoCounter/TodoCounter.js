import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {totalTodos,completedTodos} =React.useContext(TodoContext)//llamamos a las 2 variables que necesitamos desde el useContext(TodoContext)
  return (
    <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };