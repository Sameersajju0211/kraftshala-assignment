Weather App Setup Instructions
This Weather App delivers real-time weather updates for your current location and enables searches for weather information in other cities or zip codes. It showcases the current temperature, weather conditions, date, time, and additional details such as sunrise and sunset times.

Features
Real-time weather updates for the current location.
Search functionality for weather data by city or zip code.
Temperature display in both Celsius and Fahrenheit.
Current date and time display.
Additional weather details including humidity, sunrise, and sunset times.
Responsive design for multiple devices.
Technologies Used
React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
OpenWeather API: Source for weather data.
React Live Clock: Real-time clock component.
React Animated Weather: Animated weather icons.
Getting Started
Follow these steps to set up the project on your local machine.

Prerequisites
Ensure Node.js and npm are installed on your machine.
Obtain an OpenWeather API key.
Installation
Clone the repository:


git clone https://github.com/yourusername/weather-app.git
cd weather-app
Install dependencies:


npm install
Add your OpenWeather API key:

Create a file named weatherAPI.js in the src directory.
Add the following content to the file:
javascript

// src/api/weatherAPI.js
const apiKeys = {
  key: 'YOUR_API_KEY_HERE',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default apiKeys;
Start the development server:


Open the app in your web browser. By default, it will detect your current location and display the weather information.
Use the input field to enter a city name or zip code and click "Search" to retrieve weather data for the specified location.