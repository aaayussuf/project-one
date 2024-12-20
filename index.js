document.getElementById('searchBtn').addEventListener('click', getWeather);

function getWeather() {
    const locationInput = document.getElementById('locationInput').value.trim();

    if (!locationInput) {
        alert('Please enter a city or coordinates.');
        return;
    }

    const apiKey = 'b7a5c7fb2e462336d7230f1a702ef155'; // Replace with your actual API key
    const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${locationInput}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('locationName').textContent = data.location.name;
            document.getElementById('temperature').textContent = data.current.temperature;
            document.getElementById('humidity').textContent = data.current.humidity;
            document.getElementById('windSpeed').textContent = data.current.wind_speed;
            document.getElementById('condition').textContent = data.current.weather_descriptions[0];
        })
        .catch(error => {
            alert(error.message);
        });
}
