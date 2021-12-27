import React from "react";
import "./InventoryCard.css";

const InventoryCard = () => {
  return (
    <div className="card-container">
      <h2>Hello Card</h2>
      <div className="card-wrapper">
        <div className="details">
          <div className="big-img">
            <img src="images/card-1.png" alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>Item title</h2>
            </div>
            {/* <Colors colors={item.colors} /> */}

            <p>Item Description</p>
            <p>Item Content</p>

            <span>Item Price</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
