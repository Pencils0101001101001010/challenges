"use client";
import { useState } from "react";
import "./style.css";

export default function bmiCalculator() {
  const [weight, setweight] = useState(0);
  const [height, setHeight] = useState(0);

  const handleClick = (e: React.SubmitEvent<HTMLFormElement>) => {
    var interpretation = Math.round(weight / (height * height));
    if (interpretation < 18.5) {
      return alert(
        "Your BMI is " + interpretation + ", so you are underweight.",
      );
    } else if (interpretation > 18.5 && interpretation < 24.9) {
      return alert(
        "Your BMI is " + interpretation + ", so you have a normal weight.",
      );
    } else {
      return alert(
        "Your BMI is " + interpretation + ", so you are overweight.",
      );
    }
  };

  return (
    <div className="mainContaiener">
      <form onSubmit={handleClick}>
        <label htmlFor="weight">Enter your weight:</label>
        <input
          onChange={(e) => setweight(Number(e.target.value))}
          value={weight}
        />
        <label htmlFor="height">Enter your height:</label>
        <input
          onChange={(e) => setHeight(Number(e.target.value))}
          value={height}
        />
        <button type="submit">Calulate</button>
      </form>
    </div>
  );
}
