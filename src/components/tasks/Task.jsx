import React from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import axios from 'axios';

export default class Todo extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    const url = 'http://127.0.0.1:8000/api/todos';
    axios.get(url).then(res => this.setState({ tasks: res.data.data }));
  }
  deleteTask = taskId => {
    const tasks = this.state.tasks.filter(task => {
      if (task.id !== taskId) {
        return task;
      }
      console.log(task);
      return null;
    });
    this.setState({ tasks });
  };

  countTasks = () => {
    return this.state.tasks.length;
  };

  toggleComplete = taskId => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }
      return task;
    });
    this.setState({ tasks });
  };

  addTask = task => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  getStyleForYourTasks = () => {
    return this.countTasks() === 0
      ? 'text text-center text-muted'
      : 'text font-weight-bold pb-4 text-dark';
  };

  render() {
    return (
      <div>
        {/* <hr /> */}
        <AddTask addTask={this.addTask}></AddTask>
        {/* <h4 className='text pb-4'>
          Tasks{' '}
          <small className='pl-0 pr-2 text-small'>({this.countTasks()})</small>
        </h4> */}
        <p className={this.getStyleForYourTasks()}>
          {this.countTasks() === 0
            ? 'Your have not added any tasks yet.'
            : 'All Tasks'}
        </p>
        <div className='bg-outline'>
          {this.state.tasks
            .map(task => {
              return (
                <TaskItem
                  key={task.id}
                  task={task}
                  deleteTask={this.deleteTask}
                  toggleComplete={this.toggleComplete}
                ></TaskItem>
              );
            })
            .reverse()}
        </div>
      </div>
    );
  }
}
