import React from 'react';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    render() {
        const onAdded = this.props.onAdded;
        const updatedInputValue = this.state.inputValue;

        return <React.Fragment>
            <input type="text" onChange={this.changeInputValue.bind(this)}/>
            <button onClick={() => onAdded(updatedInputValue)}>Add new task</button>
        </React.Fragment>
    }

    changeInputValue(event) {
        this.setState({
            inputValue: event.target.value
        })

    }

}