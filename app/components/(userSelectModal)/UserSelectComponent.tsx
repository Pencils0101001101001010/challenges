import "./style.css";

const UserSelectComponent = () => {
  return (
    <div className="user-select-modal-body">
      <section className="user-select-modal-box">
        <div className="select-modal-header">
          {" "}
          <div className="border-style-next-header"></div>Select your instrument
        </div>
        <div></div>
        <div className="user-types">
          <h2>Guitar</h2>
          <div className="inner-user-t-select"></div>
        </div>
        <div className="user-types">
          <h2>Bass</h2>
          <div className="inner-user-t-select2"></div>
        </div>
        <div className="user-types">
          <h2>Drums</h2>
          <div className="inner-user-t-select3"></div>
        </div>
        <div className="next-btn-user text-end">
          <div className="select-user-next-btn-stl">NEXT</div>
        </div>
      </section>
    </div>
  );
};

export default UserSelectComponent;
