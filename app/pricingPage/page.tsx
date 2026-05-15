import Image from "next/image";
import "./styles.css";
import flower from "../../assets/img/plant3.jpg";
import plant1 from "../../assets/img/plant1.jpg";

import plant from "../../assets/img/plant4.jpg";

function page() {
  return (
    <div className="hoofHouer">
      <div className="cardContainer1">
        <div className="cardHeader">Please Stay Alive</div>
        <div className="cardPricingText">R149 / month</div>
        <div className="cardDecriptionText">
          1 easy-care mystery plant monthly
        </div>
        <div className="cardDecriptionText">Digital watering reminders</div>
        <div className="cardDecriptionText">Zero judgment from our staff</div>
        <Image src={plant1} alt="pricing image" className="imageStyl" />
      </div>
      <div className="cardContainer2">
        <div className="cardHeader">Look What I Grew</div>
        <div className="cardPricingText">R299 / month</div>
        <div className="cardDecriptionText">
          1 trendy, medium-sized plant monthly
        </div>
        <div className="cardDecriptionText">Premium fertilizer drops</div>
        <div className="cardDecriptionText">10% off boutique pots</div>
        <Image src={flower} alt="pricing image" className="imageStyl" />
      </div>
      <div className="cardContainer3">
        <div className="cardHeader">The Proud Parent</div>
        <div className="cardPricingText">R549 / month</div>
        <div className="cardDecriptionText">1 large plant monthly</div>
        <div className="cardDecriptionText">Free repotting services</div>
        <div className="cardDecriptionText">VIP access to rare imports</div>
        <Image src={plant} alt="pricing image" className="imageStyl" />
      </div>
    </div>
  );
}

export default page;
