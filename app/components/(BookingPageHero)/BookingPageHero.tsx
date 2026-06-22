import React from "react";

const BookingPageHero = () => {
  return (
    <div className="booking-page-main-container">
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
          <div className="bp-map-section">Map</div>
          <div>reserve</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default BookingPageHero;
