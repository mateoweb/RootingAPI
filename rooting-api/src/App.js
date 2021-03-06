import React, { Component } from "react";
import "./App.css";
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    this.getTodos()
    .then(res => res.json())
    .then(data => {
      this.setState({
        todos: data
      })
    })
  }

  getTodos(){
    return fetch('http://jsonplaceholder.typicode.com/todos')
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <header className="App-header">Le routage</header>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
