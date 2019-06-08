import React from "react";

const BikeSummary = ({ bike }) => {
  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title center">
          {bike.bikeManufacturer} {bike.bikeModel}
        </span>
      </div>
    </div>
  );
};

export default BikeSummary;
