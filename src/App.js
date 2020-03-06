import React, { Component } from 'react';
import NoteList from './Components/NoteList/NoteList'
import classes from './App.module.css';
import Time from './Components/Time/Time'
import Todos from './Components/Todos/Todos'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentNote: {
        text: "",
      },
      user: false,
      userName: " ",
      currentWhether: " ",
    }
    this.handleInput = this.handleInput.bind(this)
    this.addNote = this.addNote.bind(this)
    this.deleteNotes = this.deleteNotes.bind(this)
    this.setUpdate = this.setUpdate.bind(this);


  }
  handleInput(e) {
    this.setState({
      currentNote: {
        text: e.target.value,
        key: Date.now()
      }
    })

  }

  addNote(e) {
    e.preventDefault();
    const newNote = this.state.currentNote;
    if (newNote.text !== "") {
      const addNewNote = [...this.state.notes, newNote];
      this.setState({
        notes: addNewNote,
        currentNote: {
          text: "",
        }

      })
    }
  }

  deleteNotes(key) {
    const filterList = this.state.notes.filter(item => item.key !== key);
    this.setState({
      notes: filterList
    })
  }

  setUpdate(text, key) {
    const items = this.state.notes;
    items.map(item => {
      if (item.key === key) {
        item.text = text
      }
    })
    this.setState({
      notes: items
    })
  }

  render() {
    return (
      <div className={classes.App}>

        <Time />
        <div className={classes.callingName}>
          {
            this.state.user ? <h1>{this.state.currentWhether + this.state.userName}</h1> : <h1>What do you like to be called</h1>
          }
        </div>
        <Todos addNote={this.addNote} handleInput={this.handleInput} text={this.state.currentNote.text} />

        <NoteList items={this.state.notes} deletItem={this.deleteNotes} setUpdate={this.setUpdate} />
      </div>
    );
  }
}

export default App;