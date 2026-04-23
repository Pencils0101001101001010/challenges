import React from "react";
import "./styles/not-found.css";
import Link from "next/link";

function notFound() {
  return (
    <div className="page-container">
      <div className="modal-bg text-center">
        <h1>Oops! Page not found.</h1>
        <p>
          Sorry this page does not exist.
          <br />
          Please try again.
        </p>
        <Link href="/">Go back home</Link>
      </div>
    </div>
  );
}

export default notFound;
