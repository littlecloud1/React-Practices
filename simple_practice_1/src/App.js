import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    //can only called by this props
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephaine', age: 26 }
        ],
        otherState: 'some other valuie'
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephaine', age: 26 }
            ],
            otherState: 'some other valuie',
            showPersons: false
        });
    }

    switchNameHandler = (newName) => {
        //console.log('Was clicked!');
        //Don't do this : this.state.person[1].name = 'Nancy'

        //use setState to update
        //only change on affected state
        this.setState({
            persons: [
                { name: newName , age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephaine', age: 27 }
            ]
        });

    }

    togglePersonHandle = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }



    //onClick part, the function should not add ()
    //otherwise it will excute immediately
    //we only need it when it call 
    //so pass it as an reference
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'ingerit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App.</h1>
                <p> This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandle}>Toogle Persons</button>
                {this.state.showPersons ?
                    <div>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age} />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        click={this.switchNameHandler.bind(this, 'Nancy')}
                        changed={this.nameChangeHandler}
                    >My Hoobies: Racing</Person>
                    <Person
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age} />

                    </div> : null
                    }
            </div>
            //<h1>Another heading</h1> count do this, can only have one root element
        );
        //  return React.createElement('div', {
        //        className: 'App'}, 
        //React.createElement('h1', null, 'Hi, I\'m a React App.'));
    }
}


export default App;
