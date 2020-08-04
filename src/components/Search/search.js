import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        className="input"
        onChange={props.handleSearch}
        placeholder="Search for a skater"
      />
    </div>
  );
}

export default Search;
