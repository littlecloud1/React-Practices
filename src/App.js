﻿import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App.</h1>
                <p> This is really working!</p>
                <Person>
                </Person>
            </div>
            //<h1>Another heading</h1> count do this, can only have one root element
        );
        //  return React.createElement('div', {
        //        className: 'App'}, 
        //React.createElement('h1', null, 'Hi, I\'m a React App.'));
    }
}


export default App;
