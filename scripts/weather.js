document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '3a37a3284cd6ada8f22e44e46aeb2fdc';
    const weatherInfo = document.getElementById('weatherInfo');
    const banerInfo = document.querySelector('.maxtemp');
  
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9wYW56YWNjaGkiLCJhIjoiY2xvM2oyZG9mMGZoYjJ3dGR1eXNkZGQzdyJ9.MaO03BaJJRwPI6VT5x-hBw';
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = 20.457420047734924;
        const lon = -86.92508218499646;
  
        document.getElementById('map').innerHTML = '';
  
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
            const location = data.name;
            const temperatureFahrenheit = data.main.temp;
            const windSpeed = data.wind.speed;
            const description = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;
            const humedity = data.main.humidity;
            const maxTemp = data.main.temp_max;
            const wMain = data.weather[0].main;
  
  
            const weatherHTML = `
                  <h3>Weather in ${location}:</h3>
                  <p>Temperature: ${temperatureFahrenheit}°F</p>
                  <p>Wind Speed: ${windSpeed} m/s</p>
                  <p>Humidity: ${humedity} %</>
                  <p>Main description: ${wMain}</>
                  <p>Description: ${description}</p>
                  <img id="weather-icon" src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather icon">
                `;
            const banner = `
                  <p>${maxTemp} °F</P>
              `;
  
            map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/outdoors-v12',
              center: [lon, lat],
              zoom: 10
            });
            banerInfo.innerHTML = banner;
            weatherInfo.innerHTML = weatherHTML;
          })
          .catch((error) => {
            weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
          });
      }, error => {
        weatherInfo.innerHTML = '<p>Error getting location.</p>';
      });
    } else {
      weatherInfo.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
    }
  });
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const apiKey = '3a37a3284cd6ada8f22e44e46aeb2fdc';
    const weatherInfo = document.getElementById('weatherInfo');
  
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ1bm9wYW56YWNjaGkiLCJhIjoiY2xvM2oyZG9mMGZoYjJ3dGR1eXNkZGQzdyJ9.MaO03BaJJRwPI6VT5x-hBw';
  
  
    async function fetchWeatherForecast(latitude, longitude) {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
  
          displayForecast(data);
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
    }
  
  
    function displayForecast(data) {
      const forecastContainer = document.getElementById('forecast-container');
      forecastContainer.innerHTML = '';
  
      const today = new Date();
      const currentDayIndex = today.getDay();
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
      let count = 0;
      for (let i = 0; i < data.list.length; i++) {
        const forecastDate = new Date(data.list[i].dt * 1000);
        const forecastDayIndex = forecastDate.getDay();
  
  
        if (forecastDate.getHours() === 15 && count < 3) {
          const temperatureFahrenheit = ((data.list[i].main.temp - 273.15) * 9 / 5) + 32;
          const nextDay = daysOfWeek[forecastDayIndex];
          const forecastElement = document.createElement('div');
          forecastElement.innerHTML = `${nextDay} at 3pm: ${temperatureFahrenheit.toFixed(2)}°F`;
          forecastContainer.appendChild(forecastElement);
          count++;
        }
      }
    }
  
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        fetchWeatherForecast(lat, lon);
      }, error => {
        weatherInfo.innerHTML = '<p>Sorry the location could not be obtained.</p>';
      });
    } else {
      weatherInfo.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
    }
  });
  
  
  
  
  