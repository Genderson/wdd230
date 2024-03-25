const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/3.0/onecall?lat=49.75&lon=6.64&appid=4a74f5a3ad8248e9f1da66c08687148b"

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
        }
        else{
            throw Error(await response.test());
        }
    }
    catch (err) {
        console.log(err);
    }
}

apiFetch(url);