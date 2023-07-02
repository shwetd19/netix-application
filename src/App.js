import React, { useState, useEffect } from "react";
import "./App.css";
import Records from "./records.json";

function ImageBox({ record, loadedImages, handleImageLoad, handleImageClick }) {
  const isImageLoaded = loadedImages.includes(record.position);

  return (
    <div
      className="box"
      key={record.position}
      onClick={() => handleImageClick(record)}
    >
      {!isImageLoaded && <div className="spinner" />}
      <img
        src={record.icon}
        alt=""
        onLoad={() => handleImageLoad(record.position)}
        style={{ display: isImageLoaded ? "block" : "none" }}
      />
      <br />
      {record.title}
    </div>
  );
}

function App() {
  const [loadedImages, setLoadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageLoad = (position) => {
    setLoadedImages((prevLoadedImages) => [...prevLoadedImages, position]);
  };

  const handleImageClick = (record) => {
    setSelectedImage(record.icon);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        handleCloseImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="inner">
          <div className="first-row">
            {Records.slice(0, 3).map((record) => (
              <ImageBox
                key={record.position}
                record={record}
                loadedImages={loadedImages}
                handleImageLoad={handleImageLoad}
                handleImageClick={handleImageClick}
              />
            ))}
          </div>
          <div className="second-row">
            {Records.slice(3).map((record) => (
              <ImageBox
                key={record.position}
                record={record}
                loadedImages={loadedImages}
                handleImageLoad={handleImageLoad}
                handleImageClick={handleImageClick}
              />
            ))}
          </div>
        </div>
      </header>
      {selectedImage && (
        <div className="overlay" onClick={handleCloseImage}>
          <div className="image-container">
            <img src={selectedImage} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
