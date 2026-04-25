import React, { useState, useEffect } from 'react';
import img1 from '../assets/IceCream/lap.png';
import img2 from '../assets/IceCream/lap.png';
import img3 from '../assets/IceCream/Caramel swirl.jpeg';
import './css/c.css';

const images = [
  {
    src: img1,
    title: "Black Hole Brownie",
    bg: "#2c1b12"
  },
  {
    src: img2,
    title: "Strawberry Dream",
    bg: "#ffb6c1"
  },
  {
    src: img3,
    title: "Blue Sky Vanilla",
    bg: "#87cefa"
  }
];

function HomePageIceTransition() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="home-page"
      style={{ backgroundColor: images[index].bg }}
    >
      <div className="ice-cream-display">
        <img
          key={index}
          src={images[index].src}
          alt={images[index].title}
          className="ice-image"
        />

        <h1 className="ice-title">{images[index].title}</h1>
      </div>
    </div>
  );
}

export default HomePageIceTransition;