import React from "react";

export default class TaskItem extends React.Component {
  isComplete(completed) {
    return completed ? "text text-muted hover" : "text cursor hover";
  }
  textStyle(completed) {
    return completed
      ? {
          textDecoration: "line-through",
          cursor: "pointer"
        }
      : {
          cursor: "pointer"
        };
  }
  render() {
    return (
      <React.Fragment>
        <p className={this.isComplete(this.props.task.completed)}>
          <span
            onClick={() => this.props.toggleComplete(this.props.task.id)}
            style={this.textStyle(this.props.task.completed)}
          >
            {this.props.task.title}
          </span>
          <button
            onClick={() => this.props.deleteTask(this.props.task.id)}
            className="btn btn-outline-danger float-right"
          >
            X
          </button>
        </p>

        <hr />
      </React.Fragment>
    );
  }
}
