import React from "react"
import "./TodoLoading.css"

function TodoLoading() {
    return (
        
        <ul className="ul-list">
            <li className="skeleton-background-animation first-item"></li>,
            <li className="skeleton-background-animation"></li>,
            <li className="skeleton-background-animation"></li>,
            <li className="skeleton-background-animation"></li>,
            <li className="skeleton-background-animation"></li>,
            <li className="skeleton-background-animation"></li>


        </ul>
    )
}

export { TodoLoading }
