//import logo from './logo.svg';
import './App.css';
import localweather from './StJohnsWeather.json';
import { useState } from 'react';

function App() {
  //let clicked = 0;
  let [clicked, setClicked] = useState(0)
  return (
    <>
      <button onClick={(evt) => {
        setClicked(clicked + 1);
      }}>{clicked}</button>
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
};

export default App;
