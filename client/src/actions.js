import axios from 'axios';

import {
    GET_TODOS,
    ADD_TODO,
    LOAD_TODOS,
    DELETE_TODO,
    COMPLETE_TODO
} from './constants';

axios.defaults.baseURL = 'http://localhost:8080/api';

export const getTodos = () => dispatch => {
    axios.get('/todos')
        .then(res => dispatch({
            type: GET_TODOS,
            payload: res.data
        }))
        .catch(err => console.error(err));
    
    dispatch({
        type: LOAD_TODOS,
    });
}

export const addTodo = text => dispatch => {
    axios.post('/todos', { text })
        .then(res => dispatch({
            type: ADD_TODO,
            payload: res.data
        }))
        .catch(err => console.error(err));
}

export const deleteTodo = todoId => dispatch => {
    axios.delete(`/todos/${todoId}`)
        .then(res => dispatch({
            type: DELETE_TODO,
            payload: res.data.todoId_delete
        }))
        .catch(err => console.error(err));
}

export const completedTodo = todoId => dispatch => {
    axios.put(`/todos/${todoId}`)
        .then(res => dispatch({
            type: COMPLETE_TODO,
            payload: res.data.todo_edited._id
        }))
        .catch(err => console.error(err));
}