import './App.css'
import { useState, useEffect } from 'react';
import WeatherForm from './components/weatherForm';
import WeatherCard from './components/weatherCard'

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [unit, setUnit] = useState("imperial");
  const [days, setDays] = useState(7)

  const dailyWeather = () => {
    const url = `http://localhost:8080/api/weather/${city}?units=${unit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      });
  }

  const dailyForecast = () => {
    const url = `http://localhost:8080/api/forecast/daily/${city}/${days}?units=${unit}`;

    fetch(url)
      .then((result) => response.json())
      .then((result) => {
        setResult(result);
      })
  }

  const handleSubmitDailyWeather = (error) => {
    error.preventDefault();

    const inputForCityName = error.target.city.value;
    setCity(inputForCityName);
  }

  const handleSubmitDailyForecast = (error) => {
    error.preventDefault();
    dailyForecast();
  }

  useEffect(() => {
    if (city) dailyWeather();
  }, [city]);

  return (
   <div className="App">
    <WeatherForm city={city} unit={unit} days={days} handleSubmit={handleSubmitDailyWeather} />
    {!result ? <p>Submit a city name to see the weather or forcast.</p> : <WeatherCard data={result} /> }
   </div>
  )
}

export default App
