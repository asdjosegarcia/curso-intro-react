//clase 16:React Context: estado compartido, no useContext
import React from "react";
import { useLocalStorage } from "./useLocalStorage";//importa a localStorage para que esto quede como estaba antes el archivo app

const TodoContext = React.createContext() //ahora TodoContext es un objeto con las propiedades provider y consumer de .createContext

function TodoProvider(props) {//esta funcion hace de puente para el translado e la informacion
    //props recive los valores
    //TodoContext.js>App.js>AppUI.js
    //
    /* App.js */
    const {
        item: todos,//renombre a item como todos, esto es necesario por como llamamos(llamar de nombre) a las funciones en function App
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', [])//'TODOS_V1',[] son los argumentos,todo es item, saveItem es save todos, estamos declarando como constante lo que retorna de la funcion

    const [searchValue, setSearchValue] = React.useState('')//se lo enviamos a serach.js para que le agrege un valor, 
    const [openModal,setOpenModal]=React.useState(false)

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
    /* App.js */


    return (
        <TodoContext.Provider value={{//toma los valores de este componente y del UselocalStorage que importamos aqui
        //TodoContext.provider es el provider de la variable que almmacena el React.createContext    
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {/* value es una propiedad especial, {{}} por que vamos a mandar varos valores como objeto */}
            {props.children}{/*aqui entra lo que encerremos en el componente TodoProvider  */}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider};
//exportamos a el contexto con las variables y a el componente TodoContext



