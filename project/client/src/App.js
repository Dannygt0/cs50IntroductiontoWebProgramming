import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');

  const searchCity = async () => await axios.get(`https://reimagined-journey-pj9gpv5q69wrh767x-3000.app.github.dev/photos?query=${city}`){
    const response = setPhotos(response.data)
  }
  const [photos, setPhotos] = useState([]);

  return (
    < div >
      <input value={city} onChange={(e) => setCity(e.target.value)}></input>
      <button onClick={searchCity}>Submit</button>
      {photos.map(photo => (<img src= {photo.urls.small}></img>))}
    </div >
  )


}

export default App;
