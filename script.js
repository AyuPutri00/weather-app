function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Masukkan nama kota");
    return;
  }

  fetch(`/api/weather?city=${city}`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        alert(data.message);
        return;
      }

      document.getElementById("cityName").innerText =
        `${data.name}, ${data.sys.country}`;

      document.getElementById("description").innerText =
        data.weather[0].description;

      document.getElementById("weatherIcon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      document.getElementById("temp").innerText =
        `${Math.round(data.main.temp)}°C`;

      document.getElementById("feelsLike").innerText =
        `${Math.round(data.main.feels_like)}°C`;

      document.getElementById("humidity").innerText =
        `${data.main.humidity}%`;

      document.getElementById("pressure").innerText =
        `${data.main.pressure} hPa`;

      document.getElementById("windSpeed").innerText =
        `${data.wind.speed} m/s`;

      document.getElementById("windDeg").innerText =
        `${data.wind.deg}°`;

      document.getElementById("weatherResult")
        .classList.remove("hidden");
    })
    .catch(() => {
      alert("Gagal mengambil data cuaca");
    });
}
