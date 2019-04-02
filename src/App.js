import React, { Component }
from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    function changeNum() {
        console.log(Math.floor(Math.random() * 1000))
    }

    return (
        <div className = "App">
            <header className = "App-header">
                <img src = { logo } className = "App-logo" alt = "logo" onClick={this.changeNum} />
                <p>{ Math.floor(Math.random() * 1000) }</ p>
            </ header>
        </div>
    );
  }
}

export default App;
