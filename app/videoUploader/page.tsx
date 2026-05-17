import "./style.css";

function page() {
  return (
    <div className="mainContainer">
      <div className="leftGrid">
        <div>
          <div className="loading-container">
            {/* <!-- Label displaying video title and percentage --> */}
            <div className="loading-label">
              <span id="video-name">Uploading: video_file.mp4</span>
              <span id="progress-percent">25%</span>
            </div>

            <div className="progress-track">
              <div id="progress-fill" className="progress-fill"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="loading-container">
            {/* <!-- Label displaying video title and percentage --> */}
            <div className="loading-label">
              <span id="video-name">Uploading: video_file.mp4</span>
              <span id="progress-percent">60%</span>
            </div>

            <div className="progress-track">
              <div id="progress-fill" className="progress-fill2"></div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div className="loading-container">
            {/* <!-- Label displaying video title and percentage --> */}
            <div className="loading-label">
              <span id="video-name">Uploading: video_file.mp4</span>
              <span id="progress-percent">80%</span>
            </div>

            <div className="progress-track">
              <div id="progress-fill3" className="progress-fill3"></div>
            </div>
          </div>
        </div>
        <div className="loading-container">
          {/* <!-- Label displaying video title and percentage --> */}
          <div className="loading-label">
            <span id="video-name">Done: video_file.mp4</span>
            <span id="progress-percent">100%</span>
          </div>

          <div className="progress-track">
            <div id="progress-fill3" className="progress-fill4"></div>
          </div>
        </div>
      </div>
      <div className="rightGrid">
        <div className="uploudImageStl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            fill="currentColor"
            className="bi bi-cloud-upload"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"
            />
            <path
              fillRule="evenodd"
              d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"
            />
          </svg>
          <div className="textStyle">Drag and drop to upload or view</div>
          <button className="buttonStyles">Files</button>
        </div>

        <div>
          <button className="buttonStyles">Upload</button>
        </div>
      </div>
    </div>
  );
}

export default page;
