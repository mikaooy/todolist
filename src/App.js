import React, { Component } from "react"
import "./App.css"
import Todos from "./components/Todos"
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import SearchBox from "./components/SearchBox"
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  constructor(props) {
    super(props)
    const storedState = localStorage.getItem("state")
    this.state = storedState
      ? JSON.parse(storedState)
      : {
          todos: [],
          searchfield: "",
        }
  }

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state))
  }

  // toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    })
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 1 + Math.random(),
      title: title,
      completed: false,
    }

    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  clearList = () =>
    this.setState({
      todos: [],
    })

  render() {
    const { todos, searchfield } = this.state
    const filteredTodos = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchfield.toLowerCase())
    )

    return (
      <Router>
        <div className="App">
          <div className="container-fluid p-3">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <div class="bg-dark d-flex justify-content-between align-items-center">
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <AddTodo addTodo={this.addTodo} />
                    <button
                      class="btn btn-warning m-3"
                      onClick={this.clearList}
                    >
                      clear all
                    </button>
                  </div>
                  <Todos
                    todos={filteredTodos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                    clearList={this.clearList}
                  />
                </React.Fragment>
              )}
            ></Route>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
