import React from 'react';


class Weather extends React.Component {

  render() {
    console.log(this.props.weatherDataInfoArr);
    return (
      <>
        {this.props.weatherDataInfoArr.length > 0 ? this.props.weatherDataInfoArr.map((value, idx) => (
          <div key={idx}>
            <h2>DATE: {value.date}</h2>
            <p>Clouds: {value.description}</p>
            <p>Low Temp: {value.lowTemp}</p>
            <p>High Temp: {value.highTemp}</p>
          </div>
        ))
          : ''}
      </>
    )
  }
};
export default Weather;
