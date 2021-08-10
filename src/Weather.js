import React from 'react';
import Day from './Day';
import './Weather.css';


class Weather extends React.Component {

  render() {
    return (
      <>

        {this.props.displayWeather ? <Day weatherDataInfoArr={this.props.weatherDataInfoArr} /> : ''}

      </>
    )
  }
};
export default Weather;
