import React from "react";
import { TodoIcon } from "./TodoIcon";

function NewTodoIcon({ color, clases }) {
    return (
        <TodoIcon
            type="newTodo"
            color={'white'}
            clases={clases}
        />
    )
}
export { NewTodoIcon }
