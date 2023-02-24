import React from "react"; //para poder usar los metodos de react
import  ReactDOM  from "react-dom"; //para poder renderizar el proyecto
//se cambio "react" por "react-dom", por que "react-dom" contiene los paquetes de renderizado desde el lado del servidor
import './Modal.css'

function Modal({children}){ //lo que pongamos dentro de modal queda en el children
    return ReactDOM.createPortal(
        <div className="ModalBackground">{/* div para hacer el fondo darks */}
            {children}  {/* aqui queda lo que entra a modal */}
        </div>,
        document.getElementById('modal')//llamamos a el div con id='modal' que creamos en html
    )
}

export{Modal}
