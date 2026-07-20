import "./product-tour.css";

export default function page() {
  return (
    <div className="product-tour-page-container">
      <div className="product-border">
        <div className="product-image">
          <h1 className="product-title">Fender Player Series Telecaster</h1>
        </div>
        <div className="cable-plug">
          ---------------------- 3-position blade pickup switch + master volume
          + tone control
        </div>
        <div className="pickups">
          Dual Player Series Alnico 5 single-coil Telecaster
          pickups---------------------
        </div>
        <div className="beck-shape">
          --------------------- Modern "C" profile built for fluid and
          fast-action playability
        </div>
        <div className="finger-board">
          9.5″ (241 mm) outfitted with 22 medium jumbo frets
          ----------------------
        </div>
        <div className="body-desc">
          Solid Alder with a glossy polyester protective finish
          ---------------------
        </div>
        <div className="head-guitar">
          ---------------- 6-in-line standard cast and sealed die-cast tuning
          keys
        </div>
      </div>
    </div>
  );
}
