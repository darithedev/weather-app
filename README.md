# Weather App Project

This project demonstrates a Weather App connecting a React + Vite frontend and Express + Node.js backend. This project has 3 routes that retrieves weather or forecast data from openweathermap APIs and displays them. Only one api route, for retreiving daily forecast has been implemented. 

<img width="459" height="103" alt="Screenshot 2026-01-28 at 00 42 30" src="https://i.imgur.com/50HV7Ua.png" />
<img width="509" height="503" alt="Screenshot 2026-01-28 at 00 42 30" src="https://i.imgur.com/LcJCbAD.png" />
<img width="509" height="503" alt="Screenshot 2026-01-28 at 00 42 30" src="https://i.imgur.com/VK08vLq.png" />

## How to run

1. Clone [weather-app](https://github.com/darithedev/weather-app)

### Backend

2. Run command ```cd backend```
3. Run command ```npm install```
4. Edit ```.env.example``` file name to ```.env```
5. Edit ```WEATHER_API``` with your openweathermap api
6. Run command ```npm run dev``` to run your backend server
7. On your browser, go to ```localhost:port/``` ** Make sure to change ```port``` with local port configuration

### Frontend

2. Run command ```cd frontend```
3. Run command ```npm install```
4. Run command ```npm run dev``` to run your frontend server
5. On your browser, go to ```localhost:5173/``` 

Congratulations your servers are now running

## API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Get healthy message | `{"message":"Server is healthy."}` |
| GET | `/api/weather/:cityName` | Get current weather data | ``{ ... }`` |
| GET | `/api/forecast/daily/:cityName/:days` | Get daily forecast by x number of days (max 16 days) | `{ ... }` |
| GET | `/api/forecast/hourly/:cityName/:hours` | Get hourly forecast by x number of hours (max 96 hours) | `{ ... }` |

## Testing

### Using [Postman](https://learning.postman.com/docs/getting-started/overview/)

1. **Current weather forecast in Boston**
   - Method: `GET`
   - URL: `http://localhost:3000/api/weather/Boston?units=imperial`

6. **Daily forecast for 7 days in Boston (Max 16 days)**
   - Method: `GET`
   - URL: `http://localhost:3000/fapi/orecast/daily/Boston/7?units=imperial`

7. **Hourly forecast in Boston for the next 3 hours (Max 4 days / 96 hours)**
   - Method: `GET`
   - URL: `http://localhost:3000/api/forecast/hourly/Boston/3?units=imperial`

### Using cURL (add `|  jq` at the end to make json "prettier")

1. **Current weather forecast in Boston**
   - `curl http://localhost:3000/api/weather/Boston?units=imperial`

2. **Daily forecast for 7 days in Boston (Max 16 days)**
   - `curl http://localhost:3000/api/forecast/daily/Boston/7?units=imperial`

3. **Hourly forecast in Boston for the next 3 hours (Max 4 days / 96 hours)**
   - `curl http://localhost:3000/api/forecast/hourly/Boston/3?units=imperial`

### Secondary / Strech Goals

Since only 1 route has been implemented in the frontend, the next goal is to implement the daily and hourly forecasts. 

