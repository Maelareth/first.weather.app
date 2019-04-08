import React from 'react';


import Titles from './components/Titles';
import Forms from './components/Forms';
import WeatherDay from './components/WeatherDay';


const Api_Key= '802f6523acc961f46cc9a859bd6eae58';


class App extends React.Component {
  getWeather = async (e)=> {
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=${Api_Key }&units=metric`);

    const data = await api_call.json();
    console.log(data);
    }

  render () {
  return (
    <div>
      <Titles />
      <Forms getWeather={this.getWeather}/>
      <WeatherDay />
    </div>
      );
    }
  };


export default App;
