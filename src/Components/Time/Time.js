import React from 'react'
import classes from './Time.module.css';

class Time extends React.Component {
    state = { date: new Date() }

    getTime() {
        setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }
    render() {
        return (
            <div className={classes.mainContainer}>


                <div className={classes.timeSection}>
                    <h1>{this.state.date.toLocaleTimeString()}</h1>
                    {this.getTime()}
                </div>
            </div>
        );
    }
}

export default Time;