import React, { useState, useEffect } from "react";
import DestinationForm from "./DestinationForm";
import DestinationList from "./DestinationList";
import Slideshow from './Slideshow';  
import './styles.css';
import './Slideshow.css';

function App() {
  const [destinations, setDestinations] = useState([]);

   
  useEffect(() => {
    const storedDestinations = JSON.parse(localStorage.getItem("destinations"));
    if (storedDestinations) {
      setDestinations(storedDestinations);
    }
  }, []);

   
  useEffect(() => {
    localStorage.setItem("destinations", JSON.stringify(destinations));
  }, [destinations]);

   
  const addDestination = (destination) => {
    setDestinations((prevDestinations) => [...prevDestinations, destination]);
  };

   n
  const removeDestination = (index) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
  };

  return (
    <div className="container">
      <h1>Travel Bucket List Planner</h1>
      
      {/* Add the Slideshow component */}
      <Slideshow /> {/* Place it where you'd like in your JSX */}
      
      <DestinationForm addDestination={addDestination} />
      <DestinationList destinations={destinations} removeDestination={removeDestination} />
    </div>
  );
}

export default App;
