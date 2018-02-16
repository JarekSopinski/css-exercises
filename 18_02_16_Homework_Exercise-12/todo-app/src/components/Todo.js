import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name: 'Repair R2-D2', isFinished: true},
                {name: 'Find Obi-wan Kenobi', isFinished: true},
                {name: 'Leave Tatooine', isFinished: true},
                {name: 'Save princess Leina', isFinished: false},
                {name: 'Escape from the Death Star', isFinished: false},
                {name: 'Blow up the Death Star', isFinished: false}
            ]
        }
    }

    render() {
        return <React.Fragment>
            {this.state.todos.map((todo, id) =>
            <li key={id}>{todo.name}</li>
            )}
        </React.Fragment>
    }
}