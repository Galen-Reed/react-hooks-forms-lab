import React from "react";

function Filter({ onCategoryChange, category, onSearchChange, search }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearchChange}
        value={search}
      />
      <select name="filter" onChange={onCategoryChange} value={category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;


//when the user tpyes in the search bar,
// the list of items should be filtered with names that match the text
// where does the state go for this component? which components need to know about the search text

//bonus: make the select element a controlled input