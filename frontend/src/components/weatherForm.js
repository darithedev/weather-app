const WeatherForm = (props) => {
    return (
        <div className="Weather">
            <h1 className="App-header">Weather Forecast App</h1>
            <form onSubmit={props.handleSubmit}>
                <input
                    id="city-name"
                    type="text"
                    placeholder="lease enter city name"
                    name="city"
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default WeatherForm;