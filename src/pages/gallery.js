import React from "react";
import NavigationBar from './navbar';
import './gallery.css';
import s1 from "./s1.jpg";
import s2 from "./s2.jpg";
import s3 from "./s3.jpg";
import s4 from "./s4.jpg";
import s5 from "./s5.jpg";
import s6 from "./s6.jpg";
import s7 from "./s7.jpg";

function Gallery() {
  const images = [
    s1, s2, s3, s4, s5, s6, s7
  ];

  const titleStyle = {
    fontSize: '3em', // Adjust the size as needed
    color: 'gold', // Adjust the color as needed
    fontWeight: 'bold', // Make the title bold
    textAlign: 'center',
    marginTop: '35px', // Provide spacing as needed
  };

  return (
    <div className="gallery-container" style={{ paddingTop: '25px', background: 'black'}}>
      <NavigationBar />
      {/* Apply the titleStyle to the h2 element */}
      <h2 className="gallery-title" style={titleStyle}>Our Gallery</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img src={image} alt={`Gallery item ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
