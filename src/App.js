import React, { Component } from 'react';
import NoteList from './Components/NoteList/NoteList'
import classes from './App.module.css';
import Time from './Components/Time/Time'
import Todos from './Components/Todos/Todos'
import { KEY_USERNAME, KEY_WORKNOTE } from './Components/Utils/Constants'
import { storeUserData, getUserData } from './Components/Utils/UserData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentNote: {
        text: "",
        key: ""
      },
      currentGreetings: getUserData(KEY_USERNAME) !== null && getUserData(KEY_USERNAME) !== "",
      curentInputVal: getUserData(KEY_USERNAME),
      currentWork: getUserData(KEY_WORKNOTE),
      currentState: true,
      userState: false,
    }
    this.handleInput = this.handleInput.bind(this)
    this.addNote = this.addNote.bind(this)
    this.deleteNotes = this.deleteNotes.bind(this)
    this.onNameSubmiting = this.onNameSubmiting.bind(this)
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
          key: ""
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

  onNameSubmiting = (e) => {
    e.preventDefault()
    storeUserData(KEY_USERNAME, this.state.curentInputVal)
    this.setState({
      currentGreetings: true,
      userState: true
    })

  }
  noteClicked = () => {
    return (classes.checkbox)
  }
  onJobSubmiting = (e) => {
    e.preventDefault()
    this.setState({ currentState: false })
    storeUserData(KEY_WORKNOTE, this.state.currentWork)
  }
  onJobChange = (e) => {
    this.setState({ currentWork: e.target.value })
  }
  onInputChange = (e) => {
    this.setState({ curentInputVal: e.target.value })
  }
  getBackgroundImageForCurrentTime = () => {
    const currentHours = new Date().getHours()
    if (currentHours >= 4 && currentHours < 12) {
      return (classes.bgImageMorning)
    } else if (currentHours >= 12 && currentHours < 16) {
      return (classes.bgImageAfternoon)
    } else if (currentHours >= 16 && currentHours < 22) {
      return (classes.bgImageEvening)

    } else {
      return (classes.bgImageNight)
    }
  }
  getCurrentGreetings = () => {
    const currentHours = new Date().getHours()
    if (currentHours >= 4 && currentHours < 12) {
      return "Good Morning"
    } else if (currentHours >= 12 && currentHours < 16) {
      return "Good Afternoon"
    } else if (currentHours >= 16 && currentHours < 22) {
      return "Good Evening"

    } else {
      return "Good Night"
    }
  }


  render() {
    return (
      <div className={classes.App}>
        <div className={[classes.bgImage, this.getBackgroundImageForCurrentTime()].join(" ")}>
          <div className={classes.noteContainer}>
            <Time />
            <div className={classes.mainNote}>
              {
                this.state.currentGreetings ? <h1>{this.getCurrentGreetings()} , {this.state.curentInputVal}</h1> :
                  <div>
                    <h1>What Do you like to call??</h1>
                    <form action="" onSubmit={this.onNameSubmiting}>
                      <input type="text" onChange={this.onInputChange} value={this.state.curentInputVal} />
                    </form>
                  </div>
              }
              {
                this.state.userState ?
                  <div >
                    {
                      this.state.currentState ?
                        <div>
                          <h1>What's Your Main Focus Today</h1>
                          <form action="" onSubmit={this.onJobSubmiting}>
                            <input type="text" onChange={this.onJobChange} value={this.state.currentWork} />
                          </form>
                        </div>
                        :
                        <div className={classes.dayNote}>
                          <input type="checkbox" className={classes.dayNoteMark} />
                          <h1>{this.state.currentWork}</h1>
                          <span ><i className="fas fa-trash"></i></span>
                        </div>

                    }
                  </div> : null
              }
            </div>
          </div>
          <div className={classes.todoList}>
            <Todos addNote={this.addNote} handleInput={this.handleInput} text={this.state.currentNote.text} />
            <NoteList items={this.state.notes} deletItem={this.deleteNotes} setUpdate={this.setUpdate} clickedNote={this.noteClicked} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;