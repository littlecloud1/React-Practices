import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    //can only called by this props
    state = {
        persons: [
            { id :'a', name: 'Max', age: 28 },
            { id :'b', name: 'Manu', age: 29 },
            { id :'c', name: 'Stephaine', age: 26 }
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

    deletePersonHandler = (personIndex) => {
        //reference to a copy
        ///const persons = this.state.persons.slice(); 
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1); //remove one element from the array
        this.setState({ persons: persons });
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

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                        />
                    })} 
                </div>);
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App.</h1>
                <p> This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonHandle}>Toogle Persons</button>
                {persons}
            </div>
            //<h1>Another heading</h1> count do this, can only have one root element
        );
        //  return React.createElement('div', {
        //        className: 'App'}, 
        //React.createElement('h1', null, 'Hi, I\'m a React App.'));
    }
}


export default App;
