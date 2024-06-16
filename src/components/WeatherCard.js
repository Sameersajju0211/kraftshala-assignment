// src/components/WeatherCard.js
import React from 'react';
import '../styles/WeatherCard.css';
// src/components/WeatherCard.js
// import React from 'react';
import weatherIconMapping from '../utils/weatherIconMapping';
// import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const iconClass = weatherIconMapping[weather.weather[0].icon] || 'bi-question-circle';
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  return (
    <div className="weather-card">
      <h1 className='current-weather'>Current Weather</h1>
      <p>{formattedDate}</p>
      <h2>{weather.name}</h2>

      <div className='weather-temp'>
      <h1>🌤️</h1>
      
      <p className='temp'>Temperature: {weather.main.temp}°C</p>
      <p className='discription'>Weather: <span className='dis'>{weather.weather[0].description}</span></p>
      </div>
      
      <div className='other-temp'>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
      
     
      
     
    </div>
  );
};

export default WeatherCard;

