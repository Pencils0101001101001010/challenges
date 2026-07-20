import "./current-in-stock.css";

export default function page() {
  return (
    <div className="in-stock-container">
      <div className="badge">In Stock</div>
      <div className="current-stock-grid">
        <div className="left-side-grid">
          <div className="product-title">Fender Series Telecaster</div>
          <div>
            {" "}
            Polar White with a Maple fingerboard. Crafted in Mexico, this line
            serves as Fender's modern, gig-ready workhorse.
          </div>
          <ul className="">
            <li>
              <strong>Body Wood</strong>: Solid Alder with a glossy polyester
              protective finish.
            </li>
            <li>
              <strong>Neck Shape</strong>: Modern "C" profile built for fluid
              and fast-action playability.
            </li>
            <li>
              {" "}
              <strong>Fingerboard Radius</strong>: 9.5″ (241 mm) outfitted with
              22 medium jumbo frets.
            </li>
            <li>
              <strong>Scale Length</strong>: Standard 25.5″ (648 mm)
              configuration.
            </li>
            <li>
              <strong>Nut Material</strong>: 1.650″ (42 mm) synthetic bone for
              optimal vibration transfer.
            </li>
            <li>
              {" "}
              <strong>Neck Finish</strong>: Satin urethane backing for a smooth
              grip, paired with a gloss urethane headstock front
            </li>
          </ul>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
        <div className="product-image-container"></div>
      </div>
    </div>
  );
}
