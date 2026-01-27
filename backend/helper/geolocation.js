export async function fetchGeolocation(city, apiKey) {
    let lat, lon;
    const geoParams = new URLSearchParams({
        q: city,
        appid: apiKey,
        limit: 1,
    });

    const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?${geoParams}`;

    const response = await fetch(geoUrl);

    const data = await response.json();
    
    ({ lat, lon } = data[0]);

    return { lat, lon };
}