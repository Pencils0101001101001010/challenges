"use client";

import { useState } from "react";
import "./style.css";
import Image from "next/image";
import plant from "../../../assets/img/plant.jpg";
import lounge from "../../../assets/img/lounge.jpg";
import kitchen from "../../../assets/img/kitchen.jpg";
import room1 from "../../../assets/img/room1.jpg";
import room2 from "../../../assets/img/room2.jpg";
import room3 from "../../../assets/img/room3.jpg";
import garage from "../../../assets/img/garage.jpg";

const HomeMonitorDash = () => {
  const [count, setCount] = useState(44);

  return (
    <div className="MainContainer">
      <>
        <div className="div3BodyFeature">
          <p> May 7 11:43 AM</p>

          <div className="FeatureBody">
            <span className="Fbody1">
              {" "}
              {/* ctrl+shift+U = underline g then press b0 and enter for the degree symbol */}
              <p className="degreeText">{count}°</p>
            </span>
            <button onClick={() => setCount(count + 1)} className="btnStyle">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                fill="currentColor"
                className="bi bi-thermometer-sun warm text-white"
                viewBox="0 0 16 16"
              >
                <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585A1.5 1.5 0 0 1 5 12.5" />
                <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m4.243 1.757a.5.5 0 0 1 0 .707l-.707.708a.5.5 0 1 1-.708-.708l.708-.707a.5.5 0 0 1 .707 0M8 5.5a.5.5 0 0 1 .5-.5 3 3 0 1 1 0 6 .5.5 0 0 1 0-1 2 2 0 0 0 0-4 .5.5 0 0 1-.5-.5M12.5 8a.5.5 0 0 1 .5-.5h1a.5.5 0 1 1 0 1h-1a.5.5 0 0 1-.5-.5m-1.172 2.828a.5.5 0 0 1 .708 0l.707.708a.5.5 0 0 1-.707.707l-.708-.707a.5.5 0 0 1 0-.708M8.5 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>

            <button onClick={() => setCount(count - 1)} className="btnStyle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                fill="currentColor"
                className="bi bi-thermometer-snow cold text-white"
                viewBox="0 0 16 16"
              >
                <path d="M5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585A1.5 1.5 0 0 1 5 12.5" />
                <path d="M1 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM3.5 1A1.5 1.5 0 0 0 2 2.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0L5 10.486V2.5A1.5 1.5 0 0 0 3.5 1m5 1a.5.5 0 0 1 .5.5v1.293l.646-.647a.5.5 0 0 1 .708.708L9 5.207v1.927l1.669-.963.495-1.85a.5.5 0 1 1 .966.26l-.237.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.884.237a.5.5 0 1 1-.26.966l-1.848-.495L9.5 8l1.669.963 1.849-.495a.5.5 0 1 1 .258.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.237.883a.5.5 0 1 1-.966.258L10.67 9.83 9 8.866v1.927l1.354 1.353a.5.5 0 0 1-.708.708L9 12.207V13.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5" />
              </svg>
            </button>
            <span className="ConsumptionTitle">
              {" "}
              <p>Power Consumption</p>
            </span>
            <span>Heater</span>
            <span>
              {" "}
              <p>1200KWH</p>
            </span>
            <span>
              <p>Fridge</p>
            </span>
            <span>
              {" "}
              <p>220KWH</p>
            </span>
            <span>
              <p>Lights</p>
            </span>
            <span>
              {" "}
              <p>120KWH</p>
            </span>
          </div>
        </div>
      </>
      <div className="div3Body">
        <p className="imgText">Camera 1 Lounge</p>
        <Image src={lounge} alt="plant" className="imgStyle" />
      </div>
      <div className="div3Body">
        <p className="imgText">Camera 2 Kitchen</p>
        <Image src={kitchen} alt="plant" className="imgStyle" />
      </div>{" "}
      <div className="div3Body">
        <p className="imgText">Camera 3 Room 1</p>
        <Image src={room1} alt="plant" className="imgStyle" />
      </div>{" "}
      <div className="div3Body">
        <p className="imgText">Camera 4 Room 2</p>
        <Image src={room2} alt="plant" className="imgStyle" />
      </div>{" "}
      <div className="div3Body">
        <p className="imgText">Camera 5 Room 3</p>
        <Image src={room3} alt="plant" className="imgStyle" />
      </div>{" "}
      <div className="div3Body">
        <p className="imgText">Camera 6 Garage</p>
        <Image src={garage} alt="plant" className="imgStyle" />
      </div>{" "}
      {/* Options */}
      <>
        <div className="div3Body">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              fill="currentColor"
              className="bi bi-lamp-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5.04.303A.5.5 0 0 1 5.5 0h5c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.363.687h-.002q-.225.044-.45.081a33 33 0 0 1-4.645.425V13.5a.5.5 0 1 1-1 0V8.495a33 33 0 0 1-4.645-.425q-.225-.036-.45-.08h-.003a.5.5 0 0 1-.362-.688l3-7Z"
              />
              <path d="M6.493 12.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.052.075l-.001.004-.004.01V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411" />
            </svg>
          </p>
          <p>Lounge Lamps</p>
          <p>#845784</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={() => {}}
            />
          </div>
        </div>{" "}
        <div className="div3Body">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              fill="currentColor"
              className="bi bi-lightbulb-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5" />
            </svg>
          </p>
          <p>Kitchen ligths</p>
          <p>#845782</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={() => {}}
            />
          </div>
        </div>{" "}
        <div className="div3Body">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              fill="currentColor"
              className="bi bi-tv"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
            </svg>
          </p>
          <p>Lounge TV</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={() => {}}
            />
          </div>
        </div>{" "}
        <div className="div3Body">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              fill="currentColor"
              className="bi bi-tv"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2" />
            </svg>
          </p>
          <p>Bar TV</p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onChange={() => {}}
            />
          </div>
        </div>{" "}
        <div className="div3Body">
          <p>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </p>

          <p>add</p>
        </div>{" "}
      </>
    </div>
  );
};

export default HomeMonitorDash;

//  <div className="div1">
//           <button
//             className="btn btn-primary"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasScrolling"
//             aria-controls="offcanvasScrolling"
//           >
//             Enable body scrolling
//           </button>

//           <div
//             className="offcanvas offcanvas-start"
//             data-bs-scroll="true"
//             data-bs-backdrop="false"
//             tabIndex={-1}
//             id="offcanvasScrolling"
//             aria-labelledby="offcanvasScrollingLabel"
//           >
//             <div className="offcanvas-header">
//               <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
//                 Offcanvas with body scrolling
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="offcanvas-body">
//               <p>
//                 Try scrolling the rest of the page to see this option in action.
//               </p>
//             </div>
//           </div>
