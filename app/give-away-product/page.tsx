"use client";
import "./give-away.css";

export default function page() {
  return (
    <div className="give-away-page-container">
      <div className="give-away-container">
        {/* Left Side: Text and Form Content */}
        <div className="give-away-content">
          <div className="give-away-title">GIVEAWAY!</div>

          <div className="give-away-headline">
            Win the Custom Badass '78 Distortion Pedal
          </div>

          {/* <p className="give-away-description">
            Ready to take your tone to the next level? We are giving away this
            iconic, hot-rodded distortion pedal to one lucky rockstar.
          </p> */}

          <div className="give-away-steps">
            <h3>How to Enter:</h3>
            <ul>
              <li>Subscribe to our mailing list below.</li>
              <li>Confirm your subscription via email.</li>
              <li>Winner will be announced next Friday!</li>
            </ul>
          </div>

          {/* Form Section */}
          <form className="give-away-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="give-away-input"
              required
            />
            <button type="submit" className="give-away-button">
              Enter to Win
            </button>
          </form>

          <div className="give-away-footer">
            <span className="timer">Time is running out!</span>
            <span className="privacy"> No spam. Unsubscribe anytime.</span>
          </div>
        </div>

        {/* Right Side: Pedal Image */}
        <div className="section-give-away-image"></div>
      </div>
    </div>
  );
}
