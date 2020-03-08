import React from 'react'
import classes from './Todos.module.css'

const Todos = (props) => {
    return (


        <div className={classes.todoList}>

            <form className={classes.my_todo_list} onSubmit={props.addNote}>
                <input type="text" placeholder="Enter Your Todos here" onChange={props.handleInput} value={props.text} />
            </form>
        </div>

    );
}

export default Todos;