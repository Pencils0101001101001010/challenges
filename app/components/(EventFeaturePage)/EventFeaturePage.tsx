import "./styles.css";

export default function EventFeaturePage() {
  return (
    <div className="events-page-main-body">
      <div className="event-box">
        <div className="left-side-box-section">
          <div className="left-grid-img1"></div>
          <div className="left-grid-img2"></div>
          <div className="left-grid-img3"></div>
          <div className="left-grid-img4"></div>
        </div>
        <div className="right-side-box">
          <div className="right-side-grid-box">
            <div className="right-side-logo"></div>
            <div className="event-header text-center">
              An evening of elegance under the stars.
            </div>
            <p className="event-details text-center">
              Join us for a premium outdoor experience featuring curated live
              music, gourmet seasonal pairings, and an ambient atmosphere like
              no other. Escape the indoors and immerse yourself in nature's
              ballroom.
            </p>

            <div className="event-info-meta text-center">
              <p>
                📅 <strong>Date:</strong> Saturday, September 12, 2026
              </p>
              <p>
                ⏰ <strong>Time:</strong> 18:00 – 22:30
              </p>
              <p>
                📍 <strong>Location:</strong> The Secret Gardens, Cape Town
              </p>
            </div>

            <button className="cta-button">Reserve Your Seat</button>
          </div>
        </div>
      </div>
    </div>
  );
}
