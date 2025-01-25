import React, { useState } from "react";
import "./styles.css"; // Make sure the CSS file is imported

function DestinationCard({ destination, index, removeDestination }) {
  // State to track if the panel is active (expanded)
  const [isActive, setIsActive] = useState(false);

  // Toggle function for expanding/collapsing the card
  const toggleActiveState = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}  // Conditionally add 'active' class
      onClick={toggleActiveState}  // Add the click handler to toggle active state
      style={{ backgroundImage: `url(${destination.image})` }}  // Set background image dynamically
    >
      <h3>{destination.name}</h3>
      <div className="destination-details">
        <p>{destination.notes}</p>
        <p className={`priority-${destination.priority.toLowerCase()}`}>
          Priority: {destination.priority}
        </p>
        <button onClick={() => removeDestination(index)}>Remove</button>
      </div>
    </div>
  );
}

export default DestinationCard;



