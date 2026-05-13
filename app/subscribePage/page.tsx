"use client";
import Image from "next/image";
import "./style.css";
import mars1 from "../../assets/img/mars1.jpg";
import mars4 from "../../assets/img/mars4.jpg";
import mars3 from "../../assets/img/mars3.jpg";
import { useEffect } from "react";

function page() {
  const sounds = ["/audio/fart.mp3", "/audio/horse.mp3", "/audio/wow.mp3"];

  const playSound = (index: number) => {
    const audio = new Audio(sounds[index]);
    audio.play().catch((err) => alert("Audio blocked by browser."));
  };

  // useEffect(() => {
  //   let numButtons = document.querySelectorAll(".bttonStyle").length;

  //   for (let i = 0; i < numButtons; ++i) {
  //     document
  //       .querySelectorAll(".bttonStyle")
  //       [i].addEventListener("click", function () {
  //         if (i === 0) {
  //           let soundOne = new Audio("/audio/fart.mp3");
  //           soundOne.play();
  //         } else if (i === 1) {
  //           let soundTwo = new Audio("/audio/horse.mp3");
  //           soundTwo.play();
  //         } else if (i === 2) {
  //           let soundThree = new Audio("/audio/wow.mp3");
  //           soundThree.play();
  //         }
  //       });
  //   }
  // }, []);

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
          <button onClick={() => playSound(0)} className="bttonStyle">
            Subscribe
          </button>
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
          <button onClick={() => playSound(1)} className="bttonStyle">
            Subscribe
          </button>
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
          <button onClick={() => playSound(2)} className="bttonStyle">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
