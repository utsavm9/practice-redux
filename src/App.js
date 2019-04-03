import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  
    render() {
        return (
            <div className = "App">
                <header className = "App-header">
                    <img src = { logo } className = "App-logo" alt = "logo" />
                    <p onClick={this.changeNum}>{ this.state.num }</ p>
                </ header>
            </div>
        );
    }
}

export default App;
