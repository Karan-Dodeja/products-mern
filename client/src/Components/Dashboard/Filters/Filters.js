import React from "react";

export const Filters = () => {
  return (
    <div className="filters">
      <div className="chemistry-filter">
        <label name="chemistry">Filter by Chemistry</label>
        <select name="chemistry" id="chemistry">
          <option value="Chemistry 1">Chemistry 1</option>
          <option value="Chemistry 2">Chemistry 2</option>
          <option value="Chemistry 3">Chemistry 3</option>
          <option value="Chemistry 4">Chemistry 4</option>
          <option value="Chemistry 5">Chemistry 5</option>
          <option value="Chemistry 6">Chemistry 6</option>
          <option value="Chemistry 7">Chemistry 7</option>
          <option value="Chemistry 8">Chemistry 8</option>
          <option value="Chemistry 9">Chemistry 9</option>
          <option value="Chemistry 10">Chemistry 10</option>
        </select>
      </div>
      <div className="process-filter">
        <label name="process">Filter by Process</label>
        <select name="process" id="process">
          <option value="Process 1.1">Process 1.1</option>
          <option value="Process 1.2">Process 1.2</option>
          <option value="Process 1.3">Process 1.3</option>
          <option value="Process 2.1">Process 2.1</option>
          <option value="Process 2.2">Process 2.2</option>
          <option value="Process 2.3">Process 2.3</option>
          <option value="Process 3.1">Process 3.1</option>
          <option value="Process 3.2">Process 3.2</option>
          <option value="Process 3.3">Process 3.3</option>
          <option value="Process 4.1">Process 4.1</option>
        </select>
      </div>
      <div className="search-box">
        <label>Search keyword</label>
        <input type="text" placeholder="Search here..." />
      </div>
    </div>
  );
};
