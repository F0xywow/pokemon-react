import React, { useState, useEffect } from 'react';
import './Card.css';

function Card({ name, number, image, imageShiny }) {
  const [currentImage, setCurrentImage] = useState(image);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage === image ? imageShiny : image));
        setOpacity(1);
      }, 500);
    }, 5000);

    return () => clearInterval(timer); // Clean up on unmount
  }, [image, imageShiny]);

  return (
    <div id="card">
        <div className="card-content">
        <img src={currentImage} alt={name} style={{ opacity }} />
        <p>#{number} {name}</p>
      </div>
    </div>
  );
}

export default Card;