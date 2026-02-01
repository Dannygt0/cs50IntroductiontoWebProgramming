import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [photos, setPhotos] = useState([]);

  const searchCity = async () => {
    try {
      const response = await axios.get(`https://reimagined-journey-pj9gpv5q69wrh767x-3000.app.github.dev/photos?query=${city}`);
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <div className="App">
      <h1>Eye on the World</h1>
      <div className="search-container">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city name..."
        />
        <button onClick={searchCity}>Explore</button>
      </div>

      <div className="photo-grid">
        {Array.isArray(photos) && photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img
              src={photo.urls.small}
              alt={photo.alt_description || 'city'}
              width="300"
              height="300"
            />
            <p className="photo-description">
              {(() =>)
              let text = photo.description || photo.alt_description || "A beautiful view of the city";
              text = text.trim();
              text = text.charAt(0).toUpperCase() + text.slice(1);
              if(!text.endsWith('.'))
              text += '.';
              }
              return text;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
