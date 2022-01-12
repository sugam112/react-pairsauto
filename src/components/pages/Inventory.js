import React from "react";
import InventoryCard from "../InventoryCard";
import "./Inventory.css";

const Inventory = () => {
  return (
    <div className="inventory-container">
      <InventoryCard />
      <InventoryCard />
      <InventoryCard />
      <InventoryCard />
      <InventoryCard />
      <InventoryCard />
      <InventoryCard />
    </div>
  );
};

export default Inventory;
