export const fetchCurrentLocation = () => {
    return fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=c0069545328a02d215b49547d60c6400')
    .then(res => res.json())
}

export const fetchDailyCast = () => {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=39.74&lon=-104.98&exclude=hourly&appid=c0069545328a02d215b49547d60c6400')
    .then(res => res.json())
}


