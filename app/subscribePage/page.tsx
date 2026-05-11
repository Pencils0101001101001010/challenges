import Image from "next/image";
import "./style.css";
import mars1 from "../../assets/img/mars1.jpg";
import mars4 from "../../assets/img/mars4.jpg";
import mars3 from "../../assets/img/mars3.jpg";

function page() {
  return (
    <div className="mainContainer">
      <p className="headerText">Three paths to the Red Planet.</p>
      <div className="CardGrids">
        <div className="cardStyle">
          <Image src={mars1} alt="image" className="imageStyle" />
          <h3 className="cardTextHeader text-center">Pioneer</h3>
          <p className="cardText">$250,000</p>
          <p className="cardText">Secure your future.</p>
          <ul className="listStyle">
            <li>Standard bunk cabin</li>
            <li>Shared oxygen</li>
            <li>3700 kcal daily ration</li>
            <li>Basic hydroponic access</li>
            <li>10kg personal cargo</li>
          </ul>
          <button className="bttonStyle">Take Flight</button>
        </div>
        <div className="cardStyle">
          <Image src={mars4} alt="image" className="imageStyle" />
          <h3 className="cardTextHeader text-center">Commander</h3>
          <p className="cardText">$750,000</p>
          <p className="cardText">Lead the new world.</p>
          <ul className="listStyle">
            <li>Private window suite</li>
            <li>Priority landing zone</li>
            <li>Unrestricted comms bandwidth</li>
            <li>Real-meat protein supplements</li>
            <li>Exoskeleton usage rights</li>
            <li>Includes 1 Rover rental</li>
          </ul>
          <button className="bttonStyle">Claim Command</button>
        </div>
        <div className="cardStyle">
          <Image src={mars3} alt="image" className="imageStyle" />
          <h3 className="cardTextHeader text-center">Founder</h3>
          <p className="cardText">$2.5M</p>
          <p className="cardText">Ultimate Martian luxury.</p>
          <ul className="listStyle">
            <li>Observation deck penthouse</li>
            <li>Unlimited water allowance</li>
            <li>Private terraforming plot</li>
            <li>Medical bay priority</li>
            <li>Quantum-link video calls</li>
            <li>Governing Council voting seat</li>
          </ul>
          <button className="bttonStyle">Infinity & Beyond</button>
        </div>
      </div>
    </div>
  );
}

export default page;
