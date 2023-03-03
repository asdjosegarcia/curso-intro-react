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

    const {
        item:newUserStatus,
        saveItem: saveNewUser,
    }=useLocalStorage('userIsNew',true)



    
    /* =(!localStorage.getItem('userIsNew'))? false: true  //pregunta si hay algo en local storage para saber si el usuario es nuevo  */

    
    const [searchValue, setSearchValue] = React.useState('')//se lo enviamos a serach.js para que le agrege un valor, 
    const [openModal, setOpenModal] = React.useState(false)
    
    const completedTodos = todos.filter(todo => !!todo.completed).length;//guarda la cantidad de todos que tengan completed true
    const totalTodos = todos.length;//guarda la cantidad de elemetos que tenga en el array
    
    const searchedTodos = todos.filter(todo => {
        const textoTodoMinuscula = todo.text.toLowerCase()
        const searchValueMinuscula = searchValue.toLocaleLowerCase()
        return textoTodoMinuscula.includes(searchValueMinuscula)
    })
    
    const addTodo = (text) => {// funcion que agrega un todo a el array de todos
        const newTodos = [...todos];//... entrega todos los valores de todos, [] hace que se guarden en un array
        const existIndex=todos.findIndex((todo)=>(todo.text===text))//
        if(existIndex===-1){
            newTodos.push({
                completed: false,
                text,
            });
        } else{
            newTodos[existIndex].completed=false
        }
        orderSaveTodos(newTodos)//carga la nueva lista reemplazando la lista original, como react detecta cambios en el 
        
        
    }
    
    
    const completeTodos = (text) => {// funcion que marca el todo como completado
        const todoIndex = todos.findIndex(todo => todo.text === text)//entrega la posicion del primer elemento del array que coincida con el texto
        const newTodos = [...todos];//... entrega todos los valores de todos, [] hace que se guarden en un array
        /* let falseTodo=[]; */
        /* let trueTodos=[]; */
        if (newTodos[todoIndex].completed === true) {
            newTodos[todoIndex].completed = false;//marca false a el elemnto del array que corresponda con el texto
            /* falseTodo.push(newTodos[todoIndex]) */
        } else {
            newTodos[todoIndex].completed = true
            /* trueTodos.push(newTodos[todoIndex]) */
        }
        /* newTodos=[...falseTodo,...trueTodos] */
        orderSaveTodos(newTodos)//carga la nueva lista reemplazando la lista original, como react detecta cambios en el 
        /* console.log('newTetc',newTodos); */
        
    }
    
    
    function deleteTodo(text) {
        const newTodos = todos.filter(todo => todo.text !== text)//filtra/guarda los todo que no cincidan, !== devuelve true si no coinciden y false si si coinciden
        orderSaveTodos(newTodos)//carga el array de todos nuevos sin el todo borrado
    }
    /* App.js */
    
    function orderSaveTodos(newTodos) { //ordena los todo completados y sin completar
        
        let trueTodos = [] //almacena los todo con complete=true
        let falseTodos = []//almacena los todo con complete=false
        newTodos = newTodos.map((todo) => { //recorre el arreglo de todos
            (todo.completed) ? trueTodos.push(todo) : falseTodos.push(todo) //separa los todo con true o false  en cada variable segun corresponda
        })
        newTodos=[...falseTodos,...trueTodos] //junta los todos, los false van primero por que son los que le interesa a el usuario, los true luego
        return(
            saveTodos(newTodos)//guarda el nuevo arreglo ordenado en el almacenamiento local
            )
        }
        
       
        
/*        const userIsNew=()=>{
           
           if( newUserStatus){
                
               saveNewUser(false)
           }else{

           }
       } */


        
        return (
            <TodoContext.Provider value={{//toma los valores de este componente y del UselocalStorage que importamos aqui
                //TodoContext.provider es el provider de la variable que almmacena el React.createContext    
                loading,
                error,
                totalTodos,
                addTodo,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodos,
                deleteTodo,
                openModal,
                setOpenModal,
                newUserStatus,
                saveNewUser

            }}>
            {/* value es una propiedad especial, {{}} por que vamos a mandar varos valores como objeto */}
            {props.children}{/*aqui entra lo que encerremos en el componente TodoProvider  */}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };
//exportamos a el contexto con las variables y a el componente TodoContext



