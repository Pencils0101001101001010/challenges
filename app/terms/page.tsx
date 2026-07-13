import "./style.css";

export default function page() {
  return (
    <div className="page-cnt-terms">
      <div className="box-container">
        <div>This site uses cookies </div>
        <div className="options-select">
          <div className="agree-to-all">
            <input type="radio" /> Agree to all
          </div>
          <div className="reject-all">
            <input type="radio" /> Reject all
          </div>
        </div>
      </div>
    </div>
  );
}
