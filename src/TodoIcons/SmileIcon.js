import React from "react";
import { TodoIcon } from "./TodoIcon";//paso 2 importamos a TodoIcon

function SmileIcon({ clases,color }) {
    return (
        <TodoIcon /* paso 3: llamamos a todo icon */
            type="smile" /* paso 4: enviamos los parametros  a todoIcon*/ 
            clases={clases}
            color={color}
        />
    )
}
export { SmileIcon }