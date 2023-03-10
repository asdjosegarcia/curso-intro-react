import React from "react";
import { TodoIcon } from "./TodoIcon";

function CheckListIcon( clases,color){
    return(
        <TodoIcon
        type="checkList"
        color={color}
        clases={clases}
        />
    )
}
export{CheckListIcon}
