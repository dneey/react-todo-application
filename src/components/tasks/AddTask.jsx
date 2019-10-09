import React from 'react';

export default class AddTask extends React.Component {
  state = {
    task: {
      id: 0,
      title: '',
      completed: false
    }
  };
  onChange = e => {
    this.setState({
      task: {
        id: Math.random(),
        title:
          e.target.value.charAt(0).toUpperCase() + e.target.value.substring(1),
        completed: false
      }
    });
  };

  submit = e => {
    console.log('Submitting data to be saved');
    e.preventDefault();
    this.setState({ task: { title: '' } });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <div className='input-group'>
            <input
              className='form-control pt-4 pb-4'
              type='text'
              placeholder='Add a new task...'
              name='title'
              value={this.state.task.title}
              onChange={this.onChange}
            />
            <div className='input-group-append'>
              <button
                onClick={() => this.props.addTask(this.state.task)}
                name='title'
                className='btn btn-outline-primary'
                type='submit'
              >
                Add
              </button>
            </div>
          </div>
          <p></p>
          {/* <small className='form-text text-muted'>
          Your tasks will never expire until you delete them or refresh this
          page
          <hr />
        </small> */}
          <p></p>
          <p></p>
        </form>
      </div>
    );
  }
}
