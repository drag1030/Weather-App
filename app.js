const apiKey = '8a6e763c0b6011337605f01b06675dd0';

const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherImg = document.getElementById('weather-img');

searchButton.addEventListener('click',async () => {
  const city = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      cityName.textContent = data.name;
      weatherDescription.textContent = data.weather[0].description;
      temperature.textContent = `Temperature: ${data.main.temp}°C`;
      humidity.textContent = `Humidity: ${data.main.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
      weatherImg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
    .catch(error => console.log(error));
});
