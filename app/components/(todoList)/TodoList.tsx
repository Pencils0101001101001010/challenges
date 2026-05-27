"use client";
import "./todoList.css";

const TodoList = () => {
  return (
    <div className="todoContainer">
      <section className="boxContainer">
        <div className="boxContentGrid">
          <div className="hdrSection">
            <h1>Tasks</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              fill="currentColor"
              className="bi bi-patch-plus"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"
              />
              <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
            </svg>
          </div>
          <div className="datesSections text-center">
            <div className="dayOfWeekTitle ">WEEKLY TODOS</div>
            <div className="dOfW">Mon. 25</div>
            <div className="dOfW">
              Tue. <br />
              26
            </div>
            <div className="dOfW">Wed. 27</div>
            <div className="dOfWActive">Thu. 28</div>
            <div className="dOfW">
              Fri.
              <br /> 29
            </div>
            <div className="dOfW">
              Sat.
              <br /> 30
            </div>
            <div className="dOfW">Sun. 31</div>
          </div>
          <div className="taskListItem">
            <div className="chkedButton">
              {" "}
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input id="check-5" type="checkbox" />
                  <label htmlFor="check-5"></label>
                </div>
              </div>
            </div>
            <div className="itemTime">Today 10:00AM</div>
            <div className="itemTitle">Call Jack</div>
            <div className="itemDescription">Ask about the new system</div>
          </div>
          <div className="taskListItem">
            <div className="chkedButton">
              {" "}
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input id="check-5" type="checkbox" />
                  <label htmlFor="check-5"></label>
                </div>
              </div>
            </div>
            <div className="itemTime">Today 9:00AM</div>
            <div className="itemTitle">Commit changes</div>
            <div className="itemDescription">make final tweaks on dailyUI</div>
          </div>
          <div className="taskListItem">
            <div className="chkedButton">
              {" "}
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input id="check-6" type="checkbox" />
                  <label htmlFor="check-6"></label>
                </div>
              </div>
            </div>
            <div className="itemTime">Today 8:00AM</div>
            <div className="itemTitle">Work on stream</div>
            <div className="itemDescription">Implement child processes</div>
          </div>
          <div className="taskListItem">
            <div className="chkedButton">
              {" "}
              <div className="checkbox-wrapper-5">
                <div className="check">
                  <input id="check-7" type="checkbox" />
                  <label htmlFor="check-7"></label>
                </div>
              </div>
            </div>
            <div className="itemTime">Fri 29 17:00PM</div>
            <div className="itemTitle">Get dog food.</div>
            <div className="itemDescription">
              Special on dog food at absolute pets
            </div>
          </div>
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
            <div className="itemTime">Fri 29 17:00PM</div>
            <div className="itemTitle">Get dog food.</div>
            <div className="itemDescription">
              Special on dog food at absolute pets
            </div>
          </div>
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
            <div className="itemTime">Fri 29 17:00PM</div>
            <div className="itemTitle">Get dog food.</div>
            <div className="itemDescription">
              Special on dog food at absolute pets
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TodoList;
