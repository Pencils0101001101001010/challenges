import { Cookie } from "next/font/google";
import "../styles/landingPage.css";
import plant1 from "../../assets/img/plant1.jpg";
import Image from "next/image";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const LandingPage = () => {
  return (
    <div>
      <div className="text-white center-hero row p-5">
        <div className="col-12">
          <h1 className={`${cookie.className} hero-title  `}>
            Your home, just a little greener.
          </h1>

          <p className="p-1">
            From our nursery to your doorstep. Warning: May cause a plant
            addiction.
          </p>
        </div>
      </div>
    </div>
  );
};
