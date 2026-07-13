import "./badge-style.css";

export default function page() {
  return (
    <div className="badges-pg-stl">
      <h1>Badges: </h1>
      <div className="badge-page-style">
        <button className="button-3" role="button">
          <span className="text">Salmon</span>
        </button>
        <button className="button-4" role="button">
          <span className="text">Viper</span>
        </button>
        <button className="button-5" role="button">
          <span className="text">Shark</span>
        </button>
      </div>
    </div>
  );
}
