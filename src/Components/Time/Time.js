import React from 'react'
import classes from './Time.module.css';

class Time extends React.PureComponent {
    state = { date: new Date().toLocaleTimeString().split(' ')[0] }

    componentWillMount = () => {
        this.getTime()
    }

    getTime() {
        setInterval(() => {
            this.setState({ date: new Date().toLocaleTimeString().split(' ')[0] })
        }, 1000)
    }
    render() {
        return (
            <div className={classes.mainContainer}>
                <div className={classes.timeSection}>
                    <h1>{this.state.date}</h1>

                </div>
            </div>
        );
    }
}

export default Time;