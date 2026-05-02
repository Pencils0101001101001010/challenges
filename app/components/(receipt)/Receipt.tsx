import Image from "next/image";
import "../../styles/receipt.css";
import lilly from "../../../assets/img/lilly.jpg";
import plant from "../../../assets/img/plant.jpg";
import plant1 from "../../../assets/img/plant1.jpg";
import plant2 from "../../../assets/img/plant2.jpg";
import plant3 from "../../../assets/img/plant3.jpg";

const Receipt = () => {
  return (
    <div className="pageContainer">
      <div className="mainContainer">
        <div className="containerGridBox">
          <div className="leftColumn">
            {" "}
            <h4>Thank you for you order</h4> Order: #2877493702
          </div>
          <div className="rightColumn">
            <div className="receiptItmes">
              <h3> Order Summary:</h3>
              <div className="orderItemsGrid">
                <p>White Lillies</p>
                <p className="pirceSection">R 120.00</p>

                <p>Red Rose Buds</p>
                <p className="pirceSection">R 80.00</p>

                <p>Ferns</p>
                <p className="pirceSection">R 150.00</p>

                <p>Desert Roses</p>
                <p className="pirceSection">R 300.00</p>

                <p>Vark Oor</p>
                <p className="pirceSection">R 250.00</p>
                <div className="subTotal text-end">
                  <h6>Delivery: 200.00</h6>
                  <h4>total: R 1050.00</h4>
                </div>
                <p className="deliveryNotice text-center">
                  Your items will be delivered 10/06/2026 via courierNow
                </p>
                <button className="btnStyle">Track Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
