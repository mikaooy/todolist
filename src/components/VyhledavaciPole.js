import React from "react"

const VyhledavaciPole = ({ vyhledavaciZmena }) => {
  return (
    <div>
      <input
        className="form-control m-3"
        type="search"
        placeholder="vyhledej úkol..."
        onChange={vyhledavaciZmena}
      ></input>
    </div>
  )
}

export default VyhledavaciPole
