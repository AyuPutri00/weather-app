// api/weather.js
export default async function handler(req, res) {
  const { city } = req.query;

  if (!city) return res.status(400).json({ message: "City is required" });

  const API_KEY = process.env.OPENWEATHER_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=id&appid=${API_KEY}`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch weather" });
  }
}
