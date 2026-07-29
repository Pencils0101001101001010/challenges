import { Cookie } from "next/font/google";
import "../styles/landingPage.css";

const cookie = Cookie({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export const LandingPage = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <div className="center-hero row p-5">
        <div className="col-12">
          <h1 className={`${cookie.className} hero-title  `}>
            Welcome to daily UI archives.
          </h1>

          <p className="description-hero">
            The following site is mostly static
          </p>
        </div>
        <div className="footer-section">copyright © {date}</div>
      </div>
    </div>
  );
};
