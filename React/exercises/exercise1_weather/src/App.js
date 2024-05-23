//import logo from './logo.svg';
import './App.css';
import localweather from './StJohnsWeather.json';
import OttawaWeather from './OttawaWeather.json';
import { useEffect, useReducer, useState } from 'react';

function App() {

 let [weatherForecast, setWeatherForecast] = useState(localweather)

  let [count, setCount] = useReducer( (state, action) => {
    let next = state - action;
    if (next <= 0) {
      if (weatherForecast.city === "St Jonn's" ? setWeatherForecast(OttawaWeather) : setWeatherForecast(localweather));
      return 5;
    } else {
      return next;
    }
  }, 5);

  useEffect( () => {
    setInterval( () => {
      setCount(1)
    }, 1000)
  }, [])

 
  return (
    <>
      <h2>{count}</h2>
      {/* <button onClick={(evt) => {
        weatherForecast.city === "St Jonn's" ? setWeatherForecast(OttawaWeather) : setWeatherForecast(localweather)
      }}>{weatherForecast.city}</button> */}
      <h2>Noah's Weather</h2>
      <WeatherList weather={weatherForecast}></WeatherList>
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
};

export default App;
