import React, { Component } from 'react';
import './App.css';
import Comment from './Comment/Comment'
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
    


    state = {
        text: "",
        length: 0
    };

    textChangehandler = (event) => {
        const newText = event.target.value;
        const newlength = newText.length;

        this.setState({
            text: newText,
            length: newlength
        });
    };

    deleteCharaterHandeler = (index) => {
        const texts = this.state.text.split('');
        texts.splice(index, 1);
        const update = texts.join('');
        this.setState({ text: update });
    };

    render() {

  

        let charaters =
            this.state.text.split('').map((c, index) => {
                return <Char
                    character={c}
                    key={index}
                    click={() => this.deleteCharaterHandeler(index)}
                />

            });


        return (
            <div className="App">
                <Comment
                    changed={(event) => this.textChangehandler(event)}
                    text={this.state.text}
                    length={this.state.length}
                />
                <Validation
                    length={this.state.length}
                />
                {charaters}
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
            </div>
        );
    }
}

export default App;
