import './App.css'
import { useState } from 'react';

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
        setCity(result.weather[0].name);
        setResult(result);
      });
  }

  const dailyForecast = () => {
    const url = `http://localhost:8080/api/forecast/daily/${city}/${days}?units=${unit}`;

    fetch(url)
      .then((result) => response.json())
      .then((result) => {
        setCity(result.weather[0].name);
        setResult(result);
      })
  }

  const handleSubmitDailyWeather = (error) => {
    error.preventDefault();
    dailyWeather();
  }

  return (
   <div>

   </div>
  )
}

export default App
