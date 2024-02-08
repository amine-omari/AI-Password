import React, { useState } from "react";

const MainContainer = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="card">
      <h1>PASSWORD GENERATOR</h1>
      <form>
        <label>choose number of characters :</label>
        <select name="numCharacters" id="numCharacters">
          <optgroup label="number of characters">
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </optgroup>
        </select>
        <label>choose level of passowrd :</label>
        <select name="level" id="level">
          <optgroup label="level of passowrd">
            <option value="easy">easy</option>
            <option value="strong">strong</option>
            <option value="veryStrong">very strong</option>
          </optgroup>
        </select>
        <button>generate passowrd</button>
      </form>
    </div>
  );
};

export default MainContainer;
