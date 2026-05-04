import Image from "next/image";
import "./styles.css";
import user1 from "../../../assets/img/user1.jpg";
import user2 from "../../../assets/img/user2.jpg";
import user3 from "../../../assets/img/user3.jpg";
import user4 from "../../../assets/img/user4.jpg";
import user5 from "../../../assets/img/user5.jpg";
import user6 from "../../../assets/img/user6.jpg";
import user7 from "../../../assets/img/user7.jpg";
import profilePicture1 from "../../../assets/img/profilePicture1.jpg";

const users = [
  {
    id: 1,
    name: "Jessy Jones",
    score: 865,
    img: user1,
    description: "Current streek: 3 weeks",
  },
  {
    id: 2,
    name: "Mac Cheese",
    score: 855,
    img: user2,
    description: "Current streek: 0",
  },
  {
    id: 3,
    name: "Boa Blan",
    score: 799,
    img: user3,
    description: "Current streek: 0",
  },
  {
    id: 4,
    name: "Clappy Harry",
    score: 724,
    img: user4,
    description: "Current streek: 0",
  },
  {
    id: 5,
    name: "Justice Biever",
    score: 640,
    img: user5,
    description: "Current streek: 0",
  },
  {
    id: 6,
    name: "Breezy Badger",
    score: 600,
    img: user6,
    description: "Current streek: 0",
  },
  {
    id: 7,
    name: "Meow Meow",
    score: 589,
    img: user7,
    description: "Current streek: 0",
  },
  {
    id: 8,
    name: "Hairy Potter",
    score: 550,
    img: profilePicture1,
    description: "Current streek: 0",
  },
  {
    id: 9,
    name: "Hairy Potter",
    score: 550,
    img: profilePicture1,
    description: "Current streek: 0",
  },
  {
    id: 10,
    name: "Hairy Potter",
    score: 550,
    img: profilePicture1,
    description: "Current streek: 0",
  },
  {
    id: 11,
    name: "Hairy Potter",
    score: 550,
    img: profilePicture1,
    description: "Current streek: 0",
  },
  {
    id: 12,
    name: "Hairy Potter",
    score: 550,
    img: profilePicture1,
    description: "Current streek: 0",
  },
];

const LeaderShipBoard = () => {
  return (
    <div className="mainContainer">
      <div className="parentGrid">
        <div className="leftGridContainer">
          {users.map((user) => (
            <span key={user.id}>
              <Image
                src={user.img}
                alt={user.name}
                height={100}
                width={100}
                className="imageStyle"
                style={{ objectFit: "cover" }}
              />{" "}
              <h2>
                {user.id}. {user.name}
              </h2>
              <p>Score: {user.score}</p>
              <p>{user.description}</p>
            </span>
          ))}
        </div>
        <div className="rightGridContainer">
          <div className="prizeCard">
            <h1>Pack your bags! ✈️</h1>
            <p>
              The Top 3 on this leaderboard are automatically entered to win a
              <strong> Luxury Trip to Cape Town</strong>.
            </p>
            <div className="prizeDetails">
              <span>📍 5-Night Stay</span>
              <span>🎟️ Table Mountain Tour</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderShipBoard;
