"use client";
import { useState } from "react";
import "./style.css";
function page() {
  const [dogAge, setDogsAge] = useState(0);

  // formula (dogAge - 2) x 4 + 21
  const calculateDogAge = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    var dogsAge = (dogAge - 2) * 4 + 21;
    setDogsAge(dogsAge);
  };

  return (
    <div className="mainContainer ">
      <div className="row">
        <div className="col">
          <form onSubmit={calculateDogAge}>
            <label htmlFor="dogs age">
              How old is your dog in human years?
            </label>
            <br />
            <input onChange={(e) => setDogsAge(Number(e.target.value))} />
            <br />
            <button type="submit">Calculate</button>
          </form>
          <br />
          {`Your dog is ${dogAge} human years old.`}
        </div>
      </div>
    </div>
  );
}

export default page;
