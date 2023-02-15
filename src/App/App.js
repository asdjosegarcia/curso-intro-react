import React from 'react';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tormar el curso de intro a react', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'algo no se que ', completed: true }
]; */

function useLocalStorage(itemName, initialValue) {//esta funcion nos permite cargar objetos a local storage
  const [error, setError] = React.useState(false);//sumular estado de error, estado inicial false para decir no hay error
  const [loading, setLoading] = React.useState(true);//simular estado de carga, true para simular que ya termino de cargar
  const [item, setItem] = React.useState(initialValue)//estado con el valor de la variable defaultTodo por defecto

  React.useEffect(() => { //useEffect va a recargar todo cuando detecte un cambio, asi vemos los cambios en loading, error, etc
    try {
      setTimeout(() => {//usaremos setTimeout para simular el funcionamiento de una api, (reciviendo la informacion con restraso)
        const localStorageItem = localStorage.getItem(itemName);//se extraen los valores del localStorage>TODOS_v1 del navegador y se guardan en la variable LocalStorageTodoss
        let parsedItem;//aqui se van a guardar los objetos en formato JS

        if (!localStorageItem) {//si localStorageItem NO tiene algun valor
          localStorage.setItem(itemName, JSON.stringify(initialValue));//creamos el objeto itemName con un array vacio en formato JSON en el localStorage
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem)//transforma los objetos de localStorage tipo JSON a JS y los guarda en parsedItem
        }

        setItem(parsedItem)//establecemos el item como parsedItem (lo que tenia adentro localStorage)
        setLoading(false)//establecemos loading como false(la app ya termino de cargar)
      }, 1000)
      } catch (error) {//si hay un error entra como parametro
        setError(error)
    }
  });


  const saveItem = (newItem) => {
    try{
      const stringifiedItem = JSON.stringify(newItem);//netItem transforma a JSON y almacena en strinfigiedItem
    localStorage.setItem(itemName, stringifiedItem);//se carga stringifiedItem en localStorage
    setItem(newItem);// se cargan los nuevos todos en todos
    }catch(error){
      setError(error)
    }
  }


  return {//si tenemos mas de 2 estados en el custom react hook es recomendable mandarlo como objeto y no como array
    item,
    saveItem,
    loading,
    error,
  }
}


function App() {
  const {
    item: todos,//renombre a item como todos, esto es necesario por como llamamos(llamar de nombre) a las funciones en function App
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])//'TODOS_V1',[] son los argumentos,todo es item, saveItem es save todos, estamos declarando como constante lo que retorna de la funcion

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
      loading={loading}//mandamos a appUI la variable loading con el estado de carga
      error={error}
      totalTodos={totalTodos}/* todas estas variables van a AppUI.js */
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
