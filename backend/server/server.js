import express from 'express';
import dotenv from 'dotenv';

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
    
    let lat, lon;
    try {
        const geoParams = new URLSearchParams({
            q: city,
            appid: process.env.WEATHER_API,
            limit: 1,
        });

        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?${geoParams}`;

        const response = await fetch(geoUrl);

        const data = await response.json();
        
        ({ lat, lon } = data[0]);

        res.status(200).json(data);
    } catch {

    }
    
    const params = new URLSearchParams({
        q: city,
        appid: apiKey,
        units: unit,
    });
    
    try {

    } catch {
        
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
});