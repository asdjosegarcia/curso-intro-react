import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext/TodoContext';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'algo no se que ', completed: true }
]; */



function App() {
  

  return (
    <TodoProvider>{/* componente que contiene a TodoContext */}
      <AppUI/>
    </TodoProvider>
  );
}


export default App;
