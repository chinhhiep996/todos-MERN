import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if(event.key === 'Enter') {
            this.props.addTodo(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <input
                    onKeyPress={this.handleSubmit}
                    placeholder='Nhập todo'
                />
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodo);