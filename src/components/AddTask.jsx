import React from "react";

export default class AddTask extends React.Component {
  render() {
    return (
      <form>
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Task"
            name="title"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary" type="button">
              Add
            </button>
          </div>
        </div>
        <p></p>
        <small className="form-text text-muted">
          **Your tasks will never expire until you delete them or refresh the
          page
        </small>
        <p></p>
        <p></p>
      </form>
    );
  }
}
