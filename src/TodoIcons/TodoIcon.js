import React from 'react';
import { ReactComponent as CheckSVG } from './icons/task_alt_FILL0_wght700_GRAD0_opsz48.svg';
import { ReactComponent as DeleteSVG } from './icons/delete_forever_FILL0_wght700_GRAD0_opsz48.svg'; //llamamos a las imagenes que vamos a usar de iconos
import { ReactComponent as NewTodoSVG} from './icons/add_task_FILL0_wght700_GRAD0_opsz48.svg' ;
import { ReactComponent as SmileSVG} from './icons/sentiment_very_satisfied_FILL0_wght400_GRAD0_opsz48.svg'//paso 1
import {ReactComponent as CheckListSVG} from './icons/checklist_FILL0_wght400_GRAD0_opsz48.svg'
import './TodoIcon.css'; //estilos css, donde guardamos todos los estilos de los iconos

const iconTypes = {//objeto que almacena las funciones que vamos a llmar
  "check": color => ( //arrow function
  <CheckSVG className="Icon-svg  Icon-svg--check" fill={color} />//clases que se le asignan a checkSVG, 
  ),
  "delete": (color,clases) => ( //color y clases se ordenan en el orden que llegan 
    <DeleteSVG className={`Icon-svg  Icon-svg--delete ${clases}`} fill={color} />//.Icon.svg{ fill:red},fill es el color que va a tomar el icono
  ),
  "newTodo":color=>(
    <NewTodoSVG className={`Icon-svg Icon-svg--NewTodo `} fill={color}/>//NewTodoSvg es el llamado a la imagen
  ),
  "smile":(color,clases)=>( //paso 2
    <SmileSVG className={`Icon-svg Icon-svg--smile ${clases}`} fill={color}/>
  ),
  "checkList":(color,clases)=>(
    <CheckListSVG className={`Icon-svg Icon-svg--check-list ${clases}`} fill={color}/>
  )
  
};


function TodoIcon({ type, color, onClick,clases }) { //informacion que recivimos desde ComponenteIcon
  return (
    <span//crea una estiqueta span con el icono dentro
      className={`Icon-container Icon-container--${type} ${clases}`}//clases genericas que se asignan dependiendo el icono ej: ${type}=${"check"}
      onClick={onClick} //le asigna el parametro onClick que recivira una funcion dependiendo de el icono 
    >
      {iconTypes[type](color)} {/* nos trae el objeto iconTypes.check(gray) */}
      
    </span>
  );
}

export { TodoIcon };
