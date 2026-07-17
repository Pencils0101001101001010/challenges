import "../../styles/iconStyles.css";
import { Black_Ops_One } from "next/font/google";

// Configure the font outside the component
const blackOpsOne = Black_Ops_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const CreateIcon = () => {
  return (
    <div className="background">
      <div className="icon-body-center container">
        <div className="icon-bg-perant">
          <div className="icon-background-middle-top-box">
            <div className="outline-around-orange-box-top1"> </div>

            <div className="icon-background-middle-top-box-inner"></div>
            <div className="blackbox-iside-middle-top-box"></div>
            <div className="blackbox-iside-middle-top-circle"></div>
          </div>
          <div className="icon-background-middle-top-box">
            <div className="icon-background-middle-top-box-inner"></div>
            <div className="blackbox-iside-middle-top-box"></div>
            <div className="blackbox-iside-middle-top-circle"></div>
          </div>
          <div className="bottom-outline">
            <div className="bottom-box-inner">
              <div className="bottom-box-inner-inner-line-left"></div>
            </div>
          </div>
          <div className="triangle-up"></div>
          <div className="triangle-stem-up"></div>

          <div className="left-bottom-holl"></div>
          <div className="right-bottom-holl"></div>
        </div>
        <div className={`${blackOpsOne.className} splash-title`}>
          FILE CRYPT
        </div>
      </div>
    </div>
  );
};

export default CreateIcon;
