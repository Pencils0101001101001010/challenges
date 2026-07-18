"use client";
import "./style.css";

export default function page() {
  const handleSound = () => {
    const audio = new Audio("/audio/fart.mp3");
    audio.play().catch((err) => alert("Audio blocked by browser."));
  };
  return (
    <div className="plant-shop-container">
      <div className="fqa-box-container">
        <div className="fqa-title-section">FQA</div>
        <div className="questions-section">
          <div className="q">Q: How often should I water my new plant?</div> A:
          There is no single schedule for watering. Check the top 2 inches of
          soil with your finger. If it feels completely dry, it is time to
          water. If it feels damp, wait a few days and check again.
        </div>
        <div className="questions-section">
          <div className="q">Q: Why are my plant's leaves turning yellow?</div>{" "}
          A: Yellow leaves usually mean the plant is getting too much water.
          Make sure your pot has a drainage hole and you let the soil dry out
          between waterings. Less often, it can mean the plant needs more
          sunlight or nutrients.
        </div>
        <div className="questions-section">
          <div className="q">Q: How do I know if my room has enough light?</div>{" "}
          A: Place your hand 12 inches above a piece of paper where your plant
          will sit. A sharp, clear shadow means high light. A blurry, soft
          shadow means medium light. No shadow means low light. Most houseplants
          love bright, indirect light where they can see the sky but not the
          direct sun.
        </div>
        <button onClick={handleSound}>Ask</button>
      </div>
    </div>
  );
}
