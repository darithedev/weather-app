const WeatherCard = ({ data }) => {

    return (
        <div classname="Weather-card">
            <div className="result">
                <p>City: <span className="data">{data.name}, {data.sys.country}</span></p>
                <p>Description: <span className="data">{data.weather[0].description}</span></p>
                <img
                    src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
                    alt={`${data.weather[0].description} weather icon`}
                />
                <p>Temperature: <span className="data">{data.main.temp}<sup>o</sup>F</span></p>
                <p>Feels Like: <span className="data">{data.main.feels_like}<sup>o</sup>F</span></p>
                <p>Humidity: <span className="data">{data.main.humidity}</span></p>
                <p>Wind Speed: <span className="data">{data.wind.speed}</span></p>
            </div>
        </div>
    )
}
export default WeatherCard;