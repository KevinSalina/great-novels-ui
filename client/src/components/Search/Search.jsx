import React from "react";

const Search = ({ searchTerm, setterFn }) => {

  return (
    <input type="text" value={searchTerm} onChange={setterFn} />
  )
}

export default Search