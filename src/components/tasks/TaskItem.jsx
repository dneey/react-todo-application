import React from 'react';

export default class TaskItem extends React.Component {
  isComplete(completed) {
    return completed ? 'text text-muted hover' : 'text cursor hover';
  }
  textStyle(completed) {
    return completed
      ? {
          textDecoration: 'line-through',
          cursor: 'pointer'
        }
      : {
          cursor: 'pointer'
        };
  }
  render() {
    return (
      <div className='row'>
        <div className='col-md-12 col-lg-12  pb-2 pt-2'>
          <p className={this.isComplete(this.props.task.completed)}>
            <span
              onClick={() => this.props.toggleComplete(this.props.task.id)}
              style={this.textStyle(this.props.task.completed)}
            >
              {this.props.task.title}
            </span>

            <button
              onClick={() => this.props.deleteTask(this.props.task.id)}
              className='btn btn-outline-danger float-right'
            >
              Delete
            </button>
          </p>
          <small className='text-muted'>{this.props.task.created_at}</small>
          <div
            className='pb-4'
            style={{ borderBottom: '1px solid rgba(240, 243, 245)' }}
          ></div>
        </div>
      </div>
    );
  }
}
