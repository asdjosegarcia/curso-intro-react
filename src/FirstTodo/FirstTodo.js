import React from "react";
import { SmileIcon } from "../TodoIcons/SmileIcon.js";
import "./FirstTodo.css"

function FirstTodo(){
    return(
        <div className="first-todo-background">
            <h2 className="first-todo-message">Crea tu primer Todo!  <SmileIcon color={'white'}/></h2>
           
        </div>

    )
}

export{FirstTodo}
