import FlashMessages from "../components/(flashMessage)/FlashMessages";
import "../styles/flashMessages.css";

export const metadata = {
  title: "Pop up messages",
  description: "Flash messages on the top of screens",
};

function page() {
  return (
    <div className="perantContainer">
      <section>
        <FlashMessages />
      </section>
    </div>
  );
}

export default page;
