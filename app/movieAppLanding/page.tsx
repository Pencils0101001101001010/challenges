import MovieAppLadingPage from "../components/(movieAppLadingPage)/MovieAppLadingPage";
import "./style.css";

export const metadata = {
  title: "Movie App | Home",
  description: "Browse the latest movies and trending titles.",
};

function page() {
  return (
    <div className="bgColor">
      <MovieAppLadingPage />
    </div>
  );
}

export default page;
