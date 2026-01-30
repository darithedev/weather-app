import './App.css'
import { useState } from 'react';

function App() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState(null);
  const [unit, setUnit] = useState("imperial")

  const dailyWeather = () => {
    const url = `http://localhost:8080/api/weather/${city}?units=${unit}`;

    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setCity(result.weather[0].name);
        setResult(result);
      });
  }

  return (
   <div>

   </div>
  )
}

export default App
