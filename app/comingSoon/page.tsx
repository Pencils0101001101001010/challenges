import "./style.css";
import { Gloria_Hallelujah } from "next/font/google";

const gloriaHallelujah = Gloria_Hallelujah({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function page() {
  return (
    <div className="cmgSoonContainer">
      <div className="comingSoonBox">
        <div className="mainHeaderTitle">Circus LaSpoon</div>
        <div className="underTitle">
          Nov 2 2026 <br /> Coming to town...
        </div>
      </div>
    </div>
  );
}

export default page;
