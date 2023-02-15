import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";/* importamos los moddulos para extrar esus variables */
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
function AppUI({
    loading,/* llamamos a loading y error a pesar d eque no existen para que el programa tome como que si las declaramos en algun mmomento */
    error,
    totalTodos,/* variables que nos envia App.js */
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodo,
}) {
    return (
        <React.Fragment >
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}//le enviamos el valor de search value a el componente TodoSearch
                setSearchValue={setSearchValue}//envamos la funcion para que pueda cambiar el valor de el estado
            />
            <TodoList>
                {error && <p>Desesperate hubo un error</p> }{/* imaginamos que tenemos una variable loading con un error */}
                {loading && <p>Estamos cargando, no desesperes...</p> }{/* imaginamos que tenemos una variable loading */}
                {(!loading && !searchedTodos.length)&& <p>Crea tu primer todo!</p>}{/* imaginamos qie todo cargo, loading no tiene nada y searchedTodos tampoco */}
                {searchedTodos.map(
                    todo => (<TodoItem
                        key={todo.text} /* key agrega un identificador unico que sirve para listas, evita que se re-renderize toda la lista,  solo renderiza los elementos que necesite, */
                        text={todo.text}//propiedad
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}//enviamos la funcion completeTodos con el parametro todo.text
                        onDelete={() => deleteTodo(todo.text)}
                    //react sabe cual es el todo al que le mandamos todo.etc gracias a map
                    />))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}
export { AppUI }