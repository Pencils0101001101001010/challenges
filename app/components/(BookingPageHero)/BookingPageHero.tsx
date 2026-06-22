import React from "react";

const BookingPageHero = () => {
  return (
    <div className="booking-page-main-container">
      <h1 className="view-on-desktop">View on desktop</h1>
      <div className="booking-page-hero-body">
        <div className="bp-hero-image-section">
          <label>
            Where are you going?
            <input
              type="text"
              placeholder="Location"
              className="b-page-input-styles"
            />
          </label>
          <label>
            Check in
            <input
              type="text"
              placeholder="Add Date"
              className="b-page-input-styles"
            />
          </label>
          <label>
            Check out
            <input
              type="text"
              placeholder="Add Date"
              className="b-page-input-styles"
            />
          </label>
          <label>
            Number od guests
            <input
              type="text"
              placeholder="2 Adult"
              className="b-page-input-styles"
            />
          </label>
          <button className="bp-btn">SEARCH</button>
        </div>
        <div className="page-info-section">
          <div className="first-row-title">Home / Western-cape / Cape Town</div>
          <div className="bp-map-section">Map</div>
          <div className="first-bp-image"></div>
          <div className="detail-section-of-bnb">
            <h3>Collet Street Apartment</h3>
            <p className="text-end">R1999</p>
            <span>Self catering in Cape Town CBD.</span>
            <h4 className="text-end">R1500</h4>
            <div className="check-list">
              <ul>
                <li>Swimming Pool</li>
                <li>Free Secure Parking</li>
                <li>Wi-Fi</li>
              </ul>
            </div>
            <span className="text-end">(per night sleep 2)</span>
            <div></div>
            <div></div>
            <div className="badge-style">Free Cancellation</div>
            <button>View Details</button>
          </div>
          <div className="sort-menu">
            <div className="pensioners-section">
              Are you a pensioner?
              <span>
                <input type="radio" value="Recommended" />
                Yes show me pensioners prices
              </span>
            </div>
            <h4>Sort by</h4>
            <label>
              <input type="radio" value="Recommended" />
              Recommended
            </label>
            <label>
              <input type="radio" value="Recommended" />
              Lowest Price
            </label>
            <label>
              <input type="radio" value="Recommended" />
              Highest Price
            </label>
            <label>
              <input type="radio" value="Recommended" />
              Best Reviews
            </label>
          </div>
          <div className="first-bp-image2"></div>
          <div className="detail-section-of-bnb">
            <h3>Collet Street Apartment</h3>
            <p className="text-end">R1999</p>
            <span>Self catering in Cape Town CBD.</span>
            <h4 className="text-end">R1500</h4>
            <div className="check-list">
              <ul>
                <li>Swimming Pool</li>
                <li>Free Secure Parking</li>
                <li>Wi-Fi</li>
              </ul>
            </div>
            <span className="text-end">(per night sleep 2)</span>
            <div></div>
            <div></div>
            <div className="badge-style">Free Cancellation</div>
            <button>View Details</button>
          </div>{" "}
          <div className="first-bp-image3"></div>
          <div className="detail-section-of-bnb">
            <h3>Collet Street Apartment</h3>
            <p className="text-end">R1999</p>
            <span>Self catering in Cape Town CBD.</span>
            <h4 className="text-end">R1500</h4>
            <div className="check-list">
              <ul>
                <li>Swimming Pool</li>
                <li>Free Secure Parking</li>
                <li>Wi-Fi</li>
              </ul>
            </div>
            <span className="text-end">(per night sleep 2)</span>
            <div></div>
            <div></div>
            <div className="badge-style">Free Cancellation</div>
            <button>View Details</button>
          </div>{" "}
          <div className="first-bp-image4"></div>
          <div className="detail-section-of-bnb">
            <h3>Collet Street Apartment</h3>
            <p className="text-end">R1999</p>
            <span>Self catering in Cape Town CBD.</span>
            <h4 className="text-end">R1500</h4>
            <div className="check-list">
              <ul>
                <li>Swimming Pool</li>
                <li>Free Secure Parking</li>
                <li>Wi-Fi</li>
              </ul>
            </div>
            <span className="text-end">(per night sleep 2)</span>
            <div></div>
            <div></div>
            <div className="badge-style">Free Cancellation</div>
            <button>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPageHero;
