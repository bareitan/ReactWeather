var React = require('react');

var WeatherMessage = ({temp,location}) =>{
    return (
      <p className="text-center">It's now {temp} degrees in {location}</p>
    )
  }

module.exports = WeatherMessage;
