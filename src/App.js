import React, { useState, useEffect } from "react";
import DestinationForm from "./DestinationForm";
import DestinationList from "./DestinationList";

function App() {
  const [destinations, setDestinations] = useState([]);

  // Load destinations from localStorage when the component mounts
  useEffect(() => {
    const storedDestinations = JSON.parse(localStorage.getItem("destinations"));
    if (storedDestinations) {
      setDestinations(storedDestinations);
    }
  }, []);

  // Save destinations to localStorage when the list changes
  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }, [destinations]);

  // Function to add a new destination
  const addDestination = (destination) => {
    setDestinations((prevDestinations) => [...prevDestinations, destination]);
  };

  // Function to remove a destination
  const removeDestination = (index) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
  };

  return (
    <div className="container">
      <h1>Travel Bucket List Planner</h1>
      <DestinationForm addDestination={addDestination} />
      <DestinationList destinations={destinations} removeDestination={removeDestination} />
    </div>
  );
}

export default App;