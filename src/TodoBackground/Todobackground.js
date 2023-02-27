import './Todobackground.css'
function TodoBackground(props){
    return(
        <div className='todo-background-container'>
            {props.children}
        </div>
    )
}

export {TodoBackground}
