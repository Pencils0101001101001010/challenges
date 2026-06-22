import Image from "next/image";
import "./styles.css";
import user1 from "../../../assets/img/user1.jpg";

const BookingNavbar = () => {
  return (
    <nav className="navbar-style-booking">
      <span>KRY N KOOI</span>
      <input
        type="text"
        placeholder="SEARCH..."
        className="nav-search-bar-bp"
      />
      <span className="userSectionBooking">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>

        <Image src={user1} alt="user" className="booking-image" />
      </span>
    </nav>
  );
};

export default BookingNavbar;
