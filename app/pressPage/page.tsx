import "./styles.css";

export default function page() {
  return (
    <div className="press-page-container">
      <span className="page-title">NEWS & PRESS</span>
      <div className="press-grid">
        <div className="left-top-of-grid">
          <span className="first-letter">W</span>
          <span className="rest-of-first-word">
            hile our engineering team works tirelessly to build next-generation
            software,
            <br /> the real unsung hero of our operations is the office coffee
            machine, which successfully processes an average of 427 espresso
            shots per week. In fact,
            <br /> a internal data audit recently revealed a direct, undeniable
            correlation between our highest-velocity code deployments and the
            exact moments the local bakery delivers a fresh batch of chocolate
            croissants. <br />
            We take our technology very seriously, but we take our
            snack-to-productivity ratios even more seriously.
          </span>
        </div>

        <div className="info-section-of-grid"> </div>
      </div>
    </div>
  );
}
