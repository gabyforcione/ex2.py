async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'SUA_CHAVE_API'; // Substitua pela sua chave da OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <p><strong>Clima em ${data.name}:</strong></p>
        <p>${data.weather[0].description}</p>
        <p>🌡️ Temperatura: ${data.main.temp}°C</p>
        <p>💧 Umidade: ${data.main.humidity}%</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>Cidade não encontrada.</p>`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Erro ao buscar dados.</p>`;
  }
}
