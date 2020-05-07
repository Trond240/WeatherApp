import React, { Component } from 'react';
import './App.css';
import { fetchCurrentLocation, fetchDailyCast, searchForLocation } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/apiCalls.js';
import { CurrentLocation } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/currentLocation/currentLocation.js';
import { NavBar } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/navBar/navBar.js';
import { WeatherContainer } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherContainer/weatherContainer.js';



class App extends Component {
  constructor(){
  super();
  this.state = {
    defaultDay:{},
    dailyForcast: []
    };
  }

  componentDidMount() {
    fetchCurrentLocation()
    .then(data => {
      // this.setState(data)
      this.setState({defaultDay: data})
      console.log(this.state.defaultDay)
    })
    .catch(err => console.log(err))

    fetchDailyCast()
    .then(data => {
      this.setState({dailyForcast: data.daily})
    })
    .catch(err => console.log(err))
  }

  searchForCity(cityName) {
    searchForLocation(cityName)
    .then(data => console.log(data))
  }

  render() {
    console.log(this.state.dailyForcast)
    let currentLocation 
    let weatherCard
    if(!this.state.defaultDay.coord && this.state.dailyForcast.length === 0) {
      currentLocation = <h1>....LOADING</h1>
      weatherCard = <h1>....LOADING</h1>
    } else {
      currentLocation =  <CurrentLocation currentLocation={this.state.defaultDay}/>
      weatherCard = <WeatherContainer weatherCard={this.state.dailyForcast}/>
    }
    return (
      <main className='main-app'>
        <NavBar/>
        <div className='weather-div'>
          {currentLocation}
          {weatherCard}
        </div>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
        </style>
      </main>
    )
  }
}

export default App;
