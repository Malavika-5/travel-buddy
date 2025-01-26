/*import React, { useState } from 'react';

const Slideshow = () => {
  const panels = [
    {
      title: 'Explore The World',
      imageUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Wild Forest',
      imageUrl: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Sunny Beach',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    },
    {
      title: 'City on Winter',
      imageUrl: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
      title: 'Mountains - Clouds',
      imageUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slideshow-container">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`slideshow-panel ${activeIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${panel.imageUrl})` }}
          onClick={() => handleClick(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;*/

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css"; // Add your CSS styles here

const panels = [
  {
    title: "Explore The World",
    imageUrl:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Wild Forest",
    imageUrl:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Sunny Beach",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
  },
  {
    title: "City on Winter",
    imageUrl:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
  },
  {
    title: "Mountains - Clouds",
    imageUrl:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slideshow-container">
      {panels.map((panel, index) => (
        <motion.div
          key={index}
          className={`panel ${activeIndex === index ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
          style={{
            backgroundImage: `url(${panel.imageUrl})`,
          }}
          animate={{
            flex: activeIndex === index ? 5 : 0.5,
          }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: activeIndex === index ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {panel.title}
          </motion.h3>
        </motion.div>
      ))}
    </div>
  );
};

export default Slideshow;

