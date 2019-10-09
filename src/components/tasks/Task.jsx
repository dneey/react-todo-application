import React from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import axios from 'axios';
import Spinner from '../Spinner';
import swal from 'sweetalert';

export default class Todo extends React.Component {
  state = {
    tasks: [],
    isLoading: 0
  };
  componentDidMount() {
    const url = 'http://127.0.0.1:8000/api/todos';
    this.setState({ isLoading: 1 });
    axios
      .get(url)
      .then(res => this.setState({ tasks: res.data.data, isLoading: 0 }));
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
    const url = 'http://127.0.0.1:8000/api/todos';
    const data = {
      title: task.title,
      description: task.title
    };
    axios.post(url, data).then(res => {
      if (res.data.responseCode === '200') {
        this.setState({ tasks: [...this.state.tasks, res.data.data] });
        swal('Task Added!', 'You successfully added a task!', 'success');
      }
    });
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
        {/* <h4 className='text pb-4'>Tasks </h4> */}
        <div className='text pb-0 text-center bold'>
          Tasks
          <small className='pl-0 pr-2 text-small'>({this.countTasks()})</small>
        </div>
        {this.state.isLoading === 1 ? (
          <Spinner></Spinner>
        ) : (
          <p className={this.getStyleForYourTasks()}>
            {this.countTasks() === 0 ? 'You have not added any tasks yet.' : ''}
          </p>
        )}

        <div className='bg-outline'>
          {this.state.tasks.map(task => {
            return (
              <TaskItem
                key={task.id}
                task={task}
                deleteTask={this.deleteTask}
                toggleComplete={this.toggleComplete}
              ></TaskItem>
            );
          })}
        </div>
      </div>
    );
  }
}
