import "./styles.css";

const BackgroundPattern = () => {
  return (
    <div className="bg-pattern-container">
      <span className="header-font-style">Background Patterns</span>
      <div className="grid-body-patterns">
        <div className="stripe-background"></div>
        <div className="cross-pattern"></div>
        <div className="wave-pattern"></div>
        <div className="zig-zag-pattern"></div>
      </div>

      {/* <div className="my-test-pattern"></div> */}
    </div>
  );
};

export default BackgroundPattern;
