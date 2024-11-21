import React, { Component } from 'react';
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  // Handle change in the input field
  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  // Add new task
  handleAddTask = () => {
    if (this.state.newTask.trim()) {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.newTask],
        newTask: '', // Clear the input field after adding
      }));
    }
  };

  // Delete task by index
  handleDeleteTask = (index) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.filter((_, i) => i !== index);
      return { tasks: updatedTasks };
    });
  };

  render() {
    return (
      <div className='main'>
        <h1 className='heading'>To-Do List</h1>
        <div className='container'>
          <input className='input-container'
            type="text"
            value={this.state.newTask}
            onChange={this.handleInputChange}
            placeholder="Enter a new task"
          />
          <button className='add_button' onClick={this.handleAddTask}>+</button>
        </div>

        <ul className='tolist'>
          {this.state.tasks.map((task, index) => (
            <li key={index} className='listname'>
              {task} <button className='delete-btn' onClick={() => this.handleDeleteTask(index)}>-</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App