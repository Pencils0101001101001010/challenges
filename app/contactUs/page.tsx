import Image from "next/image";
import "./style.css";
import plant from "../../assets/img/whale.jpg";

function page() {
  return (
    <div className="mainCUContainer">
      <div className="imageSide">
        <h4 className="mainText">GET INTOUCH</h4>
        <Image src={plant} alt="Hey" className="imgStl" />
      </div>
      <div className="formDetails">
        <div className="formItems text-center">
          <div>
            <h3 className="formHeaderText">TALK TO US</h3>
          </div>
          <div className="formBodyText">NAME</div>
          <div>
            <input placeholder="" type="text" className="inputStl" />
          </div>
          <div className="formBodyText">EMAIL</div>
          <div>
            <input placeholder="" type="text" className="inputStl" />
          </div>
          <div className="formBodyText">MOBILE</div>
          <div>
            <input placeholder="" type="text" className="inputStl" />
          </div>
          <div className="formBodyText">DESCRIPTION</div>
          <div>
            <textarea className="textareaSize" />
          </div>
          <button className="btnStyle">SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default page;
