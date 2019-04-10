import React from 'react';


import Titles from './components/Titles';
import Forms from './components/Forms';
import Weather from './components/Weather';


const Api_Key= '802f6523acc961f46cc9a859bd6eae58';


class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    erro: undefined

  }
    getWeather = async (e)=> {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key }&units=metric`);
      const data = await api_call.json();
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }

  render () {
  return (
    <div>
      <Titles />
      <Forms getWeather={this.getWeather}/>
      <Weather
      temperature= {this.state.temperature}
      city= {this.state.city}
      country= {this.state.country}
      humidity= {this.state.humidity}
      description= {this.state.description}
      error={this.state.error}
      />
    </div>
      );
    }
  };


export default App;
