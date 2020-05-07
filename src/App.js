import React, { Component } from "react"
import "./App.css"
import SeznamUkolu from "./components/SeznamUkolu"
import Header from "./components/Header"
import VyhledavaciPole from "./components/VyhledavaciPole"
import "bootstrap/dist/css/bootstrap.css"
import PridejTodo from "./components/PridejTodo"

const stateVersion = 1

class App extends Component {
  constructor(props) {
    super(props)
    const storedState = localStorage.getItem("state")
    const parsedState = JSON.parse(storedState)

    this.state =
      storedState && parsedState.stateVersion === stateVersion
        ? parsedState
        : {
            ukoly: [],
            searchfield: "",
          }
  }

  componentDidUpdate() {
    localStorage.setItem(
      "state",
      JSON.stringify({ ...this.state, stateVersion })
    )
  }

  oznacZaHotove = (id) => {
    this.setState({
      ukoly: this.state.ukoly.map((ukol) => {
        if (ukol.id === id) {
          ukol.completed = !ukol.completed
        }
        return ukol
      }),
    })
  }

  smazatUkol = (id) => {
    this.setState({
      ukoly: this.state.ukoly.filter((ukol) => ukol.id !== id),
    })
  }

  pridatUkol = (title) => {
    const novyUkol = {
      id: 1 + Math.random(),
      title: title,
      completed: false,
    }

    this.setState({ ukoly: [...this.state.ukoly, novyUkol] })
  }

  naZmenuVyhledavani = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  smazatVse = () =>
    this.setState({
      ukoly: [],
    })

  render() {
    const { ukoly, searchfield } = this.state
    const filtrovaneUkoly = ukoly.filter((ukol) =>
      ukol.title.toLowerCase().includes(searchfield.toLowerCase())
    )

    return (
      <div className="App">
        <div className="container-fluid p-3">
          <Header />
          <div className="bg-dark d-flex justify-content-between align-items-center">
            <VyhledavaciPole
              vyhledavaciZmena={this.naZmenuVyhledavani}
            ></VyhledavaciPole>
            <PridejTodo pridatUkol={this.pridatUkol} />
            <button className="btn btn-warning m-3" onClick={this.smazatVse}>
              smaž vše
            </button>
          </div>
          <SeznamUkolu
            ukoly={filtrovaneUkoly}
            oznacZaHotove={this.oznacZaHotove}
            smazatUkol={this.smazatUkol}
          />
        </div>
      </div>
    )
  }
}

export default App
