import React from 'react';
import { TodoIcon } from './TodoIcon';

function DeleteIcon({ onDelete, clases }) {
  return (
    <TodoIcon
      color={'rgb(245, 65, 65)'}
      type="delete"//tipo de icono
      onClick={onDelete}
      clases={clases}
    />
  );
}

export { DeleteIcon };