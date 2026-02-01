import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [photos, setPhotos] = useState([]);

  const searchCity = async () => {
    try {
      const response = await axios.get(`https://reimagined-journey-pj9gpv5q69wrh767x-3000.app.github.dev/photos?query=${city}`);
      setPhotos(response.data);
    } catch (error) {
      console.error('Error fetching photos: error');
  }
  };


  return (
    < div >
      <input value={city} onChange={(e) => setCity(e.target.value)}/>
      <button onClick={searchCity}>Submit</button>
      {photos.map((photo) => (<img key= {photo.id} src={photo.urls.small} alt= {photo.alt_description || 'city'}/>))}
    </div >
  );
}

export default App;
