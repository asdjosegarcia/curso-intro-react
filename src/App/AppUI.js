import React from 'react';
import { TodoContext, TodoCountext } from "../TodoContext/TodoContext.js";
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";/* importamos los moddulos para extrar esus variables */
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
function AppUI() {
    const { error, loading, searchedTodos, completeTodos, deleteTodo } = React.useContext(TodoContext)//este value es el mismo que el de React context de la case 16

    return (
        <React.Fragment >
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {error && <p>Desesperate hubo un error</p>}{/* imaginamos que tenemos una variable loading con un error */}
                {loading && <p>Estamos cargando, no desesperes...</p>}{/* imaginamos que tenemos una variable loading */}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer todo!</p>}{/* imaginamos qie todo cargo, loading no tiene nada y searchedTodos tampoco */}
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











