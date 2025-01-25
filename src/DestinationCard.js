import React from 'react';

function DestinationCard({ destination, index, removeDestination }) {
  return (
    <div className="destination-card">
      <h3>{destination.name}</h3>
      <p>{destination.notes}</p>
      <p className={`priority-${destination.priority.toLowerCase()}`}>
        Priority: {destination.priority}
      </p>
      {destination.image && <img src={destination.image} alt={destination.name} />}
      <button onClick={() => removeDestination(index)}>Remove</button>
    </div>
  );
}

export default DestinationCard;
