import "../../styles/popOver.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Cookie&family=Gravitas+One&family=Italiana&display=swap');
</style>;

const PopOver = () => {
  return (
    <div className="PageContainer headerText">
      <div className="row boxContainer text-center">
        <div className="col-12 mb-0 pt-5">
          <h1>Subscribe to Newsletter</h1>
          <p>
            By subscribing you will recieve the lastest updates about bigfoots
            new books
          </p>
        </div>
        <div className="col-12">
          <input
            type="text"
            placeholder="Email@hmail.com"
            className="inputStyle"
          />
        </div>
        <div className="col-6">
          <button className="ButtonStyle">No Thanks</button>
        </div>
        <div className="col-6">
          <button className="ButtonStyle">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default PopOver;
