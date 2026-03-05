import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem('eye-world-favs')) || [];
    setFavorites(savedFavs);
  }, []);

  useEffect(() => {
    localStorage.setItem('eye-world-favs', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedPhoto]);

  const searchCity = async () => {
    if (!city) return alert("Please enter a city name");
    try {
      const response = await axios.get(`https://eye-world-api.onrender.com/photos?query=${city}`);
      setShowFavorites(false);
      if (response.data.length === 0) alert("No photos found!");
    } catch (error) {
      console.error('Error fetching photos:', error);
      alert("Error connecting to the server.");
    }
  };

  const saveToFavorites = (photo) => {
    if (!favorites.some(fav => fav.id === photo.id)) {
      setFavorites([...favorites, photo]);

      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 800);

      document.body.style.backgroundColor = "white";
      setTimeout(() => document.body.style.backgroundColor = "#0f0f0f", 100);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const photosToDisplay = showFavorites ? favorites : photos;

  return (
    <div className="App">
      <h1>Eye on the World</h1>

      <div className="search-container">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city name..."
          onKeyPress={(e) => e.key === 'Enter' && searchCity()}
        />
        <button onClick={searchCity}>Explore</button>
        <button className="nav-btn" onClick={() => setShowFavorites(!showFavorites)}>
          {showFavorites ? "🏠 Home" : "⭐ My Album"}
        </button>
      </div>

      <h2>{showFavorites ? "Your Captured Moments" : "Discovering the World"}</h2>

      <div className="photo-grid">
        {Array.isArray(photosToDisplay) && photosToDisplay.map((photo) => (
          <div key={photo.id} className="photo-card" onClick={() => setSelectedPhoto(photo)}>
            <img
              src={photo.urls.small}
              alt={photo.alt_description || 'city'}
              className="clickable-img"
            />
            <div className="card-content">
              <p className="photo-description">
                {(() => {
                  let text = photo.description || photo.alt_description || "A beautiful view of the city";
                  text = text.trim();
                  text = text.charAt(0).toUpperCase() + text.slice(1);
                  if (!text.endsWith('.')) text += '.';
                  return text;
                })()}
              </p>
              {showFavorites && (
                <button className="delete-btn" onClick={(e) => {
                  e.stopPropagation();
                  removeFromFavorites(photo.id);
                }}>🗑️ Delete</button>
              )}
            </div>
          </div>
        ))}
      </div>

      {}
      {selectedPhoto && (
        <div className="modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {showHeart && <div className="heart-animation">❤️</div>}
            <span className="close-btn" onClick={() => setSelectedPhoto(null)}>&times;</span>

            <img src={selectedPhoto.urls.regular} alt="Zoom" className="zoom-img" />

            <div className="modal-actions">
              {!showFavorites && (
                <button className="icon-btn camera-btn" onClick={() => saveToFavorites(selectedPhoto)} title="Capture to Favorites">
                  📸
                </button>
              )}

              <a href={selectedPhoto.links.download + "&force=true"} target="_blank" rel="noreferrer">
                <button className="icon-btn download-btn" title="Download Image">📥</button>
              </a>

              <div className="social-share-v2">
                <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${selectedPhoto.urls.regular}`)} className="social-icon fb">f</button>
                <button onClick={() => window.open(`https://twitter.com/intent/tweet?url=${selectedPhoto.urls.regular}`)} className="social-icon tw">𝕏</button>
                <button onClick={() => window.open(`https://www.instagram.com/`)} className="social-icon ig">📷</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
