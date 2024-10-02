import React, { useState, useEffect } from "react";
import styles from "./WeatherWidget.module.css";

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/current.json?q=78722&key=75bdea9d811c4dc2984153019240210"
        );
        if (!response.ok) {
          throw new Error("Weather data not available");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.weatherContainer}>
      <h2 className={styles.title}>
        Weather in {weatherData.location.name}, {weatherData.location.region}
      </h2>
      <div className={styles.infoContainer}>
        <div className={styles.weatherInfo}>
          <p className={styles.temperature}>{weatherData.current.temp_f}°F</p>
          <p className={styles.condition}>
            {weatherData.current.condition.text}
          </p>
        </div>
        <div className={styles.iconContainer}>
          <img
            src={weatherData.current.condition.icon}
            alt="Weather icon"
            className={styles.weatherIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherWidget;

//https://api.weatherapi.com/v1/current.json?q=78722&key=75bdea9d811c4dc2984153019240210

// useEffect(() => { ... }, []);
// This is a React hook that runs side effects in functional components.
// The empty array [] as the second argument means this effect will only run once, when the component mounts.
// const fetchWeatherData = async () => { ... };
// This defines an asynchronous function inside the effect. We use async because we're going to use await for our API call.
// try { ... } catch (err) { ... }
// This is a try/catch block for error handling. It attempts to run the code in the try block, and if any errors occur, it catches them in the catch block.
// const response = await fetch(...);
// fetch is a web API for making HTTP requests. It returns a Promise.
// await pauses execution until the Promise resolves.
// The URL includes the API endpoint, the ZIP code (78722), and your API key.
// if (!response.ok) { throw new Error('Weather data not available'); }
// This checks if the response was successful. If not, it throws an error.
// response.ok is true if the HTTP status code is in the 200-299 range.
// const data = await response.json();
// This parses the response body as JSON. It also returns a Promise, so we use await.
// setWeatherData(data);
// This updates the weatherData state with the parsed JSON data.
// setLoading(false);
// This sets the loading state to false, indicating that the data fetching is complete.
// catch (err) { ... }
// If any error occurs in the try block, this code runs.
// It sets the error state to the error message and sets loading to false.
// fetchWeatherData();
// This calls the async function we just defined, starting the data fetching process.
// In summary, this code defines a function to fetch weather data, then immediately calls that function. It uses modern JavaScript features (async/await) to handle the asynchronous nature of API calls, and React's state updating functions to manage the component's state based on the result of the API call. The use of useEffect ensures this only happens once when the component mounts, preventing unnecessary API calls on re-renders.
