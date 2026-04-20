"use client";

import { useEffect, useState } from "react";
import "../styles/calculator.css";

export const CalculatorPage = () => {
  const [currentState, previouseState] = useState();

  return (
    <div className="calculator-container text-white p-5 ">
      <div className="calculator-body">
        <div className="calculator-screen"></div>
        <div className="calculator-grid">
          <button className="ac-button buttons-styles">AC</button>
          <button className="buttons-styles">Del</button>
          <button className="buttons-styles">/</button>
          <button className="buttons-styles">7</button>
          <button className="buttons-styles">8</button>
          <button className="buttons-styles">9</button>
          <button className="buttons-styles">x</button>
          <button className="buttons-styles">4</button>
          <button className="buttons-styles">5</button>
          <button className="buttons-styles">6</button>
          <button className="buttons-styles">-</button>
          <button className="buttons-styles">1</button>
          <button className="buttons-styles">2</button>
          <button className="buttons-styles">3</button>
          <button className="buttons-styles">+</button>
          <button className="buttons-styles">0</button>
          <button className="buttons-styles">.</button>
          <button className="equal-button buttons-styles">=</button>
        </div>
      </div>
    </div>
  );
};
