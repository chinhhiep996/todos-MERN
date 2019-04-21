import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTodo, completedTodo } from '../actions';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    handleDeleteTodo() {
        this.props.deleteTodo(this.props.todo._id);
    }

    handleCompleted() {
        this.props.completedTodo(this.props.todo._id);
    }

    render() {
        const { todo } = this.props;

        return (
            <li className={todo.isCompleted ? 'checked' : ''}>
                <span onClick={this.handleCompleted}>{ todo.text }</span>
                <span 
                    className="close"
                    onClick={this.handleDeleteTodo}
                >
                    &#10799;
                </span>
            </li>
        );
    }
}

export default connect(null, { deleteTodo, completedTodo })(Todo);