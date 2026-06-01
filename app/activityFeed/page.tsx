import Image from "next/image";
import user1 from "../../assets/img/user1.jpg";
import user2 from "../../assets/img/desktopBg.png";
import user3 from "../../assets/img/user6.jpg";
import user4 from "../../assets/img/user4.jpg";
import user5 from "../../assets/img/user5.jpg";
import user6 from "../../assets/img/user7.jpg";
import user7 from "../../assets/img/profilePicture1.jpg";

import "./styles.css";

export default function page() {
  return (
    <div className="activityFeedGrid">
      <span className="focusPointContainer">
        {/* details at the bottom of image */}
        <div className="detailsSection">
          <span className="focusPointTileStyles">
            Top 10 hot holiday destinations.
          </span>
          <span>#capeTown #holiday #trending</span>
        </div>
        {/* user name & image */}
        <div className="userDetailsSec">
          <Image src={user1} alt="user" className="userImgStyles" />
          Jess the traveler
        </div>
      </span>
      <span className="containerNextToFocusPoint">
        {/* details at the bottom of image */}
        <div className="detailsSection">
          <span className="focusPointTileStyles">
            Pick it up when you see it.
          </span>
          <span>
            75 million to 199 million tons of plastic leaks in the ocean per
            year
          </span>
        </div>
        {/* user name & image */}
        <div className="userDetailsSec">
          <Image src={user2} alt="user" className="userImgStyles" />
          Greener Planet
        </div>
      </span>
      <span className="smallerSectionsBelowMain1">
        {/* details at the bottom of image */}
        <div className="detailsSection">
          <span className="smallerTileStyles">New and updated menu.</span>
        </div>
        {/* user name & image */}
        <div className="userDetailsSecForSmallerCards">
          <Image
            src={user3}
            alt="user"
            className="userImgStylesForSmallerContainers"
          />
          The Restaurant
        </div>
      </span>
      <span className="smallerSectionsBelowMain2">
        {/* details at the bottom of image */}
        <div className="detailsSection">
          <span className="smallerTileStyles">Whale season</span>
        </div>
        {/* user name & image */}
        <div className="userDetailsSecForSmallerCards">
          <Image
            src={user4}
            alt="user"
            className="userImgStylesForSmallerContainers"
          />
          Whale Spotting
        </div>
      </span>
      <span className="smallerSectionsBelowMain3">
        {/* details at the bottom of image */}
        <div className="detailsSection">
          <span className="smallerTileStyles">Maps crashed?</span>
        </div>
        {/* user name & image */}
        <div className="userDetailsSecForSmallerCards">
          <Image
            src={user5}
            alt="user"
            className="userImgStylesForSmallerContainers"
          />
          Info @Matt
        </div>
      </span>
      <span className="smallerSectionsBelowMain4">
        {/* details at the bottom of image */}
        <div className="detailsSection">
          <span className="smallerTileStyles">Around the moon and back</span>
        </div>
        {/* user name & image */}
        <div className="userDetailsSecForSmallerCards">
          <Image
            src={user6}
            alt="user"
            className="userImgStylesForSmallerContainers"
          />
          Infinity
        </div>
      </span>
      <span className="smallerSectionsBelowMain5">
        {/* details at the bottom of image */}
        <div className="detailsSection">
          <span className="smallerTileStyles">Best burger spot in town</span>
        </div>
        {/* user name & image */}
        <div className="userDetailsSecForSmallerCards">
          <Image
            src={user7}
            alt="user"
            className="userImgStylesForSmallerContainers"
          />
          Burger Joint
        </div>
      </span>
    </div>
  );
}
