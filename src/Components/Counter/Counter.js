import React from 'react'
import classes from './Counter.module.css'

class Counter extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            totalCount: 1,
        }
    }
    onUpdateClick = () => {
        const updatedCount = this.state.totalCount < 10 ? this.state.totalCount + 1 : this.state.totalCount;
        this.setState({ totalCount: updatedCount })
    }
    shouldComponentUpdate = () => {
        console.log("updated")
    }
    render() {
        return (
            <div className={classes.mainContainer}>
                <h1>Count : {this.state.totalCount}</h1>
                <button onClick={this.onUpdateClick}>Update</button>
            </div>
        );
    }
}

export default Counter;