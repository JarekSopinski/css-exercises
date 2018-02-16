import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',

        }
    }


    render() {
        return <React.Fragment>
            <input type="text" value={this.state.inputValue} onChange={this.changeInputValue.bind(this)}/>
            <button>Add new task</button>
        </React.Fragment>
    }

    changeInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })

    }

}