"use client";
import "../../styles/UserProfile.css";

const UserProfile = () => {
  let handleclink = () => {
    alert("Curious CAT! This is just ui, no logic has been added! ");
  };
  return (
    <div className="flex-box">
      <div className=" container perant-container">
        <div className="userSection text-center">
          <button onClick={handleclink} className="editButton btn btn-light">
            +
          </button>
          <div className="imgBg"></div>
          <div className="pt-5">
            <h1>Sue Weasley</h1>
          </div>
        </div>
        <div className="acountInfo">
          <div className="p-3 text-start">
            <h4>Acount Info</h4>
            <button className="editButton btn btn-light" onClick={handleclink}>
              +
            </button>
            <div className="pt-2 info">
              <p>Permanent</p>
              <p>sw@hogwards.co.za</p>
              <p>082 528 1549</p>
            </div>
          </div>
        </div>
        <div className="moreInfo">
          <div className="p-3 text-start">
            <h4>Address</h4>
            <button onClick={handleclink} className="editButton btn btn-light">
              +
            </button>
            <div className="pt-2 info">
              <p>20 Melkbosstrand</p>
              <p>Westcoast </p>
              <p>1107</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
