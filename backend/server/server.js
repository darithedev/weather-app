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

app.get('/weather', async (req, res) => {
    const city = req.query.cityName;
    const apiKey = process.env.WEATHER_API;
    const unit = req.query.units;
    
    try {
        const params = new URLSearchParams({
            q: city,
            appid: apiKey,
            units: unit,
        });
        
        const url = `https://api.openweathermap.org/data/2.5/weather?${params}`;

        const response = await fetch(url);

        const data = await response.json();

        ({ lat, lon } = await fetchGeolocation(city, apiKey));

        res.status(200).json(data[0]);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});