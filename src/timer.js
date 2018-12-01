import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
    constructor(props){
    super(props)
    this.state ={
        count: 1
    }
}
}
/*render() {
    const { count } = this.state
    return(
        <div>
            <hi>{count}</hi>
        </div>
    )
}
start(){
    console.log('start')
    this.interval = setInterval(() => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }, 1000)
}
componentDidMount() {
}
componentWillUnmount() {
    clearInterval(this.interval)
}
}
export default Timer*/