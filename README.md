🌤️ Weather App
A simple and elegant weather web application that fetches real-time weather data using a weather API and displays it in a clean card-based UI.

📸 Preview

<img width="1920" height="1022" alt="Screenshot (79)" src="https://github.com/user-attachments/assets/4a276465-a334-447a-8f65-b4bcb0fd74f8" />

The app displays:

City name

Current temperature (°F)

Humidity percentage

Weather condition (e.g., haze, sunny, cloudy)

A weather condition icon/illustration

🚀 Features

Search weather by city name

Real-time data fetched from a weather API

Dynamic weather icons based on conditions

Gradient background card that reflects the weather mood

Clean, minimal UI

🛠️ Tech Stack

HTML/CSS/JavaScript — Frontend

Weather API (e.g., OpenWeatherMap) — For fetching live weather data



🔧 Setup & Installation

Clone the repository:

git clone https://github.com/mishrashivi1/Weather-application

cd Weather-application

Run the app:

Simply open index.html in your browser, or use a local development server:

npx live-server

📡 How It Works

The user types a city name into the search input.

On clicking Get Weather, the app makes a fetch() request to a free public weather API — no authentication or API key required:

   https://wttr.in/{city}?format=j1
(or whichever public endpoint is used in the project)

The API returns a JSON response with temperature, humidity, weather description, and more.

The app parses the response and dynamically updates the weather card on the page.

📁 Project Structure

weather-app/
├── index.html       # Main HTML structure
├── style.css        # Styling and card layout
├── script.js        # API fetch logic and DOM updates
└── README.md        # Project documentation



No API key or sign-up is required — the app uses a free public API.
The public API may have rate limits or occasional downtime depending on the provider.
Ensure the city name is spelled correctly for accurate results.
