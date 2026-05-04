"use client";
import React, { useContext } from "react";
import { UserContext } from "./CreateContext";

function Component3() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Component 3</h1>
      <h2>{`Hello ${user}`}</h2>
    </div>
  );
}

export default Component3;
