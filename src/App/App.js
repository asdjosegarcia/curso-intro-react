import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: true }
];
function App() {
  const [todos, setTodos] = React.useState(defaultTodos)//estado con el valor de la variable defaultTodo por defecto
  const [searchValue, setSearchValue] = React.useState('')//se lo enviamos a serach.js para que le agrege un valor, 

  const completedTodos = todos.filter(todo => !!todo.completed).length;//guarda la cantidad de todos que tengan completed true
  const totalTodos = todos.length;//guarda la cantidad de elemetos que tenga en el array

  const searchedTodos = todos.filter(todo => {
    const textoTodoMinuscula = todo.text.toLowerCase()
    const searchValueMinuscula = searchValue.toLocaleLowerCase()
    return textoTodoMinuscula.includes(searchValueMinuscula)
  })

  const completeTodos = (text) => {// funcion que marca el todo como completado
    const todoIndex = todos.findIndex(todo => todo.text === text)//entrega la posicion del primer elemento del array que coincida con el texto
    const newTodos = [...todos];//... entrega todos los valores de todos, [] hace que se guarden en un array
    if (newTodos[todoIndex].completed === true) {
      newTodos[todoIndex].completed = false;//marca false a el elemnto dela array que corresponda con el texto
    } else {
      newTodos[todoIndex].completed = true
    }
    console.log(newTodos[todoIndex].completed);

    setTodos(newTodos)//carga la nueva lista reemplazando la lista original, como react detecta cambios en el 
  }

  function deleteTodo(text) {
    const newTodos = todos.filter(todo => todo.text !== text)//filtra/guarda los todo que no cincidan, !== devuelve true si no coinciden y false si si coinciden
    setTodos(newTodos)//carga el array de todos nuevos sin el todo borrado
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
