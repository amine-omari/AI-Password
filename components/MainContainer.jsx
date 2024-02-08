import React, { useState } from "react";

const MainContainer = () => {
  const [password, setPassword] = useState("");
  const [isHide, setIsHide] = useState();

  const generatePassword = (numCharacters, level) => {
    let chars = "";

    // Adjust the character set based on the selected level
    if (level === "easy") {
      chars = "0123456789";
    } else if (level === "strong") {
      chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    } else if (level === "veryStrong") {
      chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    }

    let result = "";
    for (let i = 0; i < numCharacters; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numCharacters = parseInt(event.target.elements.numCharacters.value);
    const level = event.target.elements.level.value;
    generatePassword(numCharacters, level);
  };

  return (
    <div className="card">
      {password ? <h1> YOUR PASSWORD IS</h1> : <h1>PASSWORD GENERATOR</h1>}
      {password ? (
        <div>
          <h2>{password}</h2>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
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
          <button type="submit">generate passowrd</button>
        </form>
      )}
    </div>
  );
};

export default MainContainer;
