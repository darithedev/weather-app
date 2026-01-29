export async function fetchStatus(apiKey) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=${apiKey}`;

    const res = await fetch(url);

    return res.status;
}

