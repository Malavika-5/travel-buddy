import React from "react";
import "./Slideshow.css";

const images = [
  {
    url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?auto=format&fit=crop&w=1350&q=80",
    title: "Explore The World",
  },
  {
    url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?auto=format&fit=crop&w=1350&q=80",
    title: "Wild Forest",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1353&q=80",
    title: "Sunny Beach",
  },
  {
    url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?auto=format&fit=crop&w=1351&q=80",
    title: "City on Winter",
  },
  {
    url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1350&q=80",
    title: "Mountains - Clouds",
  },
];

function Slideshow() {
  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`panel ${index === 0 ? "active" : ""}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
