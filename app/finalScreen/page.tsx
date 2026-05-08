import Link from "next/link";
import "./style.css";

function page() {
  return (
    <div className="mainContainer">
      <h1 className="heading">We're rooting for you.</h1>
      <p className="heading">Your green thumb starts here.</p>
      <Link href="/" className="btnStyle">
        Lets Go
      </Link>
    </div>
  );
}

export default page;
