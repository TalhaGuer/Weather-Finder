function getWeather() {
    var cityName = document.getElementById("searchInput").value;
    var apiKey = 'f48ca7fca4ecb99cc062a0895bd60433'; 

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey)
        .then(response => response.json())
        .then(data => {
            var weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `
                <h2>${data.name} için Hava Durumu</h2>
                <p>Sıcaklık: ${kelvinToCelcius(data.main.temp)}°C</p>
                <p>Genel Durum: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.log('Hata:', error);
            var weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<p>Şehir bulunamadı!</p>`;
        });
}

function kelvinToCelcius(kelvin) {
    return Math.round(kelvin - 273.15);
}
