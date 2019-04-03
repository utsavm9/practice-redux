import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Num from './randNum'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: this.getRandom()
        }

        this.changeNum = this.changeNum.bind(this)
    }


    getRandom() {
        return Math.floor(Math.random() * 1000)
    }
    
    changeNum() {
        console.log(this.getRandom())
    }

    changeState = () => {
        console.log(this.state)
        this.setState({
            num: this.getRandom(),
        })
    }
  
    render() {
        return (
            <div className = "App" onClick={this.changeState}>
                <header className = "App-header">
                    <img src = { logo } className = "App-logo" alt = "logo" onClick={this.changeState} />
                    <Num number={this.state.num} handleClick={this.changeNum}/>
                </ header>
            </div>
        );
    }
}

export default App;
