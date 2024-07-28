"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Weather = ({ city = 'Delhi' }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY; // Replace with your OpenWeatherMap API key
      const country = 'IN'; // Country code for India
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData) {
    return <p>No data available</p>;
  }

  // Extract relevant data from the API response
  const {
    name,
    weather,
    main: { temp, humidity, pressure },
    wind: { speed },
    sys: { country },
    clouds: { all: cloudiness },
    coord: { lat, lon },
  } = weatherData;

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h1>Weather in {name}, {country}</h1>
      <p><strong>Temperature:</strong> {(temp - 273.15).toFixed(2)}°C</p>
      <p><strong>Humidity:</strong> {humidity}%</p>
      <p><strong>Pressure:</strong> {pressure} hPa</p>
      <p><strong>Wind Speed:</strong> {speed} m/s</p>
      <p><strong>Cloudiness:</strong> {cloudiness}%</p>
      <p><strong>Weather Description:</strong> {weather[0].description}</p>
      <p><strong>Coordinates:</strong> Latitude {lat}, Longitude {lon}</p>
    </div>
  );
};

export default Weather;
