import React from 'react';
import classes from './NoteList.module.css'

const NoteListItems = (props) => {
    const lists = props.items
    const listItems = lists.map(item => {
        return (
            <div className={classes.list} key={item.key}>
                <div className={[classes.listTodos, props.clickedNote].join(' ')} onClick={props.clickedNote}>
                    <input type="checkbox" />
                    <h3>{item.text}</h3>
                    <span onClick={() => props.deletItem(item.key)}><i className="fas fa-trash"></i></span>

                </div>
            </div>
        )
    })

    return (
        <div>
            {listItems}
        </div>
    )
}

export default NoteListItems;