import React from "react"

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        class="form-control m-3"
        type="search"
        placeholder="search todos"
        onChange={searchChange}
      ></input>
    </div>
  )
}

export default SearchBox
