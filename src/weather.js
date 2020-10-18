const API_KEY = "04fbe5903fb0ab8181b13029d8a515c8"
const weather = document.querySelector(".weather h1")

const getWeather = ({latitude: lat, longitude: lon}) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(res => res.json()).then(
        json => {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`
        }
    )
}

const saveCoords = (coordsObj) => {
    localStorage.setItem("COORDS", JSON.stringify(coordsObj));
    getWeather(coordsObj);
}

const handleSuccess = ({coords: {latitude, longitude}}) => {
    saveCoords({latitude, longitude});
}

const handleError = () => {
    console.error("can not get location.")
}

const askLocation = () => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}

const loadCoords = () => {
    let coordsObj = JSON.parse(localStorage.getItem("COORDS"));
    if (coordsObj) {
        console.log(coordsObj);
        getWeather(coordsObj);
    } else {
        askLocation();
    }
}

const weatherInit = () => {
    loadCoords();
}
weatherInit();