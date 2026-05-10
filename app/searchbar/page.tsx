import React from "react";
import SearchBar from "../components/(SearchBar)/SearchBar";

export const metadata = {
  title: "Simple search bar",
  description: "Dont search the wrong things ",
};

function page() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

export default page;
