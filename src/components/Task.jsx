import React from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

export default class Todo extends React.Component {
  state = {
    tasks: [
      {
        id: "1",
        title: "My own app",
        completed: false
      },
      {
        id: "2",
        title: "My own app 2",
        completed: false
      },
      {
        id: "3",
        title: "My own app 3",
        completed: false
      },
      {
        id: "4",
        title: "My own app 4",
        completed: true
      }
    ]
  };

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
  render() {
    return (
      <div>
        <p className="text text-center font-weight-bold">
          TodoList|Count : {this.countTasks()}
        </p>
        <hr />
        <AddTask></AddTask>
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
    );
  }
}
