import React from "react";
import "./StepsBlock.css";
import stepIcon1 from "../assets/icon_1.png";
import stepIcon2 from "../assets/icon_2.png";
import stepIcon3 from "../assets/icon_3.png";

function StepsBlock() {
  return (
    <div className="stepsBlock">
      {/* <div className="stepsBlockBox">
        <div className="stepsBlockBox">
          <h3 className="stepsBlockBoxTitle">
            3 Easy Steps to Doorstep Bliss!
          </h3>
        </div>
      </div> */}
      <div className="stepsBlockBox">
        <div className="stepBox" id="stepBox1">
          <div className="stepHalfBox">
            <h2 className="stepTitle">STEP 1</h2>
            <img
              src={stepIcon1}
              alt="One time here will be the step icon..."
              className="stepIcon"
            />
            <h3 className="stepDescTitle">
              Choose <br />
              Drink
            </h3>
            <hr className="stepLine" />
            <p className="stepDesc">
              Open the catalog and add the selected item to your cart
            </p>
          </div>
        </div>
        <div className="stepBox" id="stepBox2">
          <div className="stepHalfBox">
            <h2 className="stepTitle">STEP 2</h2>
            <img
              src={stepIcon2}
              alt="One time here will be the step icon..."
              className="stepIcon"
            />
            <h3 className="stepDescTitle">
              Make <br />
              Payment
            </h3>
            <hr className="stepLine" />
            <p className="stepDesc">
              Pay for your order using a convenient payment method
            </p>
          </div>
        </div>
        <div className="stepBox" id="stepBox3">
          <div className="stepHalfBox">
            <h2 className="stepTitle">STEP 3</h2>
            <img
              src={stepIcon3}
              alt="One time here will be the step icon..."
              className="stepIcon"
            />
            <h3 className="stepDescTitle">
              Meet <br />
              Courier
            </h3>
            <hr className="stepLine" />
            <p className="stepDesc">Open the door and receive your order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepsBlock;
