import React from 'react';
import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch.js";
import { TodoList } from "../TodoList/TodoList.js";
import { TodoItem } from "../TodoItem/TodoItem.js";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton.js";
function AppUI({
    totalTodos,
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