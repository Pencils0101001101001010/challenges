"use client";

import { useState } from "react";
import "./searchbar.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue === "I love you" || inputValue === "i love you") {
      alert("I love you more");
      alert("I do ");
      alert("I love you so much");
      alert("Just because you don't agree enjoy!");
      alert("I love you so much");
      alert("I love you so much");
      alert("I love you so much");
      alert("I love you so much");
      alert("I love you so much");
      alert("just a few more");
      alert("I love you so much");
      alert("I love you so much");
      alert("I love you so much");
      alert("lol");
    } else if (inputValue === "sandy" || inputValue === "Sandy") {
      alert("Ja poef papier");
      alert("lief vir jou");
      alert("Geniet al die pop ups... HAHAHA");
      alert("blah!");
      alert("blah!!");
      alert("blah!!!");
      alert("blah!!!!");
      alert("blah!!!!!");
      alert("blah!!!!!!");
    } else if (inputValue === "sasha" || inputValue === "Sasha") {
      alert("Maak koffie");
      alert("lief vir jou");
      alert("Geniet al die pop ups... HAHAHA");
      alert("blah!");
      alert("blah!!");
      alert("blah!!!");
      alert("blah!!!!");
      alert("blah!!!!!");
      alert("blah!!!!!!");
    } else if (inputValue === "mamma" || inputValue === "Mamma") {
      alert("Awe Awe");
      alert("lief vir mamma");
      alert("Geniet al die pop ups... HAHAHA");
      alert("blah!");
      alert("blah!!");
      alert("blah!!!");
      alert("blah!!!!");
      alert("blah!!!!!");
      alert("blah!!!!!!");
    } else if (inputValue === "shaun" || inputValue === "Shaun") {
      alert("Awe Awe");
      alert("Hoe lyk dit?");
      alert("Geniet al die pop ups... HAHAHA");
      alert("blah!");
      alert("blah!!");
      alert("blah!!!");
      alert("blah!!!!");
      alert("blah!!!!!");
      alert("blah!!!!!!");
    } else if (
      inputValue === "brad" ||
      inputValue === "Brad" ||
      inputValue === "Bradley" ||
      inputValue === "bradley"
    ) {
      alert("Helooooooo");
      alert("Hoe lyk dit?");
      alert("Geniet al die pop ups... HAHAHA");
      alert("blah!");
      alert("blah!!");
      alert("blah!!!");
      alert("blah!!!!");
      alert("blah!!!!!");
      alert("blah!!!!!!");
      alert("blah!!!!!!!");
      alert("blah!!!!!!!!");
      alert("blah!!!!!!!!!");
      alert("blah!!!!!!!!!!");
    } else if (inputValue === "") {
      alert("you searched nothing ");
    } else {
      alert(`Your searched for:  ${inputValue}`);
    }
  };

  return (
    <div className="mainContainer">
      {" "}
      <div className="boxShadow">
        <label htmlFor="form"></label>
        <input
          onChange={handleInputValue}
          value={inputValue}
          type="text"
          placeholder="Search..."
          className="searchStyle"
        />
        <button onClick={handleSearch} className="btnStyle">
          search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
