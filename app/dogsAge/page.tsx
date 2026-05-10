"use client";
import { useEffect, useState } from "react";
import "./style.css";
function page() {
  const [dogAge, setDogsAge] = useState(0);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    var btn = document.querySelectorAll(".buttonStyle")[1] as HTMLButtonElement;

    btn?.addEventListener("click", () => {
      var audio = new Audio("/audio/dog-barking.mp3");

      audio.play();
    });
  }, []);

  // formula (dogAge - 2) x 4 + 21
  const calculateDogAge = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    var dogsAge = (dogAge - 2) * 4 + 21;

    setResult(dogsAge);
  };

  const clear = () => {
    setResult(null);
    setDogsAge(0);
  };

  return (
    <div className="mainContainer ">
      <div>
        <button className="buttonStyle" onClick={clear}>
          X
        </button>
        <form onSubmit={calculateDogAge}>
          <div className="boxStyle">
            <label htmlFor="dogs age">
              How old is your dog in human years?
            </label>

            <div>{result !== null && <p className="result">{result}</p>}</div>

            <input
              placeholder="Enter your dogs age"
              className="inputStyle"
              onChange={(e) => setDogsAge(Number(e.target.value))}
            />

            <button className="buttonStyle" type="submit">
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page;
