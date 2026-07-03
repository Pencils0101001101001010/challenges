import "./style.css";

const ItineraryComponent = () => {
  return (
    <div className="itinerary-container">
      <div className="itinerary-page-layout">
        {/* Navbar */}
        <section className="itinerary-nav">
          <span>TODO</span>
          <div>New</div>
          <div>Upcoming</div>
          <div>History</div>
          <span className="user-profile-avatar-itinerary"></span>
        </section>
        {/* Body */}
        <section className="itinerary-body-container">
          <div className="map-image-itinerary"></div>
          <div className="itinerary-detail-body">
            <h1 className="">Cape Town </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </div>
          <div className="the-timeline-body">
            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>09:00 AM</h3>
                  <p>Table Mountain Cableway</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>01:00 PM</h3>
                  <p>Lunch at V&A Waterfront</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>04:00 PM</h3>
                  <p>Robben Island Tour</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>06:00 PM</h3>
                  <p>Cocktails @ Blue Peter</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>08:00 PM</h3>
                  <p>Dinner at Clay Cafe</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ItineraryComponent;
