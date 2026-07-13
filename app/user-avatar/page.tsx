"use client";
import "./user-avatar.css";

export default function page() {
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
            <h1>Jen Keen</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
