import React from "react";
import DestinationCard from "./DestinationCard";

function DestinationList({ destinations, removeDestination }) {
  return (
    <div className="container">
      {destinations.map((destination, index) => (
        <DestinationCard
          key={index}
          index={index}
          destination={destination}
          removeDestination={removeDestination}
        />
      ))}
    </div>
  );
}

export default DestinationList;
