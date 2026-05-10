import React from "react";
import Receipt from "../components/(receipt)/Receipt";

export const metadata = {
  title: "Receipt",
  description: "Thank you for your purchase",
};

function page() {
  return (
    <div>
      <Receipt />
    </div>
  );
}

export default page;
