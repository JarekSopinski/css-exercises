import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

export default class extends React.Component {
    render() {
        return <React.Fragment>
            <Todo/>
            <AddTodo/>
        </React.Fragment>
    }
}
