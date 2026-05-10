import React from "react";
import Counter from "../components/(counter)/Counter";

export const metadata = {
  title: "Timer",
  description: "Set a timer",
};

export default function page() {
  return (
    <div>
      <Counter />
    </div>
  );
}
