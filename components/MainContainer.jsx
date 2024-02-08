import React from "react";

const MainContainer = () => {
  return (
    <div className="card">
      <h1>PASSWORD GENERATOR</h1>
      <form>
        <label>choose number of characters :</label>
        <select name="" id="">
          <optgroup label="number of characters">
            <option value="">8</option>
            <option value="">10</option>
            <option value="">12</option>
          </optgroup>
        </select>
        <label>choose level of passowrd :</label>
        <select name="" id="">
          <optgroup label="level of passowrd">
            <option value="easy">easy</option>
            <option value="strong">strong</option>
            <option value="veryStrong">very strong</option>
          </optgroup>
        </select>
      </form>
    </div>
  );
};

export default MainContainer;
