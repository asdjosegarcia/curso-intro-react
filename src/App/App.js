import React from 'react';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'algo no se que ', completed: true }
]; */

function App() {
  const localStorageTodos=localStorage.getItem('TODOS_V1');//se extraen los valores del localStorage>TODOS_v1 del navegador y se guardan en la variable LocalStorageTodoss
  let parsedTodos;

  if(!localStorageTodos){//si localStorageTodos NO tiene algun valor
    localStorage.setItem('TODOS_V1',JSON.stringify([]));//creamos el objeto TODOS_V1 con un array vacio en formato JSON en el localStorage
    parsedTodos=[];
  }else{
    parsedTodos=JSON.parse(localStorageTodos)//transforma los objetos de JSON a JS y los guarda en parsedTodos
  }

  const saveTodos=(newTodos)=>{
    const stringifiedTodos=JSON.stringify(newTodos);//netTodos transforma a JSON y almacena en strinfigiedTodos
    localStorage.setItem('TODOS_V1',stringifiedTodos);//se carga stringifiedTodos en localStorage
    setTodos(newTodos);

  }



  const [todos, setTodos] = React.useState(parsedTodos)//estado con el valor de la variable defaultTodo por defecto
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

    saveTodos(newTodos)//carga la nueva lista reemplazando la lista original, como react detecta cambios en el 
  }

  function deleteTodo(text) {
    const newTodos = todos.filter(todo => todo.text !== text)//filtra/guarda los todo que no cincidan, !== devuelve true si no coinciden y false si si coinciden
    saveTodos(newTodos)//carga el array de todos nuevos sin el todo borrado
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
