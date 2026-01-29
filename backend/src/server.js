import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { fetchGeolocation } from '../helper/geolocation.js';
import { fetchStatus } from '../helper/responseStatus.js';

dotenv.config({ path: '.env' });

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

// Will throw error if .env is not configured with api key
const appid = process.env.WEATHER_API; // API key for openweather
if (!appid) {
    throw new Error("Error, WEATHER_API key not configured! Please follow .env.example to configure.");
} 

const status = await fetchStatus(appid); // For api status code
// Will throw error incorrect api key is configure
if (status === 401) {
    throw new Error("Api key is invalid.");
}

app.get('/', async(req, res) => {
    res.json({ message: "Server is healthy!"})
});

// Current weather data
app.get('/api/weather/:cityName', async (req, res) => {
    const city = req.params.cityName;
    const unit = req.query.units;

    if (city.trim().length === 0 || city === null || city === undefined) {
        res.status(400).json({ error: "City name is missing! Please provide a city name." });
    }
    
    try {
        const { lat, lon } = await fetchGeolocation(city, apiKey);

        const params = new URLSearchParams({
            lat,
            lon,
            appid: appid,
            units: unit,
        });
        
        const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;

        const response = await fetch(url);

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

// Daily forecast for up to 16 days
app.get('/api/forecast/daily/:cityName/:days', async(req, res) => {
    const city = req.params.cityName;
    const unit = req.query.units;
    const numberOfDays = req.params.days;

    if (city.trim().length === 0 || city === null || city === undefined) {
        res.status(400).json({ error: "City name is missing! Please provide a city name." });
    }

    try {
        const { lat, lon } = await fetchGeolocation(city, apiKey);

        const params = new URLSearchParams({
            lat, 
            lon, 
            appid: appid,
            cnt: numberOfDays,
            units: unit,
        });
        
        const url = `https://pro.openweathermap.org/data/2.5/forecast/daily?${params}`

        const response = await fetch(url);

        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Hourly forecast for up to 4 days
app.get('/api/forecast/hourly/:cityName/:hours', async(req, res) => {
    const city = req.params.cityName;
    const unit = req.query.units;
    const timestamps = req.params.hours 

    if (city.trim().length === 0 || city === null || city === undefined) {
        res.status(400).json({ error: "City name is missing! Please provide a city name." });
    }

    try {
        const { lat, lon } = await fetchGeolocation(city, apiKey);

        const params = new URLSearchParams({
            lat,
            lon,
            appid: appid,
            cnt: timestamps,
            units: unit,
        });

        const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?${params}`;

        const response = await fetch(url);

        const data = await response.json()

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});