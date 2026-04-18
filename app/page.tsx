import Image from "next/image";
import { LandingPage } from "./components/LandingPage";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <div className="landingpage-bg-img">
      <Navbar />
      <LandingPage />
    </div>
  );
}
