import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JutsuDisplay() {
  const [jutsuIndex, setJutsuIndex] = useState(-1); // Initialize with a default value

  useEffect(() => {
    // Make a GET request to your Python backend to fetch the jutsu_index
    axios.get('http://localhost:4000/get_jutsu_index') // Change the URL to match your backend endpoint
      .then((response) => {
        setJutsuIndex(response.data.jutsu_index);
      })
      .catch((error) => {
        console.error('Error fetching jutsu_index:', error);
      });
  }, []);

  return (
    <div>
      <h1>Current Jutsu Index:</h1>
      <p>{jutsuIndex}</p>
    </div>
  );
}

export default JutsuDisplay;