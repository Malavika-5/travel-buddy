import React, { useState, useEffect } from 'react';
import Slideshow from './Slideshow';   
import DestinationForm from './DestinationForm';
import DestinationList from './DestinationList';

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const storedDestinations = JSON.parse(localStorage.getItem('destinations'));
    if (storedDestinations) {
      setDestinations(storedDestinations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('destinations', JSON.stringify(destinations));
  }, [destinations]);

  const addDestination = (destination) => {
    setDestinations((prevDestinations) => [...prevDestinations, destination]);
  };

  const removeDestination = (index) => {
    const newDestinations = destinations.filter((_, i) => i !== index);
    setDestinations(newDestinations);
  };

  return (
    <div>
      <div className="slideshow-container">
        <Slideshow />
      </div>
      <div className="container">
        <h1>Travel Bucket List Planner</h1>
        <DestinationForm addDestination={addDestination} />
        <DestinationList
          destinations={destinations}
          removeDestination={removeDestination}
        />
      </div>
    </div>
  );
}

export default App;
