import Link from "next/link";
import "../../styles/musicPlayer.css";
import Image from "next/image";
import plant from "../../../assets/img/plant1.jpg";
import soundWaves from "../../../assets/img/soundWaves.png";
import heroImage from "../../../assets/img/hero-image1.jpg";
import heroImage2 from "../../../assets/img/hero-img2.jpg";
import HeroImage3 from "../../../assets/img/hero-img3.jpg";

const MusicPlayerLayout = () => {
  return (
    <div className="screenLayout">
      <div className="grid-Layout text-white">
        <div className="leftGridSidebar ">
          <div className="logo text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-boombox"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
              <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M1 3v3h14V3zm14 4H1v7h14z" />
            </svg>
          </div>
          <div className="itemsTopSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-vignette icon"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
              <path d="M8.5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.683-6.281a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m-3.5 6.062a.5.5 0 1 1-.866-.5.5.5 0 0 1 .866.5m4.598-4.598a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866m-6.062 3.5a.5.5 0 1 1-.5-.866.5.5 0 0 1 .5.866M11.5 8.5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-7 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m6.281 1.683a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m-6.062-3.5a.5.5 0 1 1 .5-.866.5.5 0 0 1-.5.866m4.598 4.598a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5m-3.5-6.062a.5.5 0 1 1 .866-.5.5.5 0 0 1-.866.5" />
            </svg>
            Playing
          </div>
          <div className="itemsTopSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-search-heart icon"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
              <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11" />
            </svg>
            Explore
          </div>
          <div className="itemsTopSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-collection icon"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
            </svg>
            Libary
          </div>
          <div className="itemsTopSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-music-note-list icon"
              viewBox="0 0 16 16"
            >
              <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
              <path fillRule="evenodd" d="M12 3v10h-1V3z" />
              <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
              <path
                fillRule="evenodd"
                d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"
              />
            </svg>
            Playlists
          </div>
          <div className="itemsTopSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-heart icon"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
            Favorites
          </div>
          <div className="bottomLeftItems">
            <h6>Playlist</h6>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={heroImage2}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={HeroImage3}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={heroImage}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={HeroImage3}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
            <div className="leftSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={plant}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>
                M.W.S <br /> This is how I fight my battles
              </span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="musicScreen">
            <div className="pt-5 text-center">
              <button>Song</button>
              <button>Lyrics</button>
            </div>

            <div className="musicScreenHeader text-start">
              <h1>Micheal Scott</h1>
              <h6>Best Boss</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                fill="currentColor"
                className="bi bi-suit-heart-fill hart"
                viewBox="0 0 16 16"
              >
                <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
              </svg>
            </div>

            <div className="text-center ">
              <input
                min={0}
                max={100}
                className="musicPlayerWaves"
                type="range"
              ></input>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  fill="currentColor"
                  className="bi bi-rewind p-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.196 8 15 4.633v6.734zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" />
                  <path d="M1.196 8 7 4.633v6.734zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  fill="currentColor"
                  className="bi bi-pause p-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  fill="currentColor"
                  className="bi bi-fast-forward p-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.804 8 1 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                  <path d="M14.804 8 9 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="rightGridSidebar text-start">
          <div className="bottomRighItems">
            <h6 className="upNextTitle">Up Next:</h6>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={heroImage}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={HeroImage3}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={heroImage2}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={plant}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={plant}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
            <div className="RightSidebarTitleAndImages">
              <span>
                <Image
                  alt="Album cover"
                  src={soundWaves}
                  height={40}
                  width={40}
                  className="rightImages"
                />
              </span>
              <span>This will be played next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayerLayout;
