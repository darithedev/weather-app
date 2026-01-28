import express from 'express';
import dotenv from 'dotenv';
import { fetchGeolocation } from '../helper/geolocation.js';

dotenv.config({ path: '.env' });

const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', async(req, res) => {
    res.json({ message: "Server is healthy!"})
});

// Current weather data
app.get('/weather/:cityName', async (req, res) => {
    const city = req.params.cityName;
    const apiKey = process.env.WEATHER_API;
    const unit = req.query.units;

    try {
        const { lat, lon } = await fetchGeolocation(city, apiKey);

        const params = new URLSearchParams({
            lat,
            lon,
            appid: apiKey,
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
app.get('/forecast/daily/:cityName/:days', async(req, res) => {
    const city = req.params.cityName;
    const apiKey = process.env.WEATHER_API;
    const unit = req.query.units;
    const numberOfDays = req.params.days;

    try {
        const { lat, lon } = await fetchGeolocation(city, apiKey);

        const params = new URLSearchParams({
            lat, 
            lon, 
            appid: apiKey,
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
app.get('/forecast/hourly/:cityName/:hours', async(req, res) => {
    const city = req.params.cityName;
    const apiKey = process.env.WEATHER_API;
    const unit = req.query.units;
    const timestamps = req.params.hours 

    try {
        const { lat, lon } = await fetchGeolocation(city, apiKey);

        const params = new URLSearchParams({
            lat,
            lon,
            appid: apiKey,
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