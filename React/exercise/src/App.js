//import logo from './logo.svg';
import './App.css';
import localweather from './StJohnsWeather.json';

function App() {
  console.log(localweather);
  return (
    <>
      <h2>Noah's Weather</h2>
      <WeatherList weather={localweather}></WeatherList>
    </>
  );
}

function WeatherList({weather}) {
  return (
    <>
      <h2>{weather.city}</h2>
      {weather.forecast.map(day => <Weather info={day}></Weather>)}
    </>
  );
};

function Weather({info}) {
  return (
    <>
      <h3>{info.day}</h3>
      <p>{info.temp}</p>
      <p>{info.precip}</p>
      <p>{info.wind}</p>
      <br></br>
    </>
  )
}

export default App;
