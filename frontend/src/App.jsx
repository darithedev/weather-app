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
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      })
  }

  const handleSubmitDailyWeather = (event) => {
    event.preventDefault();

    const inputForCityName = event.target.city.value;
    setCity(inputForCityName);
  }

  const handleSubmitDailyForecast = (event) => {
    event.preventDefault();

    const inputForCityName = event.target.city.value;
    const inputForDays = event.target.days.value;
    setCity(inputForCityName);
    setDays(inputForDays);
  }

  useEffect(() => {
    if (city) dailyWeather();
  }, [city, unit]);

  return (
   <div className="App">
    <WeatherForm city={city} unit={unit} setUnit={setUnit} days={days} handleSubmit={handleSubmitDailyWeather} />
    {!result ? <p>Submit a city name to see the weather or forcast.</p> : <WeatherCard data={result} unit={unit} /> }
   </div>
  )
}

export default App
