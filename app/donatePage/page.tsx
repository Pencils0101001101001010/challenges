import "./style.css";

function page() {
  return (
    <div className="donatePageContainer">
      <div className="imageSide"> </div>{" "}
      <div className="lftContainer">
        {" "}
        <span className="headerText">Cleaner oceans. Cleaner life.</span>
        <p className="text-center">
          Our oceans are drowning in plastic, but your support can turn the
          tide. Every donation directly funds our cleanup crews, deploys
          recovery technology, and removes harmful debris from marine
          ecosystems.
        </p>
        <h2>Where Your Money Goes:</h2>
        <ul>
          <li>Fuel & Fleet: Keeping our cleanup boats out on the water.</li>
          <li>
            Crew Gear: Providing safety equipment for our frontline volunteers.
          </li>
          <li>
            Waste Management: Ensuring collected plastic is sorted and recycled
            properly.
          </li>
        </ul>
        <div className="numbers">
          <span className="recievedAmount">
            DONATED
            <br /> R 13 000
          </span>

          <span className="goalAmount">
            GOAL
            <br /> R20 000
          </span>
        </div>
        <span>
          {" "}
          <div className="loading-container ">
            {/* <!-- Label displaying video title and percentage --> */}
            <div className="loading-label">
              <span id="video-name">R13 000</span>
              <span id="progress-percent">R20 000</span>
            </div>

            <div className="progress-track">
              <div id="progress-fill" className="progress-fill"></div>
            </div>
          </div>
        </span>
        <div className="numbers">
          {" "}
          <button className="leftDonateButton1">Donate</button>
          <button className="donateButton">More info</button>
        </div>
      </div>
      <div className="roundImageRight"></div>
      <div className="roundImageRight1"></div>
      <div className="roundImageRight2"></div>
    </div>
  );
}

export default page;
