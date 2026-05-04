"use client";
import { useState } from "react";
import { UserContext } from "./CreateContext";
import Component2 from "./Component2";

export default function Component1() {
  const [user, setUser] = useState("Linus");

  /* Wrap child components in the Context Provider and supply the state value. */

  /* Wrapping the tree of components that need the state context */

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}
