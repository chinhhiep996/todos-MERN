import React, { Component } from 'react';

import Header from './Header';
import AddTodo from './AddTodo';
import ListTodos from './ListTodos';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className='header'>
          <Header />
          <AddTodo />
        </div>
        <ListTodos />
      </div>
    );
  }
}

export default App;
