import Link from "next/link";
import "./style.css";

export const metadata = {
  title: "User profile | Home",
  description: "Confirm and edit your profile",
};

function page() {
  return (
    <div className="mainContainer text-center">
      <h1 className="heading">Your home just greener</h1>
      <p className="heading">Expert tips for happy plants.</p>
      <Link href="/finalScreen" className="btnStyle">
        next
      </Link>
    </div>
  );
}

export default page;
