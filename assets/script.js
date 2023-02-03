var weatherSubmitButton = document.getElementById("WeatherBtn");
var weatherInput = document.getElementById("city-input");
var currentWeatherTemp = document.getElementById("current-weather-temp");
var currentWeatherWind = document.getElementById("current-weather-wind");
var currentWeatherHumidity = document.getElementById("current-weather-humidity");

var day1Temp = document.getElementById("day-1-temp");
var day1Wind = document.getElementById("day-1-wind");
var day1Humidity = document.getElementById("day-1-humidity");
var day2Temp = document.getElementById("day-2-temp");
var day2Wind = document.getElementById("day-2-wind");
var day2Humidity = document.getElementById("day-2-humidity");
var day3Temp = document.getElementById("day-3-temp");
var day3Wind = document.getElementById("day-3-wind");
var day3Humidity = document.getElementById("day-3-humidity");
var day4Temp = document.getElementById("day-4-temp");
var day4Wind = document.getElementById("day-4-wind");
var day4Humidity = document.getElementById("day-4-humidity");
var day5Temp = document.getElementById("day-5-temp");
var day5Wind = document.getElementById("day-5-wind");
var day5Humidity = document.getElementById("day-5-humidity");

weatherSubmitButton.addEventListener('click', function (event) {

    event.preventDefault();
    console.log(weatherInput.value);
    console.log("Fetching weather info...");
    fetchWeather(weatherInput.value);
});


function fetchWeather(location) {

    var currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c171672f4bbc8048bf259a3ea61decb1&units=imperial`;

    fetch(currentWeatherURL)
        .then(response => response.json())
        .then(data => {
            currentWeatherTemp.innerHTML = data.main.temp;
            currentWeatherWind.innerHTML = data.wind.speed;
            currentWeatherHumidity.innerHTML = data.main.humidity;
        });

    var fiveDayForecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c171672f4bbc8048bf259a3ea61decb1&units=imperial`;

    fetch(fiveDayForecastURL)
        .then(response => response.json())
        .then(data => {

            const allForecasts = {};
            data.list.map((threeHourForecast) => {
                const date = new Date(threeHourForecast.dt * 1000);
                allForecasts[date] = threeHourForecast;
            });

            const day1 = allForecasts[moment().startOf("day").add(1, "days").toDate()];
            const day2 = allForecasts[moment().startOf("day").add(2, 'days').toDate()];
            const day3 = allForecasts[moment().startOf("day").add(3, "days").toDate()];
            const day4 = allForecasts[moment().startOf("day").add(4, "days").toDate()];
            const day5 = allForecasts[moment().startOf("day").add(5, "days").toDate()];

            day1Temp.innerHTML = day1.main.temp;
            day1Humidity.innerHTML = day1.main.humidity;
            day1Wind.innerHTML = day1.wind.speed;

            day2Temp.innerHTML = day2.main.temp;
            day2Humidity.innerHTML = day2.main.humidity;
            day2Wind.innerHTML = day2.wind.speed;

            day3Temp.innerHTML = day3.main.temp;
            day3Humidity.innerHTML = day3.main.humidity;
            day3Wind.innerHTML = day3.wind.speed;

            day4Temp.innerHTML = day4.main.temp;
            day4Humidity.innerHTML = day4.main.humidity;
            day4Wind.innerHTML = day4.wind.speed;

            day5Temp.innerHTML = day5.main.temp;
            day5Humidity.innerHTML = day5.main.humidity;
            day5Wind.innerHTML = day5.wind.speed;
        });
    return "Weather info";
}

var cityNameHistory = [];
var WeatherKey = "eef0c7305b615df93c13893667426699";

function CityData() {
    var currentWeatherURL = "https://api.openweathermap.org/geo/1.0/direct?q=c171672f4bbc8048bf259a3ea61decb1"
    function currentWeatherData() {
        var currentWindEl = document.createElement('p')
        var currentHumidityEl = document.createElement('p')
        var currentVisibiltyEl = document.createElement('p')

        cityNameEl.textContent = data.name
        var pTempF = 1.8 * (Number(data.main.temp) - 273) + 32
        pTempF = Math.round(pTempF * 10) / 10
        currentTempEl.textContent = pTempF + " " + "°F"
        currentWindEl.textContent = data.wind.speed + " " + "mph"
        currentHumidityEl.textContent = data.main.humidity + "%"
        WeatherBtn.addEventListener('click', function (event) {
            currentWeatherData();
        })
    };
};