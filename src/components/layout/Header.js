import React from "react"
import { Link } from "react-router-dom"

function header() {
  return (
    <header class="p-3 bg-dark text-white text-center">
      <h1 className="nadpis">Úkolníček</h1>
      <Link class="bg-dark text-white text-center p-3" to="/">
        Domů
      </Link>
      |
      <Link class="bg-dark text-white text-center p-3" to="/about">
        O projektu
      </Link>
      |
      <Link class="bg-dark text-white text-center p-3" to="contact">
        Kontakt
      </Link>
    </header>
  )
}

export default header
