import React from 'react';
import './Day.css';


class Day extends React.Component {
  
  render() {
    return (
      <div className="weatherDiv">

        {this.props.weatherDataInfoArr.length > 0 ? this.props.weatherDataInfoArr.map((value, idx) => {
          console.log(value)
          
          return <div key={idx}>
            <h2>DATE: {value.date}</h2>
            <p>Clouds: {value.description}</p>
            <p>Low Temp: {value.lowTemp}</p>
            <p>High Temp: {value.highTemp}</p>
          </div>
        })
          : ''}
          
      </div>
    )
  }
};
export default Day;
