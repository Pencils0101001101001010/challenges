import "./styles.css";
import { Rouge_Script } from "next/font/google";

// Configure the font
const rougeScript = Rouge_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rouge-script", // Optional: for Tailwind or CSS variables
});

function page() {
  return (
    <div className="promoPagecontainer">
      <div className="proBox">
        <div className={`${rougeScript.className}`}>
          <h1 className="prmtitle">Buy one get two</h1>
          <hr />
        </div>
        <div className="pBodyText text-center">
          <p>20 Nov - 30 Nov</p>
          <hr />
          <p>
            Show them how much you love them. Get more for less this holiday
            season.{" "}
          </p>
        </div>
        <span className={`${rougeScript.className} shopName`}>
          Africa-Express
        </span>
      </div>
    </div>
  );
}

export default page;
