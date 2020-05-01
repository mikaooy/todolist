import React, { Component } from "react"

class PridejTodo extends Component {
  state = {
    title: "",
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.pridatUkol(this.state.title)
    this.setState({ title: "" })
  }

  onChange = (e) => this.setState({ title: e.target.value })

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="přidej úkol..."
          className="form-control"
          value={this.state.title}
          onChange={this.onChange}
        ></input>
        <input type="submit" value="Přidat" className="btn btn-primary"></input>
      </form>
    )
  }
}

export default PridejTodo
