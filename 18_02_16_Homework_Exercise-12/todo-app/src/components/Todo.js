import React from 'react';

export default class extends React.Component {

    crossOutIfFinished(id) {
        const isFinished = this.props.todos[id].isFinished;
        return {
            textDecoration: isFinished ? 'line-through' : 'none'
        }
    }

    render() {
        return <React.Fragment>
            <ul>
                {
                    this.props.todos.map((todo, id) =>
                        <li
                            key={id}
                            style={this.crossOutIfFinished(id)}>
                            {todo.name}
                            </li>
                    )
                }
            </ul>
        </React.Fragment>
    }
}