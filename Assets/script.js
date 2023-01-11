var searchBtn = document.getElementById("search");
var input = document.getElementById("input");
var historyList = document.getElementById("history");
var city;
var getCities = [];
var searchHistory;

console.log($);
console.log(typeof $);




function weatherBalloon(cityID) {
    var key = 'da6641fab750455262ef12ca3de15fb6';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {

        });
}



window.onload = function () {
    weatherBalloon(6167865);
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);


    document.getElementById('wind-speed').innerHTML = "wind speed: " + d.wind.speed + ' meters per second';
    document.getElementById('temp').innerHTML = celcius + '&deg;' + " celcius / " + fahrenheit + '&deg;' + " fahrenheit";
    document.getElementById('location').innerHTML = d.name;

    document.getElementById('humidity').innerHTML = "humidity: " + d.main.humidity + '%';
}


function getCityWeather() {

    let city = document.getElementById('input').value;
    let key = 'da6641fab750455262ef12ca3de15fb6';
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`;

    fetch(url)
        .then((resp) => {
            if (!resp.ok) throw new Error(resp.statusText);
            return resp.json()
        })
        .then((data) => {
            showWeather(data)
        })
        .catch(console.err);

}




searchBtn.addEventListener("click", getCityWeather);




