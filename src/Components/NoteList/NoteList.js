import React from 'react';
import classes from './NoteList.module.css'

const NoteListItems = (props) => {
    const lists = props.items
    const listItems = lists.map(item => {
        return (
            <div className={classes.list} key={item.key}>
                <p>
                    <input type="text" value={item.text} onChange={(e) => props.setUpdate(e.target.value, item.key)} />
                    <span onClick={() => props.deletItem(item.key)}><i className="fas fa-trash"></i></span>
                    {/* <span className={classes.imp_tag} onClick={() => props.impNoteAdd(item.key)}><i className="fas fa-star"></i></span> */}
                </p>
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