const WeatherForm = (props) => {
    return (
        <div className="Weather">
            <h1 className="App-header">Weather Forecast App</h1>
            <form onSubmit={props.handleSubmit}>
                <input
                    id="city-name"
                    type="text"
                    placeholder="Please enter city name"
                    name="city"
                />
                <label>
                    Unit: 
                    <select
                        value={props.unit}
                        onChange={(event) => props.setUnit(event.target.value)}
                    >
                        <option value="imperial">&deg;F</option>
                        <option value="metric">&deg;C</option>
                    </select>
                </label>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default WeatherForm;