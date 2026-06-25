import "./styles.css";

const Schedule = () => {
  return (
    <div className="schedule-container">
      <div className="sch-grid-box">
        <span className="schedule-header-section text-center">
          <h1>May</h1>{" "}
        </span>
        <span className="map-key-section">
          <p className="map-key-hold">Active</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
          <p className="map-key-done">Done</p>
        </span>
        <div className="taskListItem">
          <div className="chkedButton">
            {" "}
            <div className="checkbox-wrapper-5">
              <div className="check">
                <input id="check-8" type="checkbox" />
                <label htmlFor="check-8"></label>
              </div>
            </div>
          </div>
          <div className="itemTime">Fri 29 12:00PM</div>
          <div className="itemTitle">Teams meeting</div>
          <div className="itemDescription">New project starting.</div>
        </div>
        <div className="taskListItem">
          <div className="chkedButton">
            {" "}
            <div className="checkbox-wrapper-5">
              <div className="check">
                <input id="check-9" type="checkbox" />
                <label htmlFor="check-9"></label>
              </div>
            </div>
          </div>
          <div className="itemTime">MON 1 13:00PM</div>
          <div className="itemTitle">NASA Pitch</div>
          <div className="itemDescription">New project starting.</div>
        </div>{" "}
        <div className="taskListItem">
          <div className="chkedButton">
            {" "}
            <div className="checkbox-wrapper-5">
              <div className="check">
                <input id="check-10" type="checkbox" />
                <label htmlFor="check-10"></label>
              </div>
            </div>
          </div>
          <div className="itemTime">Wed 3 12:00PM</div>
          <div className="itemTitle">Coffee with mom</div>
          <div className="itemDescription">Get coffee at M&B</div>
        </div>{" "}
        <div className="taskListItem">
          <div className="chkedButton">
            {" "}
            <div className="checkbox-wrapper-5">
              <div className="check">
                <input id="check-11" type="checkbox" />
                <label htmlFor="check-11"></label>
              </div>
            </div>
          </div>
          <div className="itemTime">Thu 4 8am</div>
          <div className="itemTitle">Meeting at Joes</div>
          <div className="itemDescription">New project starting.</div>
        </div>
        <div className="taskListItem">
          <div className="chkedButton">
            {" "}
            <div className="checkbox-wrapper-5">
              <div className="check">
                <input id="check-12" type="checkbox" />
                <label htmlFor="check-12"></label>
              </div>
            </div>
          </div>
          <div className="itemTime">Thu 4 8am</div>
          <div className="itemTitle">Meeting at Joes</div>
          <div className="itemDescription">New project starting.</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
