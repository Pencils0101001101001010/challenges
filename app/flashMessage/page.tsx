import FlashMessages from "../components/(flashMessage)/FlashMessages";
import "../styles/flashMessages.css";

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
