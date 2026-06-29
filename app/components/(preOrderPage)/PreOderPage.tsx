import "./styles.css";

const PreOderPage = () => {
  return (
    <div className="p-order-page-container">
      <div className="pre-order-grid">
        <div className="pre-order-nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="currentColor"
            className="bi bi-play"
            viewBox="0 0 16 16"
          >
            <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z" />
          </svg>
          <span className="nav-options-order-page">
            {" "}
            <p>Products</p>
            <p>Categories</p>
            <p>Community</p>
            <p>What's New</p>
            <p>About</p>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="currentColor"
            className="bi bi-three-dots"
            viewBox="0 0 16 16"
          >
            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
          </svg>
        </div>
        <div className="pre-ord-image"> </div>
        <div className="pre-order-detail-section">
          <h1>Fender Player Telecaster</h1>
          <ul>
            <li>
              <strong>Body & Finish</strong>: Classic single-cutaway slab body
              finished in gloss Polar White.
            </li>
            <li>
              <strong>Neck & Fretboard</strong>: A satin-finished maple neck
              with a 22-fret maple fingerboard, matching dot inlays, and a
              "Modern C" profile.
            </li>
            <li>
              <strong>Pickups</strong>: Outfitted with two Player Series Alnico
              5 Single-Coil Telecaster pickups
            </li>
            <li>
              <strong>Hardware</strong>: Features a standard 3-way pickup
              selector blade switch, master volume, and master tone controls
              mounted to a chrome control plate. It uses a modern
              string-through-body bridge with six block steel saddles for
              precise intonation, rather than the vintage 3-barrel saddle setup.
            </li>
          </ul>
          Release:
          <div>
            <span>45h</span>
            <span>25m</span>
            <span>43s</span>
          </div>
          <button>Pre-Order</button>
        </div>
      </div>
    </div>
  );
};

export default PreOderPage;
