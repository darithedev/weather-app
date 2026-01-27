import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: 'backend/.env' });

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