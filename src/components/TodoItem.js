import React, { Component } from "react"
import PropTypes from "prop-types"

export class TodoItem extends Component {
  render() {
    const style = {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    }

    const { id, title } = this.props.todo

    return (
      <div class="row">
        <div class="col-sm">
          <div class="card text-center text-white bg-dark mb-3 mt-3">
            <div class="card-header">Todo</div>
            <div class="card-body">
              <h5 style={style} class="card-title">
                {title}
              </h5>
              <div class="d-flex justify-content-between">
                <button
                  className="delete btn btn-outline-success"
                  onClick={() => this.props.markComplete(id)}
                >
                  completed
                </button>
                <button
                  className="delete btn btn-danger"
                  onClick={() => this.props.delTodo(id)}
                >
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default TodoItem
