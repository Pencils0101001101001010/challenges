import Link from "next/link";
import "./style.css";

export const metadata = {
  title: "Final Page",
  description: "Almost done",
};

function page() {
  return (
    <div className="mainContainer text-center">
      <h1 className="heading">We're rooting for you.</h1>
      <p className="heading">Your green thumb starts here.</p>
      <Link href="/" className="btnStyle">
        Lets Grow
      </Link>
    </div>
  );
}

export default page;
