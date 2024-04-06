const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-description');
const forecastContainer = document.querySelector('#forecast-container');

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=4.75&lon=-74.07&appid=60b13e27acb47777c1591d386c6c8261&units=metric"
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=4.75&lon=-74.07&appid=60b13e27acb47777c1591d386c6c8261&units=metric"


async function getWeather(weatherUrl) {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok){
            const data = await response.json();
            displayWeather(data);
        }
        else{
            throw Error(await response.test());
        }
    }
    catch (err) {
        console.log(err);
    }
}

function displayWeather(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    weatherDesc.innerHTML = desc;
}

async function getForecast(forecastUrl) {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok){
            const data = await response.json();
            displayForecast(data);
        }
        else{
            throw Error(await response.test());
        }
    }
    catch (err) {
        console.log(err);
    }
}

function displayForecast(data){
    let forecast = [];
    data.list.forEach(element => {
        const timestamp = element.dt;
        const date = timestampToDate(timestamp);
        const hours = getHoursFromDate(date);

        if (hours == "12"){
            forecast.push(element);
        }
    });

    const finalForecast = forecast.slice(0, 3);

    finalForecast.forEach(element =>{
        let temperature = document.createElement('span');
        const timestamp = element.dt;
        const date = timestampToDate(timestamp);

        temperature.innerHTML = `Date: ${date} Temperature: ${element.main.temp}&deg;C`;
        forecastContainer.appendChild(temperature);
    });
}

function timestampToDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toUTCString();
    return formattedDate;
}

function getHoursFromDate(dateString) {
    const date = new Date(dateString);
    const hours = ("0" + date.getUTCHours()).slice(-2);
    return hours;
}

getWeather(weatherUrl);
getForecast(forecastUrl);