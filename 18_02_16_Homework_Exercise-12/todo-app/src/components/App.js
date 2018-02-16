import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {name: 'Repair R2-D2', isFinished: true},
                {name: 'Find Obi-wan Kenobi', isFinished: true},
                {name: 'Leave Tatooine', isFinished: true},
                {name: 'Save princess Leia', isFinished: false},
                {name: 'Escape from the Death Star', isFinished: false},
                {name: 'Blow up the Death Star', isFinished: false}
            ]
        }
    }

    render() {
        const onAdded = this.onAdded;

        return <React.Fragment>
            <Todo todos={this.state.todos}/>
            <AddTodo todos={this.state.todos}
                     onAdded = {onAdded.bind(this)}
            />
        </React.Fragment>
    }

    onAdded(newTodoName) {

        const newTodo = {
            name: newTodoName,
            isFinished: false
        };

        const updatedTodos = [...this.state.todos, newTodo];

        this.setState({
            todos: updatedTodos
        });
    }

}