import "./style.css";
import calendarImage from "../../../assets/img/calanedarPic.jpg";
import Image from "next/image";

function DatePicker() {
  return (
    <div className="calendarContainer">
      <div className="clndGrid">
        <div className="picContainer">
          <h1 className="theHeader">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left"
              viewBox="0 0 16 16"
            >
              <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
            </svg>
            July
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
            </svg>
          </h1>
        </div>
        <div className="gridOfCal">
          <span className="dateStl">Sun</span>
          <span className="dateStl">Mon</span>
          <span className="dateStl">Tue</span>
          <span className="dateStl">Wed</span>
          <span className="dateStl">Thu</span>
          <span className="dateStl">Fri</span>
          <span className="dateStl">Sat</span>
          <span className="otherDayTxtStl">26</span>
          <span className="otherDayTxtStl">27</span>
          <span className="otherDayTxtStl">28</span>
          <span className="otherDayTxtStl">29</span>
          <span className="otherDayTxtStl">30</span>
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <span>05</span>
          <span>06</span>
          <span>07</span>
          <span>08</span>
          <span>09</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span className="activeDay">23</span>
          <span className="activeDay">24</span>
          <span className="activeDay">25</span>
          <span className="activeDay">26</span>
          <span className="activeDay">27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span>31</span>
          <span className="otherDayTxtStl">01</span>
          <span className="otherDayTxtStl">02</span>
          <span className="otherDayTxtStl">03</span>
          <span className="otherDayTxtStl">04</span>
          <span className="otherDayTxtStl">05</span>
          <span className="otherDayTxtStl">06</span>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
