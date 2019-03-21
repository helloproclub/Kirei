import React, { Component } from 'react';
import Button from './button/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isHidden: false
        }
    }

    toogleHidden() {
        this.setState(
            prevState => ({ isHidden: !(prevState.isHidden) }))
    }

    render() {
        let buttons = []

        for (let i = 0; i < 10; i++) {
            buttons.push(<Button name="danu"/>)
        }

        let nama = 'danu'
        return (
            <div className="App">
                <Button name="World" sayHi={() => this.toogleHidden()}/>
                { !this.state.isHidden ?
                  <h1> Hi Everyone </h1> : '' }
                { buttons.map(b => b) }
            </div>
        );
  }
}

export default App;
