import "./style.css";

const AppDownloadScreen = () => {
  return (
    <div className="download-screen-container">
      <div className="dwl-sc-grid">
        <div className="dl-box-header">
          {" "}
          Born <span>Racer</span>
        </div>

        <div>
          <p>
            From rookie to absolute legend, customize your dream supercar and
            prove you have racing in your DNA.
          </p>
        </div>
      </div>
      <div className="buttons-section">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            fill="currentColor"
            className="bi bi-google-play"
            viewBox="0 0 16 16"
          >
            <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27" />
          </svg>{" "}
          <span> App Store</span>
        </span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            fill="currentColor"
            className="bi bi-steam"
            viewBox="0 0 16 16"
          >
            <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z" />
            <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048" />
          </svg>
          <span>Steam</span>
        </span>
      </div>
    </div>
  );
};

export default AppDownloadScreen;
